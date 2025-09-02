const products = [
  {
    id: 1,
    name: "Google Address Finder for Zoho Crm",
    desc: "Link Google Maps with Zoho CRM to quickly search and autofill addresses across modules like Accounts, Contacts, Leads, Vendors, and more. Easily access the extension while creating or editing records for faster, accurate address entry.",
    keyfeatures: [
      "Available in all Zoho CRM modules with address information",
      "User Friendly",
      "Saves time entering address field data",
      "Find and auto-fill addresses when creating and editing pages",
    ],
    image: "/products/address-verifier.png",
    product: "crm",
    helpdoc: "https://fristinetech.com/help-documentation-google-map/",
    buynow:
      "https://marketplace.zoho.com/app/crm/google-address-finder-for-zoho-crm",
  },
  {
    id: 2,
    name: "Auto Currency Exchange Rate Updater For Zoho CRM",
    desc: "The Auto Currency Update extension for Zoho CRM helps you update multiple currencies in CRM every hour based on the exchange rate of the base currency. Say goodbye to manually updating currency in your Zoho CRM account.",
    image: "/products/currency-exchange.png",
    keyfeatures: [
      "Auto-update currency every hour in your Zoho CRM account.",
      "Enjoy easy installation. No development or configuration is required.",
      "Easily check the latest exchange rates in custom functions, schedules, workflows, and more.",
      "No maintenance is required.",
    ],
    product: "crm",
    helpdoc:
      "https://fristinetech.com/zoho-market-place-auto-currency-update-hourly-app-help-documentation/",
    buynow:
      "https://marketplace.zoho.com/app/crm/auto-currency-exchange-rate-updater-for-zoho-crm",
  },
  {
    id: 3,
    name: "Export tickets with filters for Zoho Desk",
    desc: "Effortlessly export tickets from Zoho Desk with various filter options with this extension. With filters, you get the option to filter your export tickets using default or custom fields.",
    image: "/products/export-tickets.png",
    keyfeatures: [
      "Users can easily export tickets from Zoho Desk.",
      "Users have various default filter options.",
      "Users can filter tickets using custom fields.",
      "Users can export up to 1,000 tickets at a time.",
    ],
    product: "desk",
    helpdoc:
      "https://fristinetech.com/help-documentation-export-ticket-extension/",
    buynow:
      "https://marketplace.zoho.com/app/desk/export-tickets-with-filters-for-zoho-desk",
  },
  {
    id: 4,
    name: "Stripe Payment Extension for Zoho CRM",
    desc: "Zoho CRM users can seamlessly connect their Stripe account using this extension to send payment links directly from the Deals, Quotes, Invoices, and Sales Orders modules. It also supports bulk actions, payment reminders, and status tracking, all within the CRM.",
    image: "/products/stripe.png",
    keyfeatures: [
      "Send single or bulk Stripe payment links from core sales modules in Zoho CRM.",
      "Enable or disable payment modules from the Extension Settings page.",
      "Cancel or resend payment requests directly within the CRM.",
      "Automatically sync and update payment statuses from Stripe to Zoho CRM.",
    ],
    product: "crm",
    helpdoc: "https://fristinetech.com/help-documentation-for-stripe-payment/",
    buynow:
      "https://marketplace.zoho.com/app/crm/stripe-payment-extension-for-zoho-crm",
  },
  {
    id: 5,
    name: "Organogram Extension For Zoho CRM",
    desc: "The Organogram Extension for Zoho CRM is an incredibly useful tool that can help your sales team determine the organizational structure of a customer account and identify the key decision-makers within it.",
    image: "/products/organogram.png",
    keyfeatures: [
      "Access the Contact Organization Chart for your contacts in the Accounts module.",
      "Easily access the reporting hierarchy for account contacts.",
      "Easily export Organization Chart by downloading in PDF/PNG format.",
      "Find out which contact holds what position and to whom they report.",
    ],
    product: "crm",
    helpdoc:
      "https://fristinetech.com/help-documentation-for-organogram-extension-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/organogram-extension-for-zoho-crm",
  },
  {
    id: 6,
    name: "Visitor Tracking",
    desc: "Visitor Tracking is a basic application available in Zoho Creator that helps companies track their visitors. Visitors can use the application to request a visit, and admins can confirm the request. Check-in and Check-out functionalities are available.",
    image: "/products/visitor-tracking.jpeg",
    keyfeatures: [
      "Admins can track the total number of company visitors and their check-in and check-out time",
      "Admins can check the total visitors currently active in their building or branch.",
      "Employee check-in and check-out times are captured accurately.",
      "Dashboard tracks the total number of visitors and check-ins during the day, week, and month.",
    ],
    product: "crm",
    helpdoc: "https://fristinetech.com/visitor-tracking/user-guide/index.php",
    buynow: "https://marketplace.zoho.com/app/customapps/visitor-tracking",
  },
  {
    id: 7,
    name: "AWS S3 File Uploader for Zoho CRM",
    desc: "Easily upload and manage Zoho CRM files in AWS S3 with this secure, efficient integration. It automates file storage, reduces CRM storage use, and gives teams full control over their documents.",
    image: "/products/aws-s3.jpeg",
    keyfeatures: [
      "Upload files directly from CRM modules with auto-folder structuring in S3.",
      "Support for multi-file uploads via a simple interface.",
      "View or delete files in Zoho CRM with real-time sync to S3.",
      "Works with Leads, Deals, Invoices, Accounts, Sales & Purchase Orders.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-aws-s3-file-uploader-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/aws-s3-file-uploader-for-zoho-crm",
  },
  {
    id: 8,
    name: "Analytics Hub Extension for Zoho CRM",
    desc: "The Zoho CRM Record Analytics extension delivers real-time, tailored insights for Accounts, Contacts, Deals, Invoices, and Leads using embedded Zoho Analytics dashboards—right inside your CRM.",
    image: "/products/analytic-hub.jpeg",
    keyfeatures: [
      "Auto-detect modules and display the relevant analytics dashboard.",
      "Fetch dynamic URLs using CRM org variables for flexible use.",
      "Customize dashboards to show key metrics per record type.",
      "Clean, responsive iframe design for seamless CRM integration.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-analytics-hub-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/analytics-hub-extension-for-zoho-crm",
  },
  {
    id: 9,
    name: "Bulk Update Existing Tickets In Zoho Desk Based On Ticket ID",
    desc: "The Update Existing Tickets In Zoho Desk Based On Ticket ID extension now lets you update tickets in bulk. You just need to upload the CSV and map the field, all the tickets in the CSV will update automatically.",
    image: "/products/bulk-update.png",
    keyfeatures: [
      "Update tickets in Zoho Desk using the ticket number.",
      "Update multiple tickets at once by uploading a single CSV file.",
      "Map standard and custom fields between Zoho DESK and the CSV columns.",
      "Install the extension easily and begin using it effortlessly.",
    ],
    product: "desk",
    helpdoc:
      "https://fristinetech.com/help-documentation-for-bulk-update-ticket/",
    buynow:
      "https://marketplace.zoho.com/app/desk/bulk-update-existing-tickets-in-zoho-desk-based-on-ticket-id",
  },
  {
    id: 10,
    name: "Mailchimp for Zoho CRM",
    desc: "The Mailchimp Extension for Zoho CRM seamlessly connects your CRM with Mailchimp, enabling smooth contact sync, campaign tracking, and subscriber management—all within Zoho CRM.",
    image: "/products/mailchimp.jpeg",
    keyfeatures: [
      "Auto-sync contacts between Zoho CRM and Mailchimp.",
      "Manage Mailchimp campaigns with real-time data in CRM.",
      "Track opens, clicks, and engagement from your CRM dashboard.",
      "Handle opt-ins and opt-outs directly in Zoho CRM.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/mailchimp-extension-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/mailchimp-for-zoho-crm-by-dsvcorp",
  },
  {
    id: 11,
    name: "Xero Sync for Zoho CRM",
    desc: "The Xero Sync for Zoho CRM extension streamlines data flow by syncing contacts, products, and invoices from Zoho CRM to Xero, reducing manual work and boosting accuracy.",
    image: "/products/xero-sync.jpeg",
    keyfeatures: [
      "One-way sync from Zoho CRM to Xero for invoices, contacts, and products.",
      "Create Xero invoices directly from Zoho CRM.",
      "Real-time, error-free data transfer for seamless accounting.",
      "Easy-to-use interface for quick setup and smooth integration.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-xero-sync-for-zoho-crm/",
    buynow: "https://marketplace.zoho.com/app/crm/xero-sync-for-zoho-crm",
  },
  {
    id: 12,
    name: "Best Candidate For Zoho Recruit",
    desc: "This Zoho Recruit extension streamlines candidate shortlisting by matching candidate skills with job requirements and presenting top matches with real-time visual insights. It boosts recruiter efficiency and simplifies decision-making.",
    image: "/products/recruit.jpeg",
    keyfeatures: [
      "Calculates match percentage between job requirements and candidate skills.",
      "Displays top candidates with key details and visual match indicators.",
      "One-click access to candidate profiles in Zoho Recruit.",
      "Dynamic progress bars for easy comparison and quick decision-making.",
    ],
    product: "recruit",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation-for-best-candidate-for-zoho-recruit/",
    buynow:
      "https://marketplace.zoho.com/app/recruit/best-candidate-for-zoho-recruit",
  },
  {
    id: 13,
    name: "Google Address Finder For Zoho Recruit",
    desc: "Link Google Maps with Zoho Recruit to quickly search, update, and autofill addresses in the Contacts and Client modules—saving time and improving accuracy.",
    image: "/products/address-recruit.jpeg",
    keyfeatures: [
      "Works with both Client and Contact modules.",
      "Update mailing and other addresses individually or together.",
      "Autofill address fields to save time.",
      "Edit addresses directly while viewing records.",
    ],
    product: "recruit",
    helpdoc:
      "https://fristinetech.com/help-documentation-google-map-for-zoho-recruit/",
    buynow:
      "https://marketplace.zoho.com/app/recruit/google-address-finder-for-zoho-recruit",
  },
  {
    id: 14,
    name: "Sharepoint Drive for Zoho CRM",
    desc: "Connect Microsoft SharePoint with Zoho CRM to auto-create organized folders for key modules and access documents directly from CRM—streamlining file management and collaboration.",
    image: "/products/sharepoint.png",
    keyfeatures: [
      "Access and manage SharePoint files from Zoho CRM records.",
      "Store documents in a centralized, organized location.",
      "Collaborate on files without leaving Zoho CRM.",
      "Quickly find and retrieve documents within the CRM.",
    ],
    product: "crm",
    helpdoc:
      "https://fristinetech.com/help-documentation-for-sharepoint-drive/",
    buynow:
      "https://marketplace.zoho.com/app/crm/sharepoint-drive-for-zoho-crm",
  },
  {
    id: 15,
    name: "OneDrive Extension for Zoho CRM",
    desc: "Integrate OneDrive with Zoho CRM to simplify file upload, sync, and sharing—boosting team collaboration and productivity with secure, intuitive file management.",
    image: "/products/onedrive.png",
    keyfeatures: [
      "Connect OneDrive to Zoho CRM for easy file access.",
      "Upload documents directly to OneDrive from CRM.",
      "Delete single or multiple files within the CRM.",
      "Clean, user-friendly interface for seamless navigation.",
    ],
    product: "crm",
    helpdoc:
      "https://help.fristinetech.com/portal/en/kb/articles/onedrive-for-zoho-crm",
    buynow:
      "https://marketplace.zoho.com/app/crm/one-drive-extension-for-zoho-crm",
  },
  {
    id: 16,
    name: "AI Ticket Sentiment Analyzer for Zoho Desk",
    desc: "This Zoho Desk extension adds one-click sentiment analysis to help agents instantly assess customer emotions in email threads, enabling faster, more empathetic support.",
    image: "/products/sentiment.png",
    keyfeatures: [
      "Instantly analyze sentiment of latest or full email conversations.",
      "Get detailed sentiment insights across all interactions.",
      "Automate analysis to boost agent efficiency.",
      "Tailor responses in real time based on sentiment.",
    ],
    product: "desk",
    helpdoc:
      "https://help.fristinetech.com/portal/en/kb/articles/ai-ticket-sentiment-analyzer-for-zoho-desk",
    buynow:
      "https://marketplace.zoho.com/app/desk/ai-ticket-sentiment-analyzer-for-zoho-desk",
  },
  {
    id: 17,
    name: "Bulk Import for Zoho CRM",
    desc: "The Bulk Import Extension for Zoho CRM simplifies importing large CSV datasets into modules like Quotes, Invoices, and Orders—ensuring accurate, efficient data management.",
    image: "/products/bulk-import.png",
    keyfeatures: [
      "Bulk import data into Quotes, Invoices, Sales & Purchase Orders.",
      "Easy field mapping to maintain data accuracy.",
      "Validation checks with error logs for clean imports.",
      "Download added, updated, and skipped records in CSV format.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentation-for-bulk-import-for-zoho-crm/",
    buynow: "https://marketplace.zoho.com/app/crm/bulk-import-for-zoho-crm",
  },
  {
    id: 18,
    name: "DropBox Extension for Zoho CRM",
    desc: "Integrate Dropbox with Zoho CRM to securely access, upload, and manage files directly from CRM modules—streamlining document sharing and collaboration.",
    image: "/products/dropbox.png",
    keyfeatures: [
      "Link Dropbox files to Leads, Contacts, Deals, and more.",
      "Upload CRM attachments directly to Dropbox folders.",
      "Auto-sync files for always up-to-date content.",
      "Works across all major CRM modules.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-dropbox-extension-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/dropbox-extension-for-zoho-crm",
  },
  {
    id: 19,
    name: "Ticket Locking In Zoho Desk",
    desc: "This extension allows you to lock the ticket detail view in Zoho Desk, preventing agents from taking any action—like sending emails or adding resolutions—until CNT tagging is completed. It ensures proper ticket categorization and enforces SLA compliance before work begins.",
    image: "/products/ticket-lock.jpeg",
    keyfeatures: [
      "Define your own set of fields for CNT categorization",
      "Efficient SLA tracking and management",
      "Boost agent performance and productivity",
      "Easy to use and maintain",
    ],
    product: "desk",
    helpdoc: "https://fristinetech.com/help-documentation-for-ticket-lock/",
    buynow: "https://marketplace.zoho.com/app/desk/ticket-locking-in-zoho-desk",
  },
  {
    id: 20,
    name: "Razorpay Extension for Zoho CRM",
    desc: "Connect your Razorpay account with Zoho CRM to seamlessly manage and send payment links directly from your CRM. This extension simplifies the payment process, helping you handle requests efficiently across key modules.",
    image: "/products/razourpay.jpeg",
    keyfeatures: [
      "Send payment links: Generate and send Razorpay payment links from Deals, Invoices, Sales Orders, and Quotes modules.",
      "Resend payment links: Easily resend links if they expire or aren’t received.",
      "Cancel payment links: Cancel previously sent payment requests directly from Zoho CRM.",
      "Update payment details: Edit amount, due date, and description before sending payment links.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentation-razorpay-extension-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/razorpay-extension-for-zoho-crm",
  },
  {
    id: 21,
    name: "GeoTracker for Zoho CRM ",
    desc: "GeoTracker is a smart extension for on-the-go sales and service teams, offering GPS-based visit tracking, real-time check-ins, and easy note-taking to boost productivity and accuracy.",
    image: "/products/geo-tracker.png",
    keyfeatures: [
      "GPS-based location tracking for on-site visits.",
      "One-touch real-time check-in and check-out.",
      "Auto-calculates work hours based on visit logs.",
      "Add notes during check-out for better service records.",
    ],
    product: "crm",
    helpdoc:
      "https://help.fidigital.com.au/portal/en/kb/articles/geotracker-for-zoho-crm#Contents",
    buynow: "https://marketplace.zoho.com/app/crm/geotracker-for-zoho-crm",
  },
  {
    id: 22,
    name: "Google Drive Extension for Zoho CRM",
    desc: "Integrate Google Drive with Zoho CRM to easily upload, sync, and manage files—streamlining collaboration and boosting productivity with secure, intuitive controls.",
    image: "/products/googledrive.png",
    keyfeatures: [
      "Connect Google Drive for direct file access within Zoho CRM.",
      "Upload files seamlessly from the CRM interface. Delete single or multiple files directly from Zoho CRM.",
      "User-friendly UI for smooth navigation and file management.",
    ],
    product: "crm",
    helpdoc: "https://fristinetech.com/help-documentation-google-drive/",
    buynow:
      "https://marketplace.zoho.com/app/crm/google-drive-extension-for-zoho-crm",
  },
  {
    id: 23,
    name: "Auto Currency Update For Zoho Books",
    desc: "The Auto Currency Update extension for Zoho Books provides hourly exchange rate updates, ensuring accurate multi-currency transactions and financial insights in real time.",
    image: "/products/auto-currency.jpeg",
    keyfeatures: [
      "Hourly updates for real-time currency exchange rates.",
      "View and compare historical rates by date within Zoho Books.",
      "Easily track past conversion data in the exchange rates view.",
      "Exchange rates depend on your set base currency.",
    ],
    product: "books",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation-for-auto-currency-update-for-zoho-book/",
    buynow:
      "https://marketplace.zoho.com/app/books/auto-currency-update-for-zoho-books",
  },
  {
    id: 24,
    name: "Email Translator Extension for Zoho Desk",
    desc: "The Email Translator Extension for Zoho Desk uses AI to instantly translate customer emails into regional languages, enabling faster, accurate, and more inclusive support.",
    image: "/products/email-translator.png",
    keyfeatures: [
      "Auto-translate emails into Hindi, Tamil, Telugu, Bengali, and more.",
      "Real-time translation with no manual effort.",
      "AI ensures context-aware, accurate communication.",
      "Gain insights into customer language preferences.",
    ],
    product: "desk",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-email-translator-extension-for-zoho-desk/",
    buynow:
      "https://marketplace.zoho.com/app/desk/email-translator-extension-for-zoho-desk",
  },
  {
    id: 25,
    name: "Email Verification Extension for Zoho CRM",
    desc: "The Email Verification Extension for Zoho CRM keeps lead data accurate by validating email addresses in the Leads module—individually or in bulk.",
    image: "/products/email-verification.png",
    keyfeatures: [
      "One-click email verification in the details view.",
      "Bulk verification from the list view.",
      "Auto-update status as 'Valid' or 'Invalid' ",
      "Avoid re-verifying already validated emails.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentation-email-verification-extension-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/email-verification-extension-for-zoho-crm",
  },
  {
    id: 26,
    name: "Ticket To Lead For Zoho Desk",
    desc: "The Ticket to Lead feature in Zoho Desk lets you convert support tickets into sales leads in Zoho CRM with just a few clicks—bridging support and sales for better follow-up and growth.",
    image: "/products/ticket-to-lead.png",
    keyfeatures: [
      "Seamless Zoho Desk–CRM integration for lead conversion.",
      "Quick ticket-to-lead transformation with editable data.",
      "Agents control and customize lead details before saving.",
      "Interactive interface ensures accurate, tailored lead creation.",
    ],
    product: "desk",
    helpdoc:
      "https://help.fristinetech.com/portal/en/kb/articles/tickets-to-lead-for-zoho-desk",
    buynow:
      "https://marketplace.zoho.com/app/desk/ticket-to-lead-for-zoho-desk",
  },
  {
    id: 27,
    name: "Wati WhatsApp Integration for Zoho CRM",
    desc: "Wati’s WhatsApp integration for Zoho CRM empowers your sales and support teams to connect with leads and contacts directly via WhatsApp—all from within the Zoho CRM interface. Whether you’re sending personalized messages or using preapproved templates, this integration ensures fast, traceable, and contextual communication that drives conversions and enhances customer experience. With native support for Zoho’s Lead and Contact modules, it simplifies outreach and follow-ups, making WhatsApp your most efficient CRM communication channel.",
    image: "/products/wati-crm.png",
    keyfeatures: [
      "Two-way messaging from CRM: Send and receive WhatsApp messages directly within Zoho CRM’s Lead and Contact modules.",
      "Send both templated & custom messages: Use WhatsApp Business-approved message templates for official communication or send free-form messages for casual conversations.",
      "Message from lead or contact view: Reach out to your prospects directly from their CRM profile with just one click.",
      "Get real-time updates on customer replies and manage them from the same CRM interface.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-wati-whatsapp-integration-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/wati-whatsapp-integration-for-zoho-crm#overview",
  },
  {
    id: 28,
    name: "Twilio SMS & WhatsApp Extension for Zoho CRM",
    desc: "Empower your sales and support teams to instantly communicate with customers via SMS and WhatsApp&mdash;right from Zoho CRM. This extension integrates Twilio’s powerful messaging APIs with Zoho CRM, enabling direct and bulk messaging from the Leads, Contacts, Accounts, and Deals modules. Whether you’re sending personalized updates or campaign messages, this integration ensures faster, smarter, and more trackable communication, improving customer engagement and follow-up efficiency.",
    image: "/products/twilio-crm.png",
    keyfeatures: [
      "Send SMS & WhatsApp messages directly from Zoho CRM.",
      "Works with the Leads, Contacts, Accounts, and Deals modules.",
      "Use List View actions to send WhatsApp messages to multiple records at once (bulk messaging).",
      "Easily track message delivery status and time.",
    ],
    product: "crm",
    helpdoc:
      "https://dsvcorp.com.au/help-documentation/help-documentaion-twilio-sms-whatsapp-integration-for-zoho-crm/",
    buynow:
      "https://marketplace.zoho.com/app/crm/twilio-sms-and-whatsapp-extension-for-zoho-crm#overview",
  },
];

export default products;
