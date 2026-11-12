// Helper utility functions

export const formatDate = (isoString) => {
  if (!isoString) return 'Just now';
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  } catch {
    return isoString;
  }
};

export const getRiskClassification = (score) => {
  if (score >= 80) return 'CRITICAL';
  if (score >= 60) return 'HIGH';
  if (score >= 35) return 'MEDIUM';
  return 'LOW';
};

export const getRiskStyles = (classificationOrScore) => {
  const classification = typeof classificationOrScore === 'number' 
    ? getRiskClassification(classificationOrScore) 
    : (classificationOrScore || 'LOW').toUpperCase();

  switch (classification) {
    case 'CRITICAL':
      return {
        badgeBg: 'bg-red-50 text-red-700 border-red-200',
        cardBorder: 'border-red-300',
        text: 'text-red-600',
        bg: 'bg-red-500',
        accentBg: 'bg-red-50',
        stroke: '#EF4444',
        label: 'Critical Risk',
        iconName: 'AlertOctagon'
      };
    case 'HIGH':
      return {
        badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
        cardBorder: 'border-orange-300',
        text: 'text-orange-600',
        bg: 'bg-orange-500',
        accentBg: 'bg-orange-50',
        stroke: '#F97316',
        label: 'High Risk',
        iconName: 'AlertTriangle'
      };
    case 'MEDIUM':
      return {
        badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
        cardBorder: 'border-amber-300',
        text: 'text-amber-600',
        bg: 'bg-amber-500',
        accentBg: 'bg-amber-50',
        stroke: '#F59E0B',
        label: 'Medium Risk',
        iconName: 'AlertCircle'
      };
    case 'LOW':
    default:
      return {
        badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        cardBorder: 'border-emerald-300',
        text: 'text-emerald-600',
        bg: 'bg-emerald-500',
        accentBg: 'bg-emerald-50',
        stroke: '#10B981',
        label: 'Low / Safe',
        iconName: 'ShieldCheck'
      };
  }
};

export const isValidUrl = (string) => {
  if (!string || typeof string !== 'string') return false;
  try {
    const url = new URL(string.trim().startsWith('http') ? string.trim() : `https://${string.trim()}`);
    return Boolean(url.hostname && url.hostname.includes('.'));
  } catch {
    return false;
  }
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const truncateText = (text, maxLength = 80) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
