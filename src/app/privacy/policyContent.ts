/* Privacy Policy content (ZEN EATS Platform – HKD TECH LLP).
   Source: files/docs/PRIVACY POLICY.docx — kept as data so the page stays presentational. */

export interface PolicySection {
  id: string;
  number: number;
  title: string;
  /** Plain paragraphs of body text. */
  body?: string[];
  /** Optional intro line shown before a bullet list. */
  listIntro?: string;
  /** Optional bullet items. */
  list?: string[];
}

export const policyLastUpdated = "2025";

export const policyIntro =
  "This Privacy Policy is issued by HKD TECH LLP and explains how ZenEats collects, uses, processes, stores, discloses, and protects your personal data when you access or use our website, mobile application, or related services.";

export const policySections: PolicySection[] = [
  {
    id: "introduction",
    number: 1,
    title: "Introduction and Scope",
    body: [
      "This Privacy Policy (“Policy”) is issued by HKD TECH LLP, a limited liability partnership firm incorporated under the Limited Liability Partnership Act, 2008, having its registered office at Mumbai, Maharashtra (hereinafter referred to as “ZEN EATS”, “Company”, or “We”), and governs the collection, use, processing, storage, disclosure, and protection of personal data of any individual who accesses, registers, or uses the website, mobile application, or any related services provided by ZEN EATS (collectively referred to as the “Platform”).",
      "This Policy applies to all Users, Vendors, visitors, and any other individuals whose personal data is collected by ZEN EATS in connection with its services. By accessing or using the Platform, the User expressly consents to the practices described in this Policy. If the User does not agree with this Policy, they must refrain from using the Platform.",
    ],
  },
  {
    id: "definitions",
    number: 2,
    title: "Definitions",
    listIntro: "For the purpose of this Policy:",
    list: [
      "“Personal Data” means any data about an individual who is identifiable by or in relation to such data.",
      "“Sensitive Personal Data” includes financial information such as bank account details, payment information, passwords, and any other data as defined under applicable law.",
      "“Processing” means any operation performed on personal data including collection, recording, storage, use, sharing, disclosure, or deletion.",
      "“User” or “Data Principal” refers to the individual whose personal data is being processed.",
      "“Data Fiduciary” refers to ZEN EATS as the entity determining the purpose and means of processing personal data.",
    ],
  },
  {
    id: "data-collected",
    number: 3,
    title: "Nature and Categories of Data Collected",
    body: [
      "ZEN EATS may collect, receive, and process the following categories of personal data:",
      "The Company collects personal identification information including name, email address, mobile number, delivery address, and profile details provided at the time of registration or during use of the Platform. Financial information such as payment method details, billing information, and transaction history may be collected; however, complete card details are not stored by ZEN EATS and are processed through secure third-party payment gateways.",
      "The Company may also collect account-related information such as login credentials, preferences, and authentication details, as well as technical and device-related information including IP address, device identifiers, browser type, operating system, and usage patterns. Location data may be collected to enable service delivery and improve user experience.",
      "Additionally, the Company may collect user-generated content such as reviews, feedback, ratings, images, and communications, as well as information obtained from third-party sources including social media platforms, vendors, and business partners.",
    ],
  },
  {
    id: "purpose",
    number: 4,
    title: "Purpose of Collection and Processing",
    listIntro:
      "ZEN EATS collects and processes personal data strictly for lawful and legitimate purposes, including but not limited to:",
    list: [
      "Providing, operating, and maintaining the Platform and services;",
      "Processing orders and facilitating transactions between Users and Vendors;",
      "Managing user accounts and providing customer support;",
      "Communicating service-related updates, offers, and promotional content (subject to User consent);",
      "Detecting, preventing, and investigating fraudulent or unlawful activities;",
      "Complying with legal and regulatory obligations;",
      "Conducting internal audits, analytics, and research;",
      "Improving the functionality, performance, and security of the Platform.",
    ],
  },
  {
    id: "legal-basis",
    number: 5,
    title: "Legal Basis and Consent (DPDP Act, 2023 Compliance)",
    body: [
      "ZEN EATS processes personal data in accordance with the Digital Personal Data Protection Act, 2023 and applicable laws. Processing shall be based on lawful grounds, including:",
    ],
    list: [
      "Consent provided by the User for specified purposes;",
      "Performance of a contract;",
      "Compliance with legal obligations;",
      "Legitimate uses as permitted under law.",
    ],
  },
  {
    id: "data-sharing",
    number: 6,
    title: "Data Sharing and Disclosure",
    body: [
      "ZEN EATS may share personal data with third parties strictly on a need-to-know basis and in accordance with applicable laws. Such parties may include Vendors for order fulfillment, payment gateway providers for transaction processing, logistics partners for delivery, affiliates and group companies for operational purposes, and service providers for analytics, IT support, and business operations.",
      "Personal data may also be disclosed to government authorities, regulators, or law enforcement agencies where required under applicable law or pursuant to legal process. ZEN EATS does not sell personal data to third parties for commercial or marketing purposes.",
    ],
  },
  {
    id: "intermediary",
    number: 7,
    title: "Intermediary Status and Third-Party Data Responsibility",
    body: [
      "ZEN EATS acts as an intermediary platform facilitating interactions between Users and Vendors. The Company shall not be responsible for the data collection, usage, or privacy practices of third-party Vendors or external platforms. Users are advised to review the privacy policies of such third parties independently.",
    ],
  },
  {
    id: "retention",
    number: 8,
    title: "Data Retention and Deletion",
    body: [
      "ZEN EATS shall retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required under applicable law. Upon completion of such purposes or upon withdrawal of consent (where applicable), personal data shall be securely deleted, anonymized, or archived in accordance with legal requirements.",
    ],
  },
  {
    id: "security",
    number: 9,
    title: "Data Security Measures",
    body: [
      "ZEN EATS implements reasonable security practices and procedures as mandated under applicable laws, including the Information Technology Act, 2000. Such measures include encryption of sensitive data, restricted access controls, secure server infrastructure, firewalls, regular audits, and monitoring systems to prevent unauthorized access, disclosure, or misuse of personal data.",
      "Notwithstanding the above, no system is completely secure, and ZEN EATS does not guarantee absolute security of data transmitted over the internet.",
    ],
  },
  {
    id: "user-rights",
    number: 10,
    title: "User Rights Under DPDP Act, 2023",
    body: ["The User (Data Principal) shall have the following rights:"],
    list: [
      "The right to obtain confirmation regarding processing of their personal data;",
      "The right to access, correct, update, or erase personal data;",
      "The right to withdraw consent;",
      "The right to grievance redressal;",
      "The right to nominate another individual to exercise rights in case of incapacity or death.",
    ],
  },
  {
    id: "cookies",
    number: 11,
    title: "Cookies and Tracking Technologies",
    body: [
      "ZEN EATS uses cookies, web beacons, and similar technologies to enhance user experience, analyze usage patterns, and deliver personalized content. Users may manage or disable cookies through their browser settings; however, certain functionalities of the Platform may be affected.",
    ],
  },
  {
    id: "cross-border",
    number: 12,
    title: "Cross-Border Data Transfer",
    body: [
      "Personal data may be transferred to and processed in jurisdictions outside India, subject to compliance with applicable laws and ensuring that adequate data protection safeguards are in place.",
    ],
  },
  {
    id: "data-breach",
    number: 13,
    title: "Data Breach and Incident Response",
    body: [
      "In the event of any personal data breach, ZEN EATS shall take immediate remedial action and comply with notification requirements under applicable laws, including informing affected Users and relevant authorities where required.",
    ],
  },
  {
    id: "childrens-data",
    number: 14,
    title: "Children’s Data",
    body: [
      "The Platform is not intended for use by individuals below the age of eighteen (18) years. ZEN EATS does not knowingly collect personal data from minors, and if such data is discovered, it shall be promptly deleted.",
    ],
  },
  {
    id: "non-solicitation",
    number: 15,
    title: "Non-Solicitation of Sensitive Information",
    body: [
      "ZEN EATS shall never request sensitive financial information such as OTPs, CVV, PINs, passwords, or full card details through calls, emails, or messages. Users are advised not to share such information with anyone. ZEN EATS shall not be liable for any loss arising from unauthorized disclosure by the User.",
    ],
  },
  {
    id: "liability",
    number: 16,
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, ZEN EATS shall not be liable for any indirect, incidental, or consequential damages arising out of the use of the Platform or unauthorized access to personal data, except where such liability cannot be excluded under applicable law.",
    ],
  },
  {
    id: "updates",
    number: 17,
    title: "Policy Updates",
    body: [
      "ZEN EATS reserves the right to modify this Policy at any time to reflect changes in legal, regulatory, or business requirements. Updated versions shall be posted on the Platform, and continued use shall constitute acceptance of such changes.",
    ],
  },
  {
    id: "grievance",
    number: 18,
    title: "Grievance Redressal Mechanism",
    body: [
      "Users may raise grievances relating to data processing, privacy concerns, or other issues by contacting the designated Grievance Officer. ZEN EATS shall acknowledge complaints within forty-eight (48) hours and resolve them within fifteen (15) days or such period as prescribed by law.",
    ],
  },
  {
    id: "governing-law",
    number: 19,
    title: "Governing Law and Jurisdiction",
    body: [
      "This Privacy Policy shall be governed by the laws of India. Any disputes arising in relation to this Policy shall be subject to the jurisdiction of courts at Mumbai.",
    ],
  },
  {
    id: "acceptance",
    number: 20,
    title: "Acceptance of Policy",
    body: [
      "By accessing or using the Platform, the User acknowledges that they have read, understood, and agreed to this Privacy Policy and consent to the collection and processing of their personal data as described herein.",
    ],
  },
];
