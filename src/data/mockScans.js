export const mockRecentScans = [
  {
    id: "scan-phish-101",
    type: "phishing",
    category: "Phishing Message",
    inputSnippet: "Dear customer, your SBI YONO account will be blocked today. Update PAN immediately at bit.ly/sbi-pan-kyc",
    timestamp: "2026-11-12T13:45:00Z",
    riskScore: 92,
    riskClassification: "CRITICAL",
    summary: "High-confidence bank impersonation smishing attempt using artificial urgency, shortened obfuscated URL, and credential harvesting intent.",
    indicators: [
      { name: "Urgency and Threat of Disconnection", severity: "high", desc: "Claims account will be blocked within 24 hours to cause panic." },
      { name: "Shortened / Obfuscated Link", severity: "critical", desc: "Uses bit.ly URL redirecting to non-official bank hostname." },
      { name: "Impersonation of Financial Institution", severity: "high", desc: "Falsely represents State Bank of India YONO." },
      { name: "Sensitive Data Request", severity: "high", desc: "Demands PAN and KYC submission via unverified portal." }
    ],
    reasons: [
      "No legitimate Indian bank uses bit.ly or short links for mandatory KYC updates.",
      "The message lacks official sender ID (e.g. VK-SBIINB) and was distributed from a standard 10-digit mobile number.",
      "Urgency heuristics detected strong coercion tactics commonly utilized in smishing vectors."
    ],
    recommendations: [
      "Do NOT click the link or disclose your password, OTP, or PAN card number.",
      "Block the sender number immediately on your mobile carrier / messaging app.",
      "Forward the SMS to 1909 (TRAI Spam reporting) or submit to cybercrime.gov.in.",
      "Verify your true account status only through official SBI YONO application or branch."
    ],
    isDemo: true
  },
  {
    id: "scan-url-102",
    type: "url",
    category: "Malicious URL",
    inputSnippet: "https://paytm-kyc-reward-claim982.top/login",
    timestamp: "2026-11-12T11:20:00Z",
    riskScore: 88,
    riskClassification: "HIGH",
    summary: "Typosquatting domain masquerading as a Paytm reward gateway. Uses suspicious top-level domain (.top) and unencrypted login forms.",
    indicators: [
      { name: "Domain Typosquatting / Brand Hijacking", severity: "critical", desc: "Contains brand keyword 'paytm' in an unauthorized 3rd-party domain." },
      { name: "High-Risk Top-Level Domain (.top)", severity: "medium", desc: "TLD with low registration vetting frequently associated with scams." },
      { name: "Recently Registered Domain (<7 days)", severity: "high", desc: "WHOIS telemetry indicates domain was spawned less than a week ago." }
    ],
    reasons: [
      "Official Paytm portals strictly resolve to '*.paytm.com' domains.",
      "SSL certificate is self-issued and does not match corporate identity.",
      "Form destination points to unauthorized third-party logging endpoint."
    ],
    recommendations: [
      "Do not enter UPI PIN, card numbers, or mobile numbers on this page.",
      "Close the browser tab immediately and clear cached files if visited.",
      "Report the URL to Google Safe Browsing and CERT-In."
    ],
    isDemo: true
  },
  {
    id: "scan-arrest-103",
    type: "digital-arrest",
    category: "Digital Arrest Scam",
    inputSnippet: "Notice from Cyber Crime Cell CBI HQ: An illegal parcel containing narcotics was intercepted at Mumbai Airport booked with your Aadhaar. Connect immediately on Skype video call for digital interrogation or arrest warrant will be issued in 2 hours.",
    timestamp: "2026-11-12T09:15:00Z",
    riskScore: 98,
    riskClassification: "CRITICAL",
    summary: "Classic 'Digital Arrest' intimidation extortion. Fraudsters pose as CBI / Customs / Police to coerce victims into virtual detention and fund transfers.",
    indicators: [
      { name: "Virtual / Digital Arrest Threat", severity: "critical", desc: "Indian law and criminal procedure have NO provision for 'digital arrest' or video interrogation warrants." },
      { name: "Law Enforcement Impersonation (CBI/Customs/Police)", severity: "critical", desc: "Unauthorized use of official government department names and seals." },
      { name: "Intimidation & Fake Narcotics Parcel Narrative", severity: "high", desc: "Classic social engineering script claiming parcels seized in Mumbai or Delhi airport." },
      { name: "Demand for Skype / Video Confinement", severity: "critical", desc: "Insistence on staying in isolated room on video call to prevent victim from consulting family or police." }
    ],
    reasons: [
      "Government authorities, CBI, ED, and State Police NEVER conduct legal proceedings or issue arrest notices over WhatsApp or Skype.",
      "Extortion vector aims to force victims into transferring 'security deposits' to verify account cleanliness.",
      "High psychological pressure with short deadlines (2 hours) is standard scam modus operandi."
    ],
    recommendations: [
      "HANG UP or terminate the video call immediately. You CANNOT be arrested digitally.",
      "Do NOT send any money or transfer funds to any 'government verification account'.",
      "Immediately dial the National Cyber Crime Helpline: 1930.",
      "File a formal report on https://cybercrime.gov.in.",
      "Inform a trusted family member or local police station."
    ],
    isDemo: true
  },
  {
    id: "scan-apk-104",
    type: "application",
    category: "Application Safety",
    inputSnippet: "FastLoan_Instant_Approval_v3.2.apk (Size: 14.8 MB)",
    timestamp: "2026-11-12T08:00:00Z",
    riskScore: 84,
    riskClassification: "HIGH",
    summary: "Suspicious loan app APK with excessive invasive permissions (Read SMS, Contacts, Gallery, Location) and dangerous accessibility service hooks.",
    indicators: [
      { name: "Excessive Danger Permissions (READ_SMS, READ_CONTACTS)", severity: "critical", desc: "Requests access to contact address book and private SMS inbox unnecessary for basic app utility." },
      { name: "Off-Market Sideload Distribution", severity: "medium", desc: "Packaged APK not signed by verified Google Play Store publisher key." },
      { name: "Hidden Background Service & Overlay Hook", severity: "high", desc: "Static manifest shows SYSTEM_ALERT_WINDOW capability to spoof bank login overlays." }
    ],
    reasons: [
      "Predatory loan apps harvest the user's contacts to blackmail family members during loan recovery.",
      "Read SMS permission allows interception of banking OTPs without explicit consent.",
      "Signature verification failed for verified developer identities."
    ],
    recommendations: [
      "DO NOT install this APK file on your Android device.",
      "If already installed, turn on Airplane Mode, uninstall immediately, and scan with Google Play Protect.",
      "Never download financial or banking applications from Telegram, WhatsApp groups, or random links."
    ],
    isDemo: true
  },
  {
    id: "scan-url-105",
    type: "url",
    category: "Malicious URL",
    inputSnippet: "https://www.google.com",
    timestamp: "2026-11-12T07:30:00Z",
    riskScore: 4,
    riskClassification: "LOW",
    summary: "Verified legitimate global domain with valid EV SSL certificate, authoritative nameservers, and clean reputation records.",
    indicators: [
      { name: "Verified Domain Authority", severity: "low", desc: "Top-tier established domain with valid certificate authority verification." },
      { name: "Clean Threat Intelligence Record", severity: "low", desc: "Zero security vendors flagged this domain across open threat databases." }
    ],
    reasons: [
      "Domain owned by Google LLC with strict DNSSEC and HSTS protection.",
      "No phishing or malware signatures detected in endpoint telemetry."
    ],
    recommendations: [
      "This destination is verified safe for browsing.",
      "Always verify browser address bar padlock when entering personal credentials."
    ],
    isDemo: true
  }
];
