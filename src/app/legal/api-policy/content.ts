/* API Policy / API Agreement content (ZEN EATS Platform – HKD TECH LLP).
   Source: files/docs/API POLICY.docx — kept as data so the page stays presentational. */

import type { LegalDoc } from "../_shared/types";

export const apiPolicy: LegalDoc = {
  eyebrow: "Legal",
  titleLead: "API ",
  titleEmphasis: "Policy",
  intro:
    "This API Policy / Agreement governs access to and use of the ZenEats Application Programming Interfaces by developers, partners, and integrators.",
  lastUpdated: "2025",
  contact: {
    sectionId: "contact-information",
    heading: "API Contact",
    email: "info@zeneats.co.in",
    address: ["1602 Lodha, Lower Parel,", "Mumbai 400013, Maharashtra, India"],
  },
  sections: [
    {
      id: "introduction",
      number: 1,
      title: "Introduction and Acceptance",
      body: [
        "This API Policy / Agreement (“Agreement”) is entered into between HKD TECH LLP, a limited liability partnership firm incorporated under the Limited Liability Partnership Act, 2008, having its registered office at Mumbai, Maharashtra (hereinafter referred to as “ZEN EATS” or “Company”), and any developer, partner, vendor, or entity accessing or using the ZEN EATS Application Programming Interfaces (“Developer” or “API User”).",
        "By accessing, integrating, or using the APIs, the Developer agrees to be bound by this Agreement, the Terms of Use, Privacy Policy, and all applicable laws. If the Developer does not agree, they shall not access or use the APIs.",
      ],
    },
    {
      id: "definitions",
      number: 2,
      title: "Definitions",
      listIntro: "For the purposes of this Agreement:",
      list: [
        "“API” shall mean the application programming interface, including all associated tools, protocols, documentation, and services made available by ZEN EATS.",
        "“Developer” shall mean any individual or entity accessing or using the APIs.",
        "“End User” shall mean any user of the Developer’s application or service.",
        "“Data” shall include all information accessed, transmitted, or processed through the APIs.",
      ],
    },
    {
      id: "eligibility-access",
      number: 3,
      title: "Eligibility and Access",
      body: [
        "Access to the APIs shall be granted solely at the discretion of ZEN EATS and subject to prior authorization. ZEN EATS reserves the right to approve, deny, suspend, or revoke API access at any time without assigning any reason.",
        "The Developer shall provide accurate and complete information and shall ensure that it is legally competent to enter into this Agreement.",
      ],
    },
    {
      id: "grant-of-license",
      number: 4,
      title: "Grant of License",
      body: [
        "Subject to compliance with this Agreement, ZEN EATS grants the Developer a limited, non-exclusive, non-transferable, revocable license to access and use the APIs solely for integrating with the ZEN EATS Platform and providing services to End Users as approved by ZEN EATS.",
        "No rights are granted except those expressly stated herein.",
      ],
    },
    {
      id: "ownership",
      number: 5,
      title: "Recognition of Absolute Ownership",
      body: [
        "The Developer acknowledges that ZEN EATS retains absolute and exclusive ownership of all rights, title, and interest in and to the APIs, Platform, software, data, and all intellectual property rights therein. Nothing in this Agreement shall be construed as transferring any ownership rights to the Developer.",
      ],
    },
    {
      id: "developer-obligations",
      number: 6,
      title: "Obligations of Developer",
      body: [
        "The Developer shall use the APIs strictly in accordance with this Agreement and applicable laws. The Developer shall not misuse the APIs, interfere with their operation, or engage in any activity that compromises security, integrity, or performance. The Developer shall be responsible for the acts and omissions of its employees, agents, and contractors.",
      ],
    },
    {
      id: "usage-restrictions",
      number: 7,
      title: "API Usage Restrictions",
      listIntro: "The Developer shall not:",
      list: [
        "Reverse engineer, decompile, or attempt to derive source code;",
        "Circumvent security measures or rate limits;",
        "Use APIs for unlawful purposes;",
        "Use APIs to develop competing services;",
        "Access or use data beyond authorized scope;",
        "Transmit malicious code or harmful content.",
      ],
    },
    {
      id: "data-protection-dpdp",
      number: 8,
      title: "Data Protection and DPDP Act Compliance",
      body: [
        "The Developer shall comply with the Digital Personal Data Protection Act, 2023 and shall process personal data only for lawful purposes and with valid consent. The Developer shall implement appropriate safeguards to protect personal data and shall not retain such data beyond necessity.",
        "In case of a data breach, the Developer shall promptly notify ZEN EATS and take remedial action as required under law.",
      ],
    },
    {
      id: "data-usage-ownership",
      number: 9,
      title: "Data Usage and Ownership",
      body: [
        "All data accessed through the APIs shall remain the property of ZEN EATS or its licensors. The Developer shall use such data solely for permitted purposes and shall not sell, license, or exploit such data without prior written consent.",
      ],
    },
    {
      id: "security-access-keys",
      number: 10,
      title: "Security and Protection of Access Keys",
      body: [
        "The Developer shall maintain strict confidentiality and security of API keys, tokens, and credentials. The Developer shall be responsible for all activities conducted using such credentials and shall immediately report any unauthorized use or breach.",
      ],
    },
    {
      id: "confidentiality",
      number: 11,
      title: "Confidentiality",
      body: [
        "The Developer shall keep confidential all proprietary and non-public information received from ZEN EATS and shall not disclose or use such information except as permitted. This obligation shall survive termination for a period of five (5) years or as required by law.",
      ],
    },
    {
      id: "developer-trademarks",
      number: 12,
      title: "Use of Developer’s Trademarks",
      body: [
        "ZEN EATS may, with prior consent, use the Developer’s name and trademarks solely for identification purposes. Such use shall not confer any ownership rights.",
      ],
    },
    {
      id: "independent-parties",
      number: 13,
      title: "Independent Parties",
      body: [
        "The parties are independent contractors, and nothing herein shall create any partnership, joint venture, or agency relationship.",
      ],
    },
    {
      id: "monitoring-audit",
      number: 14,
      title: "Monitoring and Audit",
      body: [
        "ZEN EATS reserves the right to monitor API usage and audit the Developer’s compliance. The Developer shall provide necessary cooperation during such audits.",
      ],
    },
    {
      id: "service-availability",
      number: 15,
      title: "Service Availability",
      body: [
        "ZEN EATS does not guarantee uninterrupted or error-free API availability and may modify or discontinue APIs at any time without liability.",
      ],
    },
    {
      id: "disclaimer-warranties",
      number: 16,
      title: "Disclaimer of Warranties",
      body: [
        "The APIs are provided on an “as is” basis without warranties of any kind. ZEN EATS disclaims all warranties including merchantability, fitness for purpose, and non-infringement.",
      ],
    },
    {
      id: "limitation-liability",
      number: 17,
      title: "Limitation of Liability",
      body: [
        "To the maximum extent permitted by law, ZEN EATS shall not be liable for any indirect, incidental, or consequential damages. Total liability shall not exceed fees paid by the Developer in the preceding twelve months.",
      ],
    },
    {
      id: "indemnity",
      number: 18,
      title: "Indemnity",
      body: [
        "The Developer shall indemnify and hold harmless ZEN EATS against all claims, damages, and losses arising from misuse of APIs, breach of this Agreement, or violation of laws.",
      ],
    },
    {
      id: "termination",
      number: 19,
      title: "Termination",
      body: [
        "ZEN EATS may suspend or terminate API access at any time. Upon termination, the Developer shall cease use and delete all data and confidential information.",
      ],
    },
    {
      id: "force-majeure",
      number: 20,
      title: "Force Majeure",
      body: [
        "ZEN EATS shall not be liable for delays or failures caused by events beyond its control, including natural disasters, strikes, or technical failures.",
      ],
    },
    {
      id: "legal-compliance",
      number: 21,
      title: "Legal Compliance",
      body: [
        "The Developer shall comply with all applicable laws, including the Information Technology Act, 2000 and DPDP Act, 2023, and shall not use APIs for unlawful purposes.",
      ],
    },
    {
      id: "arbitration",
      number: 22,
      title: "Arbitration and Dispute Resolution",
      body: [
        "Any dispute shall be resolved by arbitration under the Arbitration and Conciliation Act, 1996 by a sole arbitrator appointed by ZEN EATS. The seat shall be Bangalore, and proceedings shall be in English. Courts at Mumbai shall have jurisdiction for enforcement.",
      ],
    },
    {
      id: "governing-law",
      number: 23,
      title: "Governing Law and Jurisdiction",
      body: [
        "This Agreement shall be governed by Indian law. Courts at Mumbai shall have exclusive jurisdiction.",
      ],
    },
    {
      id: "miscellaneous",
      number: 24,
      title: "Miscellaneous",
      body: [
        "This Agreement constitutes the entire understanding between the parties. If any provision is invalid, the remaining provisions shall remain enforceable. Failure to enforce any provision shall not constitute waiver.",
      ],
    },
    {
      id: "survival",
      number: 25,
      title: "Survival",
      body: [
        "Clauses relating to confidentiality, indemnity, liability, data protection, and dispute resolution shall survive termination.",
      ],
    },
    {
      id: "contact-information",
      number: 26,
      title: "Contact Information",
      body: [
        "For API-related queries, please contact ZEN EATS using the details below.",
      ],
    },
  ],
};
