export const scamCategories = [
  { id: 'all', label: 'All Topics' },
  { id: 'phishing', label: 'Phishing Awareness' },
  { id: 'digital-arrest', label: 'Digital Arrest Fraud' },
  { id: 'upi-payments', label: 'UPI & Payment Scams' },
  { id: 'fake-websites', label: 'Fake Websites' },
  { id: 'malicious-apks', label: 'Malicious APKs' },
  { id: 'otp-identity', label: 'OTP & Identity Theft' },
];

export const awarenessArticles = [
  {
    id: 'digital-arrest-fraud',
    category: 'digital-arrest',
    categoryLabel: 'Digital Arrest Fraud',
    title: 'The "Digital Arrest" Menace: Anatomy of Virtual Intimidation',
    summary: 'Fraudsters impersonating police, CBI, or customs officials put victims under fake "digital arrest" via video calls, extorting lakhs under the guise of verification deposits.',
    readTime: '6 min read',
    threatLevel: 'Critical',
    tags: ['CBI Impersonation', 'Video Call Extortion', 'Fake Warrants', '1930 Helpline'],
    updatedAt: 'November 2026',
    
    whatIsIt: 'Digital arrest is an aggressive psychological extortion tactic where fraudsters pose as law enforcement officers (CBI, ED, State Police, or Customs) via video calls (WhatsApp, Skype). They convince the victim that their Aadhaar or identity was used in international narcotics trafficking, money laundering, or illegal courier parcels, claiming the victim is under "digital confinement" or "virtual arrest".',
    
    howItWorks: [
      { step: 'The Fake Parcel Call', desc: 'Attacker calls claiming a FedEx/courier package addressed to you containing passports, drugs, or fake SIM cards was seized by airport customs.' },
      { step: 'Transfer to "Cyber Crime Police"', desc: 'Victim is transferred on the call to a bogus officer in a simulated police station background with uniforms and official seals.' },
      { step: 'Video Interrogation & Isolation', desc: 'Victim is told to sit alone in a closed room on Skype/WhatsApp video call and prohibited from speaking with family or answering other calls.' },
      { step: 'Fake Arrest Warrant & Judicial Coercion', desc: 'Forged arrest warrants bearing Supreme Court or CBI logos are sent via WhatsApp to induce maximum panic.' },
      { step: 'Extortion via "Verification Escrow"', desc: 'Victim is ordered to liquidate fixed deposits and wire money to a "Reserve Bank verification account" with a promise it will be refunded after inquiry.' }
    ],
    
    warningSigns: [
      'Demand to stay on video call uninterrupted ("digital custody").',
      'Display of fake police station setups, badges, or forged official arrest orders on WhatsApp.',
      'Threatening imminent physical arrest if the call is disconnected.',
      'Demanding transfer of savings to "secret verification bank accounts" or RBI escrow.',
      'Claims that illegal parcels (drugs, weapons) were booked using your Aadhaar.'
    ],
    
    illustrativeExample: {
      isIllustrative: true,
      title: 'Illustrative Case: "The Mumbai Airport Customs Notice"',
      scenario: 'Ramesh (58, retired professor) receives an automated IVR call claiming his courier containing MDMA narcotics was confiscated at Mumbai Customs. The caller connects him to a man posing as "Inspector Sharma of CBI HQ". Over a Skype video call with a mock police emblem, Ramesh is presented with an "Immediate Arrest Warrant". Under intense panic and 8 hours of video confinement, Ramesh transfers Rs 12 Lakhs to a "temporary clearance account". The scammers immediately vanish and block all communication.'
    },
    
    howToProtect: [
      'Remember: Indian law has NO legal provision for "Digital Arrest". No police officer can arrest or interrogate you via Skype or WhatsApp.',
      'Law enforcement agencies NEVER demand money or ask you to transfer funds to "verification accounts".',
      'Never panic when threatened with airport parcels or illegal SIM cards. Ask for the caller\'s official station details and verify independently.',
      'If someone orders you to stay on video call alone, disconnect immediately and tell a family member.'
    ],
    
    whatToDoIfTargeted: [
      'Immediately hang up the video call or block the scammer.',
      'Call the National Cyber Crime Helpline: 1930 without delay (golden hour response helps freeze illicit bank transfers).',
      'File an online complaint at https://cybercrime.gov.in and save all screenshots, call records, and bank transfer details.',
      'Contact your bank manager immediately to place a freeze on recently transferred transactions.'
    ]
  },
  {
    id: 'phishing-and-smishing-scams',
    category: 'phishing',
    categoryLabel: 'Phishing Awareness',
    title: 'Recognizing Modern Phishing & Smishing Messages',
    summary: 'Unmask deceptive SMS, WhatsApp texts, and emails designed to harvest your net banking credentials, PAN details, and passwords through forged web portals.',
    readTime: '5 min read',
    threatLevel: 'High',
    tags: ['Bank Smishing', 'PAN Card KYC', 'Electricity Disconnection', 'Urgency Tactics'],
    updatedAt: 'November 2026',
    
    whatIsIt: 'Phishing (and its mobile SMS counterpart, Smishing) is social engineering where cybercriminals send deceptive messages masquerading as trusted institutions like banks, telecom providers, government portals, or utility boards to steal your confidential credentials.',
    
    howItWorks: [
      { step: 'Mass Message Broadcast', desc: 'Attackers blast bulk SMS or WhatsApp messages using automated gateways or spoofed sender headers.' },
      { step: 'Manufactured Crisis', desc: 'Message claims an urgent deadline: "Your bank account will be frozen today", "Electricity power cut tonight at 9:30 PM", or "Refund pending Rs 14,800".' },
      { step: 'Deceptive Hyperlink', desc: 'Message contains a shortened URL (bit.ly, tinyurl, or domain like sbi-kyc-update.xyz) leading to a clone webpage.' },
      { step: 'Credential Harvesting', desc: 'The fake login page logs user ID, password, card CVV, and intercepts live OTPs in real time.' },
      { step: 'Account Takeover', desc: 'Attackers instantly drain the account or initiate unauthorized credit transactions.' }
    ],
    
    warningSigns: [
      'Sender header is a regular 10-digit mobile number (+91 98xxx xxxxx) instead of official bank header (e.g. AX-HDFCBK, VK-SBIINB).',
      'Shortened links like bit.ly, tiny.cc, or suspicious domains containing misspelled brand names.',
      'Grammar mistakes, weird capitalization, or overly dramatic threats ("Account suspended immediately").',
      'Demanding immediate entry of PAN, Aadhaar, password, or debit card PIN.'
    ],
    
    illustrativeExample: {
      isIllustrative: true,
      title: 'Illustrative Case: "Urgent Electricity Power Cut Notice"',
      scenario: 'Priya receives an SMS: "Dear Consumer, your electricity bill was not updated. Power will be disconnected at 9:30 PM tonight. Immediately contact Electricity Officer on 98765-XXXXX or download QuickSupport app". Anxious about losing power, Priya calls the number. The imposter instructs her to pay Rs 10 through a link, which installs a screen-sharing tool and siphons funds.'
    },
    
    howToProtect: [
      'Banks and electricity boards NEVER ask you to click links to update KYC or clear pending bills via random WhatsApp numbers.',
      'Always access your bank or utility account through the official mobile app or verified URL typed directly into your browser.',
      'Treat any message demanding urgent action within hours as a red flag.',
      'Check SMS sender headers: Indian promotional and transactional SMS follow strict DLT registration headers.'
    ],
    
    whatToDoIfTargeted: [
      'If you entered credentials, immediately log in to your legitimate banking portal and change your net banking passwords.',
      'Freeze your debit/credit cards using your banking app\'s instant card toggle.',
      'Report the phishing URL or number to 1930 and https://cybercrime.gov.in.',
      'Forward spam SMS to 1909 (TRAI spam reporting).'
    ]
  },
  {
    id: 'upi-and-payment-scams',
    category: 'upi-payments',
    categoryLabel: 'UPI & Payment Scams',
    title: 'UPI Fraud Decoded: The "PIN to Receive Money" Trap',
    summary: 'Master the fundamental rules of UPI payments. Learn how scammers exploit QR codes, fake payment screenshots, and OLX buyer traps to trick people into sending money.',
    readTime: '4 min read',
    threatLevel: 'High',
    tags: ['UPI PIN', 'QR Code Scam', 'OLX Buyer Fraud', 'Cashback Bait'],
    updatedAt: 'November 2026',
    
    whatIsIt: 'UPI (Unified Payments Interface) fraud exploits victims’ lack of understanding of payment protocols. Scammers convince individuals that they need to scan a QR code or enter their UPI PIN in order to "receive" cashbacks, refunds, or product payments.',
    
    howItWorks: [
      { step: 'Bait or Marketplace Listing', desc: 'Attacker responds as an enthusiastic buyer on OLX/Facebook Marketplace or sends a scratch card reward.' },
      { step: 'The Fake QR Code / Collect Request', desc: 'Attacker sends a QR code or a UPI "Collect Request" titled "Refund approved Rs 5,000".' },
      { step: 'Social Engineering Prompt', desc: 'Scammer instructs: "Scan this QR code and type your UPI PIN to claim credit into your bank account".' },
      { step: 'Instant Debit', desc: 'The moment the victim enters their PIN, money is debited from their account instead of credited.' }
    ],
    
    warningSigns: [
      'Anyone asking you to enter your UPI PIN to "receive" or "credit" money.',
      'Receiving a QR code over WhatsApp with instructions to scan it to get paid.',
      'Receiving a "Pay / Collect Request" notification on PhonePe/GooglePay from an unknown entity.',
      'Buyers on resale platforms who refuse to meet in person and insist on paying advances via QR.'
    ],
    
    illustrativeExample: {
      isIllustrative: true,
      title: 'Illustrative Case: "The Army Officer OLX Buyer"',
      scenario: 'Amit lists an old sofa for Rs 8,000 on OLX. A caller claims to be an "Army Officer posted in the cantonment" who cannot come in person. He sends a QR code on WhatsApp saying "Scan this and enter your UPI PIN, Rs 8000 will be credited directly to your account". Amit enters his PIN; instantly Rs 8,000 is debited. When Amit complains, the scammer claims it was a server error and sends another request for Rs 16,000 to "reverse both".'
    },
    
    howToProtect: [
      'GOLDEN RULE: You NEVER need to enter your UPI PIN or scan a QR code to RECEIVE money.',
      'A UPI PIN is only required to DEBIT money from your bank account.',
      'Decline all unexpected "Collect Requests" on your UPI apps.',
      'Never send Rs 1 or Rs 5 test transfers to strangers.'
    ],
    
    whatToDoIfTargeted: [
      'Immediately open your UPI app and click "Raise Dispute / Report Fraud" on the transaction.',
      'Call the 1930 Cyber Helpline within the first hour so the beneficiary bank account can be frozen.',
      'Block the scammer\'s UPI VPA and mobile phone number.'
    ]
  },
  {
    id: 'fake-websites-typosquatting',
    category: 'fake-websites',
    categoryLabel: 'Fake Websites',
    title: 'Spotting Typosquatting & Fake Government/Banking Portals',
    summary: 'Learn how cybercriminals replicate official portals, exploit Google Search Ad sponsored spots, and trick users into sharing confidential data.',
    readTime: '5 min read',
    threatLevel: 'Medium',
    tags: ['Typosquatting', 'Google Ads Phishing', 'Fake E-Challan', 'SSL Padlock Myth'],
    updatedAt: 'November 2026',
    
    whatIsIt: 'Typosquatting involves registering domain names that closely resemble established brands (e.g., `sbi-online.com` instead of `onlinesbi.sbi` or `echallan-parivahan.in` instead of `echallan.parivahan.gov.in`). Criminals buy sponsored Google Search Ads so their malicious link appears at the very top of search results.',
    
    howItWorks: [
      { step: 'Domain Registration', desc: 'Attacker registers a domain with slight misspellings or hyphens resembling official government or commercial sites.' },
      { step: 'Exact UI Clone', desc: 'The look, feel, logos, and fonts of the target site are duplicated perfectly.' },
      { step: 'Search Engine Poisoning', desc: 'Attacker buys paid Google Search Ads for terms like "Customer Care Number", "Electricity Bill Pay", or "Traffic Challan Check".' },
      { step: 'Payment Gateway Hijack', desc: 'Victim visits the fake link from Google, enters card details or makes payment into a fraud merchant account.' }
    ],
    
    warningSigns: [
      'URLs ending in suspicious commercial extensions (.top, .xyz, .cc, .club) when claiming to be Indian government portals (which strictly end in `.gov.in` or `.nic.in`).',
      'Extra hyphens, subtle spelling errors (e.g. `amaz0n` or `flipkarrt`).',
      'The site lacks functional secondary pages (e.g., clicking Terms, Privacy Policy, or Contact Us does nothing or returns 404).',
      'Padlock myth: Having HTTPS / padlock only means data is encrypted; it does NOT mean the website owner is legitimate!'
    ],
    
    illustrativeExample: {
      isIllustrative: true,
      title: 'Illustrative Case: "The Fake Traffic E-Challan Notice"',
      scenario: 'Vikram receives a WhatsApp text stating his car was fined Rs 1,000 for speeding with a link to `echallan-traffic-fine.vip`. The webpage looks identical to the official Ministry of Road Transport Parivahan portal. Vikram enters his vehicle number and pays via credit card. Instead of Rs 1,000, Rs 45,000 is debited through a spoofed OTP prompt.'
    },
    
    howToProtect: [
      'All official Indian government portals strictly use the `.gov.in` or `.nic.in` domain extension.',
      'Never blindly click the top "Sponsored / Ad" link in Google search results for customer care numbers or utility payments.',
      'Bookmark official banking portals and access them directly from bookmarks.',
      'Inspect the full domain name in your browser address bar before entering any sensitive details.'
    ],
    
    whatToDoIfTargeted: [
      'Call your card issuer immediately to block your card and report fraudulent chargeback.',
      'Submit the fake URL to Google Safe Browsing report portal (safebrowsing.google.com).',
      'Lodge a cyber fraud complaint on https://cybercrime.gov.in.'
    ]
  },
  {
    id: 'malicious-apks-malware',
    category: 'malicious-apks',
    categoryLabel: 'Malicious APKs',
    title: 'Predatory Loan Apps & Sideloaded Android APK Malware',
    summary: 'Understand the hidden dangers of downloading APK files from WhatsApp, Telegram, or random websites. How rogue apps steal contacts, read SMS OTPs, and spy on screens.',
    readTime: '6 min read',
    threatLevel: 'Critical',
    tags: ['Predatory Loans', 'Sideloading', 'Overlay Attacks', 'Accessibility Abuse'],
    updatedAt: 'November 2026',
    
    whatIsIt: 'Malicious APKs (Android Application Packages) are apps distributed outside the official Google Play Store. Often packaged as "Instant Paperless Loan Apps", "Free Live Cricket Streaming", or "WhatsApp Gold", they abuse Android permissions to spy on users, steal photo galleries, and intercept banking SMS.',
    
    howItWorks: [
      { step: 'Tempting Distribution Hook', desc: 'Attacker spreads download links on social media promising instant 50,000 rupee loans with no credit score check.' },
      { step: 'Prompting Install from Unknown Sources', desc: 'Victim is told to bypass Android security warnings and toggle "Allow installation of unknown apps".' },
      { step: 'Permission Coercion', desc: 'App refuses to open unless the user grants permissions: Read Contacts, SMS, Camera, Location, and Storage.' },
      { step: 'Data Exfiltration & Blackmail', desc: 'The APK secretly uploads your entire phone contact list and gallery to offshore servers. Even if you never take the loan, recovery agents morph photos and harass your contacts.' }
    ],
    
    warningSigns: [
      'The app is provided as a raw `.apk` file over WhatsApp, Telegram, or SMS rather than Google Play Store.',
      'A simple utility or calculator app requesting access to Contacts, SMS, and Microphone.',
      'Prompts asking to enable Android "Accessibility Service" or "Device Administrator" privileges.',
      'Apps promising unrealistic instant cash, lottery winnings, or free paid movie streams.'
    ],
    
    illustrativeExample: {
      isIllustrative: true,
      title: 'Illustrative Case: "The 5-Minute Instant Loan Trap"',
      scenario: 'Deepak installs an APK named "CashRupee_Instant.apk" received on a WhatsApp group. The app requests full contact and storage access. Deepak uploads his Aadhaar for a Rs 5,000 loan. Only Rs 2,800 is disbursed. Within 4 days, recovery agents begin calling his parents, colleagues, and friends with morphed defamatory pictures, demanding Rs 20,000.'
    },
    
    howToProtect: [
      'NEVER install APK files sent via WhatsApp, Telegram, or downloaded from unknown websites.',
      'Keep "Install unknown apps" permission disabled in your Android settings.',
      'Only download RBI-registered NBFC financial apps directly from Google Play Store after checking developer credentials.',
      'Regularly review your app permissions in Android Settings &rarr; Privacy &rarr; Permission Manager.'
    ],
    
    whatToDoIfTargeted: [
      'Turn on Airplane mode immediately to halt data transmission.',
      'Boot your phone into Safe Mode and uninstall the malicious application.',
      'If you cannot remove the app or administrative privileges are hijacked, perform a clean Factory Reset.',
      'File a complaint on cybercrime.gov.in and alert your immediate family members about potential extortion calls.'
    ]
  },
  {
    id: 'otp-and-identity-theft',
    category: 'otp-identity',
    categoryLabel: 'OTP & Identity Theft',
    title: 'The Social Engineering of One-Time Passwords (OTPs)',
    summary: 'Why no bank executive or official will ever ask for your OTP. Learn how screen-sharing tools (AnyDesk, TeamViewer) and SIM swap fraud compromise 2FA.',
    readTime: '4 min read',
    threatLevel: 'High',
    tags: ['AnyDesk Scam', 'SIM Swap', 'OTP Theft', 'Aadhaar Biometric Lock'],
    updatedAt: 'November 2026',
    
    whatIsIt: 'An OTP (One-Time Password) is the final cryptographic barrier protecting your bank account, email, and Aadhaar identity. Fraudsters cannot breach secure banking mainframes, so they manipulate the human account holder into giving away the OTP through deception, remote access apps, or SIM swap.',
    
    howItWorks: [
      { step: 'Impersonation as Support Rep', desc: 'Fraudster calls claiming to be from your mobile network (Airtel/Jio) or bank tech support.' },
      { step: 'Remote Screen-Sharing Trap', desc: 'They convince you to download apps like AnyDesk, RustDesk, or QuickSupport to "fix your network speed or KYC".' },
      { step: 'Screen Interception', desc: 'Once the remote code is shared, the scammer views your mobile screen in real time and reads every incoming OTP without you telling them.' },
      { step: 'SIM Swap Variant', desc: 'Scammers submit fake identity documents to telecom stores to get a replacement SIM card, deactivating your genuine SIM and routing all banking SMS to themselves.' }
    ],
    
    warningSigns: [
      'Anyone asking you to download AnyDesk, TeamViewer, or QuickSupport to "resolve a bank error".',
      'Anyone asking you to read out an OTP received on SMS.',
      'Your mobile phone suddenly losing cellular network coverage ("No Service") for an extended period without explanation (sign of SIM swap).',
      'SMS text saying "Do NOT share this code with anyone, including bank staff" — take that warning literally!'
    ],
    
    illustrativeExample: {
      isIllustrative: true,
      title: 'Illustrative Case: "The 5G SIM Upgrade Assistance"',
      scenario: 'Sneha receives a call from someone claiming to be "Jio 5G Customer Support". The caller offers to upgrade her 4G SIM to 5G without visiting the store. Sneha is asked to forward a 20-digit SIM number via SMS and read out an incoming confirmation code. Her SIM abruptly disconnects. Within 30 minutes, her bank savings account is cleaned out via net banking OTPs routed to the swapped SIM.'
    },
    
    howToProtect: [
      'NEVER share an OTP with anyone under any circumstances, even if they claim to be a bank branch manager or police officer.',
      'Never download screen-sharing software (AnyDesk, QuickSupport) on instruction from a phone caller.',
      'Lock your Aadhaar biometrics using the mAadhaar app or UIDAI portal.',
      'If your mobile phone unexpectedly loses cellular connectivity, contact your telecom operator immediately from another phone.'
    ],
    
    whatToDoIfTargeted: [
      'Immediately call your telecom operator to report an unauthorized SIM swap.',
      'Call your bank to disable net banking and UPI access.',
      'Change passwords for your primary email account (Gmail/Outlook) which acts as the master recovery key.',
      'Lodge a report on 1930 and https://cybercrime.gov.in.'
    ]
  }
];
