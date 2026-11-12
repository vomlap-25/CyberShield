/**
 * CyberShield API Service Layer
 * 
 * Configured for Python FastAPI backend integration at VITE_API_BASE_URL.
 * Seamlessly provides clearly-labelled heuristic demo fallbacks when the backend
 * is offline or under development.
 */

import { mockDashboardStats } from '../data/mockStats';
import { mockRecentScans } from '../data/mockScans';
import { 
  analyzePhishingLocally, 
  analyzeUrlLocally, 
  analyzeDigitalArrestLocally, 
  analyzeApplicationLocally 
} from '../utils/heuristicAnalyzer';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// In-memory / session storage store for scans performed during this user session
const getStoredScans = () => {
  try {
    const saved = sessionStorage.getItem('cybershield_scans');
    return saved ? JSON.parse(saved) : mockRecentScans;
  } catch {
    return mockRecentScans;
  }
};

const saveScanToSession = (scanResult) => {
  try {
    const current = getStoredScans();
    const updated = [scanResult, ...current.filter(s => s.id !== scanResult.id)];
    sessionStorage.setItem('cybershield_scans', JSON.stringify(updated));
  } catch (err) {
    console.warn('[CyberShield API] Could not cache scan in session storage', err);
  }
};

// Generic fetch with timeout
const fetchWithTimeout = async (url, options = {}, timeout = 4000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

/**
 * Health check to detect if FastAPI backend is online
 */
export const checkBackendStatus = async () => {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/health`, { method: 'GET' }, 2000);
    return res.ok;
  } catch {
    return false;
  }
};

/**
 * POST /api/scan/phishing
 * Scans SMS, email, or messaging content for phishing patterns
 */
export const scanPhishing = async (message) => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/scan/phishing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    }, 5000);

    if (response.ok) {
      const data = await response.json();
      saveScanToSession(data);
      return { ...data, isDemo: false };
    }
    throw new Error(`Backend returned status ${response.status}`);
  } catch (error) {
    console.warn(`[CyberShield API] Backend offline at ${API_BASE_URL}/api/scan/phishing. Using heuristic demo engine.`, error.message);
    const simulated = analyzePhishingLocally(message);
    saveScanToSession(simulated);
    return simulated;
  }
};

/**
 * POST /api/scan/url
 * Scans destination URL for typosquatting, phishing, and threat intelligence
 */
export const scanUrl = async (url) => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/scan/url`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    }, 5000);

    if (response.ok) {
      const data = await response.json();
      saveScanToSession(data);
      return { ...data, isDemo: false };
    }
    throw new Error(`Backend returned status ${response.status}`);
  } catch (error) {
    console.warn(`[CyberShield API] Backend offline at ${API_BASE_URL}/api/scan/url. Using heuristic demo engine.`, error.message);
    const simulated = analyzeUrlLocally(url);
    saveScanToSession(simulated);
    return simulated;
  }
};

/**
 * POST /api/scan/digital-arrest
 * Scans suspicious legal notices, calls, and transcripts for digital arrest coercion
 */
export const scanDigitalArrest = async (content) => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/scan/digital-arrest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    }, 5000);

    if (response.ok) {
      const data = await response.json();
      saveScanToSession(data);
      return { ...data, isDemo: false };
    }
    throw new Error(`Backend returned status ${response.status}`);
  } catch (error) {
    console.warn(`[CyberShield API] Backend offline at ${API_BASE_URL}/api/scan/digital-arrest. Using heuristic demo engine.`, error.message);
    const simulated = analyzeDigitalArrestLocally(content);
    saveScanToSession(simulated);
    return simulated;
  }
};

/**
 * POST /api/scan/application
 * Static analysis of Android APK packages
 */
export const scanApplication = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetchWithTimeout(`${API_BASE_URL}/api/scan/application`, {
      method: 'POST',
      body: formData
    }, 8000);

    if (response.ok) {
      const data = await response.json();
      saveScanToSession(data);
      return { ...data, isDemo: false };
    }
    throw new Error(`Backend returned status ${response.status}`);
  } catch (error) {
    console.warn(`[CyberShield API] Backend offline at ${API_BASE_URL}/api/scan/application. Using heuristic demo engine.`, error.message);
    const simulated = analyzeApplicationLocally(file);
    saveScanToSession(simulated);
    return simulated;
  }
};

/**
 * GET /api/scan/{scan_id}
 * Retrieves full report details by scan ID
 */
export const getScanById = async (scanId) => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/scan/${scanId}`, {}, 3000);
    if (response.ok) {
      const data = await response.json();
      return { ...data, isDemo: false };
    }
  } catch {
    // Fall back to session or mock store
  }

  const allScans = getStoredScans();
  const match = allScans.find(s => s.id === scanId);
  if (match) return match;

  // Fallback default
  return mockRecentScans[0];
};

/**
 * GET /api/dashboard/stats
 * Retrieves overview metrics, threat distribution, and timeline
 */
export const getDashboardStats = async () => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/dashboard/stats`, {}, 3000);
    if (response.ok) {
      const data = await response.json();
      return { ...data, isDemoData: false };
    }
  } catch {
    // Backend offline, return marked mock stats
  }
  return mockDashboardStats;
};

/**
 * GET /api/scan/history
 * Retrieves recent community / user scan logs
 */
export const getScanHistory = async () => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/api/scan/history`, {}, 3000);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch {
    // Backend offline, return local session / mock scans
  }
  return getStoredScans();
};
