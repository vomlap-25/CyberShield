# CyberShield – Cyber Security Awareness & Threat Detection Platform

**CyberShield** is a modern, responsive, production-quality cyber security awareness frontend designed for college community demonstration and public awareness against online scams. It helps users identify and analyze:
- **Phishing & Smishing Messages** (Banking impersonation, fake KYC alerts, electricity cut-off SMS)
- **Malicious & Typosquatting URLs** (Fake payment gateways, spoofed government portals)
- **Digital Arrest Scams** (Extortion calls/notices impersonating CBI, ED, Police, or Customs over Skype/WhatsApp)
- **Potentially Dangerous Android APKs** (Predatory loan apps and sideloaded spyware using static analysis)

---

## Tech Stack

- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS with custom deep navy and cyan design tokens
- **Routing**: React Router DOM (v6) with operational sidebar navigation and breadcrumbs
- **Icons**: Lucide React
- **Data Visualizations**: Recharts (Interactive Threat Distribution Donut & Scan Velocity Charts)
- **API Architecture**: Separate service layer (`src/services/api.js`) targeting Python FastAPI backend with intelligent heuristic simulation fallback

---

## Project Structure

```
cybershield/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .env
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   ├── data/
│   │   ├── mockAwareness.js      # Comprehensive scam encyclopedic data (6 categories)
│   │   ├── mockScans.js          # Historical scan records across all 4 categories
│   │   └── mockStats.js          # Dashboard telemetry, metrics, and distribution data
│   ├── utils/
│   │   ├── helpers.js            # Formatters, URL validation, risk classifications
│   │   └── heuristicAnalyzer.js  # High-fidelity client-side heuristic engine for demo mode
│   ├── services/
│   │   └── api.js                # FastAPI service layer with fallback to demo heuristics
│   ├── hooks/
│   │   └── useToast.jsx          # Notification system for feedback & alerts
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx        # Sticky navigation with live backend status indicator
│   │   │   ├── Footer.jsx        # Mission, emergency helpline (1930), disclaimer
│   │   │   ├── Breadcrumbs.jsx   # Contextual breadcrumbs
│   │   │   ├── Badge.jsx         # Risk level & status pill badges
│   │   │   └── LoadingSkeleton.jsx
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx     # Master wrapper with scroll restoration
│   │   │   └── DashboardLayout.jsx # Collapsible security operations sidebar
│   │   ├── dashboard/
│   │   │   ├── StatCards.jsx     # Metric cards with demo data indicator
│   │   │   ├── ThreatDistributionChart.jsx # Recharts Pie/Donut chart
│   │   │   ├── ScanActivityChart.jsx       # Recharts Area activity chart
│   │   │   ├── RecentScansTable.jsx        # Filterable & searchable scan audit log
│   │   │   └── QuickScanGrid.jsx           # Direct category launchers
│   │   ├── scanner/
│   │   │   ├── PhishingScanner.jsx         # SMS / text scanner with presets
│   │   │   ├── UrlScanner.jsx              # Domain validator with format checking
│   │   │   ├── DigitalArrestScanner.jsx    # Intimidation transcript / notice analyzer
│   │   │   ├── ApkScanner.jsx              # APK file uploader & static disclaimer
│   │   │   └── ScanProgressModal.jsx       # 4-stage heuristic scanning animator
│   │   ├── results/
│   │   │   ├── RiskGauge.jsx               # Visual radial 0-100 risk meter
│   │   │   ├── SuspiciousIndicators.jsx    # Flagged red-flag breakdown & justifications
│   │   │   └── SafetyRecommendations.jsx   # Action checklist & emergency 1930 banner
│   │   └── awareness/
│   │       ├── ScamCard.jsx                # Educational article card
│   │       └── CategoryFilter.jsx          # Search bar & category pill filters
│   └── pages/
│       ├── LandingPage.jsx       # Hero, 4 threat pillars, how it works, stats, preview
│       ├── DashboardPage.jsx     # Telemetry overview, charts, and scan logs
│       ├── ScanPage.jsx          # Unified 4-tab scanner center
│       ├── ResultsPage.jsx       # In-depth risk report with printable PDF styling
│       ├── AwarenessPage.jsx     # 6-topic educational guide hub with live search
│       ├── ScamDetailPage.jsx    # Deep-dive article with illustrative cases & warning signs
│       ├── AboutPage.jsx         # Objectives, modules, community impact, disclaimer
│       └── NotFoundPage.jsx      # Clean 404 handler
```

---

## Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) and **npm** installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default configuration:
```env
VITE_API_BASE_URL=http://localhost:8000
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified by Vite) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized bundle will be created in the `dist/` directory.

---

## FastAPI Backend Integration Preparation

The frontend is architected to work **standalone out-of-the-box** using an intelligent local heuristic simulation engine while remaining **100% prepared** to connect to the FastAPI backend developed by your team.

### Backend Endpoints Expected:
1. `POST /api/scan/phishing` - Payload: `{ "message": "string" }`
2. `POST /api/scan/url` - Payload: `{ "url": "string" }`
3. `POST /api/scan/digital-arrest` - Payload: `{ "content": "string" }`
4. `POST /api/scan/application` - Multipart Form: `file` (.apk binary)
5. `GET /api/scan/{scan_id}` - Retrieve stored scan by ID
6. `GET /api/dashboard/stats` - Telemetry metrics & distribution
7. `GET /api/scan/history` - Recent scans log
8. `GET /api/health` - Health check (used by Navbar status pill)

When the FastAPI server is running at `http://localhost:8000`, the Navbar indicator automatically turns to **Live (Green)**. If offline, the platform seamlessly runs with clearly marked **Demo Mode (Amber)** so demonstrations can proceed uninterrupted.

---

## Key Features

1. **Production-Ready Visual Design**: Clean dark navy palette, cyan interactive accents, legible typography, and rounded cards.
2. **Unified Scan Centre**: Four distinct scanners with one-click test presets, live input validation, and drag-and-drop APK upload with file size checks.
3. **Transparent Heuristics & Reports**: Interactive 0-100 radial risk gauge, weighted indicators, and clean printable PDF report format.
4. **Comprehensive Awareness Hub**: 6 curated topics covering Digital Arrest, Phishing, UPI Fraud, Typosquatting, Malicious APKs, and OTP Theft.
5. **Emergency Readiness**: National Helpline `1930` and `cybercrime.gov.in` callout banners.
6. **Mobile Responsive**: Fully responsive layout with mobile drawer menu and slide-out security operations sidebar.
