/* Account Deletion content (ZEN EATS Platform – HKD TECH LLP).
   Published to satisfy the Google Play & Apple App Store account-deletion
   requirement. The "Steps" section MUST mirror the actual in-app flow. */

import type { LegalDoc } from "../_shared/types";

export const deleteAccount: LegalDoc = {
  eyebrow: "Legal",
  titleLead: "Delete Your ",
  titleEmphasis: "Account",
  intro:
    "You can request deletion of your ZenEats account and associated data at any time, directly from within the ZenEats app. This page explains how to do it and what data is deleted or retained.",
  lastUpdated: "2025",
  contact: {
    sectionId: "need-help",
    heading: "Account Deletion Requests",
    email: "info@zeneats.co.in",
    phone: "080-47494646",
    address: ["1602 Lodha, Lower Parel,", "Mumbai 400013, Maharashtra, India"],
  },
  sections: [
    {
      id: "overview",
      number: 1,
      title: "Overview",
      body: [
        "ZenEats is operated by HKD TECH LLP. If you have a registered ZenEats account, you can request that your account and the personal data associated with it be deleted. Account deletion is self-service from within the ZenEats mobile app, and can also be requested by contacting us directly if you are unable to access the app.",
        "Once a deletion request is confirmed, your account and all personal data associated with it are permanently deleted within 7 days.",
      ],
    },
    {
      id: "steps",
      number: 2,
      title: "How to Delete Your Account (In-App)",
      listIntro:
        "To delete your ZenEats account from within the app, follow these steps:",
      list: [
        "Open the ZenEats app and go to the Account section.",
        "Tap “Delete Account”.",
        "Enter your email address to confirm that it is you.",
        "Slide the “Delete Account” button to confirm your request.",
        "Your account and associated personal data are then permanently deleted within 7 days.",
      ],
      body: [
        "No further action is required after you slide to confirm. You may continue to use the app until the deletion is processed, but once deletion completes the account cannot be recovered.",
      ],
    },
    {
      id: "data-deleted",
      number: 3,
      title: "What Data Is Deleted",
      listIntro:
        "When your account deletion is processed, the following data is permanently removed:",
      list: [
        "Your profile information, including name, email address, and phone number;",
        "Saved delivery addresses and location preferences;",
        "Your order history and cart data linked to your account;",
        "App preferences and settings tied to your account;",
        "Your login credentials and authentication identifiers.",
      ],
    },
    {
      id: "need-help",
      number: 4,
      title: "Can’t Access the App?",
      body: [
        "If you are unable to access the ZenEats app to complete the steps above, you can request account deletion by emailing us from your registered email address. Please include the email address and phone number associated with your ZenEats account so we can verify your identity.",
        "We will process verified deletion requests within 7 days, permanently deleting your account and all associated personal data.",
      ],
    },
  ],
};
