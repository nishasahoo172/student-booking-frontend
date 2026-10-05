import React from "react";


// Replace every [bracketed placeholder] with your real details before publishing.
const sections = [
  {
    title: "Introduction",
    body: [
      "This Privacy Policy explains how CCIE Rack Rentals collects, uses, stores, and protects information when users register for an account, receive course access, manage credits, book or reschedule rack sessions, access rack resources, and contact support.",
      "By using the platform, you acknowledge the practices described in this Privacy Policy.",
    ],
  },

  {
    title: "Information We Collect",
    body: [
      "We collect information that is necessary to operate the rack rental platform and provide access to our services. This may include:",
      [
        "Account information such as your full name, email address, phone number, country, address, timezone, role, and account status.",
        "Login and authentication information required to secure your account. Passwords are stored using secure hashing methods and are not stored as plain text.",
        "Course access information, including the courses, schedulers, rack resources, equipment details, topologies, and lab access assigned to your account.",
        "Booking information, including selected rack, booking date, start and end time, booking status, completed sessions, cancellations, and rescheduling history.",
        "Credit information, including credits added, purchased, used, restored, expired, current balance, and purchase or credit history.",
        "Account administration information, including approval, rejection, reactivation, and rejection reason where applicable.",
        "Technical information such as IP address, browser type, device information, login activity, request logs, and other security-related data generated when using the platform.",
        "Support information, including messages, emails, screenshots, attachments, and other information you provide when requesting assistance.",
      ],
    ],
  },

  {
    title: "How We Use Your Information",
    body: [
      "We use the information we collect to:",
      [
        "create, verify, approve, manage, and secure student accounts;",
        "provide access to assigned courses, equipment information, topology resources, schedulers, and rack access guides;",
        "manage credits, purchase history, expiry dates, and rack booking eligibility;",
        "create, confirm, update, reschedule, complete, and maintain rack bookings;",
        "send account, booking, reminder, credit, maintenance, and service-related notifications;",
        "provide technical and customer support;",
        "investigate booking, account, rack, or credit-related issues;",
        "detect misuse, unauthorized access, fraud, security incidents, or violations of our platform rules;",
        "maintain and improve the performance, reliability, and security of the platform;",
        "maintain business, financial, technical, and operational records where required.",
      ],
      "We do not sell your personal information.",
    ],
  },

  {
    title: "Account Approval and Administration",
    body: [
      "New accounts may remain in pending status until reviewed by an administrator.",
      "Administrators may approve, reject, reactivate, assign courses, add credits, review bookings, and manage access based on the services associated with the student's account.",
      "Where an account is rejected, a rejection reason may be stored for administrative and support purposes.",
    ],
  },

  {
    title: "Course and Rack Access Information",
    body: [
      "The platform may store information about the courses and rack environments assigned to your account.",
      "This may include access to CCIE Enterprise Infrastructure, CCIE Security, CCIE Data Center, CCIE Wireless, Fortinet FCX/NSE8, or other supported rack environments.",
      "Rack access documentation, device information, IP details, credentials, VPN information, topology files, and other technical resources may be made available only to authorized students.",
    ],
  },

  {
    title: "Booking and Rescheduling Information",
    body: [
      "When you book a rack session, we may store the course, rack, booking date, scheduled start and end time, credits used, booking status, and related technical information.",
      "If a booking is rescheduled, we may maintain a record of the original booking and the updated booking details for support, auditing, and operational purposes.",
      "Completed, cancelled, missed, or rescheduled sessions may remain visible in booking history where required for account management.",
    ],
  },

  {
    title: "Credits and Purchase History",
    body: [
      "We maintain records relating to credits assigned to or used by your account.",
      "These records may include admin top-ups, purchased credits, credits used for rack bookings, restored credits, expired credits, expiry dates, and current balance.",
      "Where third-party payment services are used, payment card or banking information may be processed directly by the payment provider and may not be stored by our platform.",
    ],
  },

  {
    title: "Email and Service Notifications",
    body: [
      "We may send operational emails related to account registration, pending approval, account approval, rejection, reactivation, booking confirmation, booking reminders, rescheduling, maintenance, credits, password recovery, and support.",
      "These communications are necessary for the operation and security of the rack rental service.",
      "If we send optional promotional or informational communications, users may be provided with an option to unsubscribe where applicable.",
    ],
  },

  {
    title: "Rack Credentials and Technical Access Data",
    body: [
      "Some users may receive rack-specific technical information such as device IP addresses, console details, VPN information, usernames, passwords, or other connection instructions.",
      "This information is provided only for authorized rack use and must not be shared with unauthorized persons.",
      "We may log access and technical activity where necessary to protect the rack infrastructure, investigate faults, or prevent misuse.",
    ],
  },

  {
    title: "How Information Is Shared",
    body: [
      "We may share information only where necessary to operate the service, including:",
      [
        "with hosting, infrastructure, email, security, payment, analytics, or technical service providers that support the platform;",
        "with authorized staff or administrators who require access to manage accounts, bookings, racks, credits, and support requests;",
        "with authorities or other parties where required by law, legal process, security requirements, or to protect our rights and users;",
        "with a successor organization where the business or service is transferred, reorganized, or acquired, subject to applicable requirements.",
      ],
      "We do not make student booking, account, or rack-session information publicly available to other users.",
    ],
  },

  {
    title: "Hosting and Infrastructure",
    body: [
      "Our application and database may be hosted using third-party cloud and infrastructure providers.",
      "These providers may process technical or account information on our behalf only to provide hosting, storage, networking, security, backup, or related infrastructure services.",
      "Data may be processed in locations where our infrastructure or service providers operate, subject to applicable data protection requirements.",
    ],
  },

  {
    title: "Cookies and Local Storage",
    body: [
      "The platform may use cookies, browser storage, local storage, or similar technologies to maintain login sessions, store authentication information, remember preferences, and support application functionality.",
      "Disabling required browser storage may prevent certain features, including login and protected rack access, from working correctly.",
    ],
  },

  {
    title: "Data Retention",
    body: [
      "We retain personal and operational information only for as long as reasonably necessary for account management, rack operations, booking history, credit records, technical support, security, dispute resolution, accounting, or legal requirements.",
      "Different types of information may be retained for different periods depending on the purpose for which they are required.",
      "When information is no longer required, it may be deleted, anonymized, or securely archived in accordance with our operational and legal requirements.",
    ],
  },

  {
    title: "Rack Configurations and Lab Data",
    body: [
      "Students are responsible for saving or exporting any rack configuration they wish to retain before a booking session ends.",
      "Rack environments may be reset, reloaded, restored, or reconfigured between sessions.",
      "We do not guarantee long-term retention of configurations created on rack devices during a student session.",
    ],
  },

  {
    title: "Security",
    body: [
      "We use reasonable technical and organizational safeguards designed to protect account, booking, credit, and platform information.",
      "These safeguards may include encrypted connections, secure password storage, access controls, authentication, application logging, restricted administrator access, and infrastructure security measures.",
      "No online system can guarantee absolute security. Users are responsible for keeping their account and rack credentials confidential and should notify support if unauthorized access is suspected.",
    ],
  },

  {
    title: "Your Privacy Rights",
    body: [
      "Depending on applicable law and your location, you may have rights relating to your personal information, including the right to:",
      [
        "request access to information we hold about you;",
        "request correction of inaccurate or incomplete information;",
        "request deletion of information where legally permitted;",
        "request restriction of certain processing activities;",
        "object to certain uses of your information;",
        "request a copy of eligible personal information in a commonly used format.",
      ],
      "We may need to verify your identity before responding to certain privacy requests.",
    ],
  },

  {
    title: "Third-Party Links and Services",
    body: [
      "The platform may contain links to external websites, vendor documentation, payment services, or third-party resources.",
      "We are not responsible for the privacy practices, security, or content of external websites or services.",
      "Users should review the applicable privacy policies of third-party services before providing information to them.",
    ],
  },

  {
    title: "Third-Party Vendors and Technologies",
    body: [
      "Our rack environments may use products and technologies from Cisco, Fortinet, and other third-party vendors.",
      "Product names, trademarks, software, and related technologies belong to their respective owners.",
      "This Privacy Policy applies to information processed through our own platform and does not replace the privacy policies of third-party vendors or services.",
    ],
  },

  {
    title: "Children's Privacy",
    body: [
      "The platform is intended primarily for adult learners and professionals.",
      "We do not knowingly collect personal information from children where such collection is prohibited by applicable law.",
      "If we become aware that information was collected from a child in violation of applicable requirements, we will take reasonable steps to remove it.",
    ],
  },

  {
    title: "International Users",
    body: [
      "Users may access the platform from different countries and regions.",
      "Where personal information is processed or stored outside the user's country, we take reasonable steps to handle that information in accordance with this Privacy Policy and applicable data protection requirements.",
    ],
  },

  {
    title: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy when our platform, rack services, booking processes, credit system, infrastructure, service providers, or legal requirements change.",
      "The latest version will be published on this page with the updated effective date.",
    ],
  },

  {
    title: "Contact Information",
    body: [
      "For privacy-related questions, requests, or concerns, please contact CCIE Rack Rentals using the official support email address and contact number published on our website.",
    ],
  },
];
export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .legalPage {
          min-height: 100vh;
          background: #f5f7fa;
          padding: 50px 20px;
        }

        .legalContainer {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 45px 50px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          box-sizing: border-box;
        }

        .legalContainer h1 {
          margin: 0 0 8px;
          font-size: 38px;
          line-height: 1.2;
          color: #0f2942;
        }

        .legalUpdated {
          margin: 0 0 20px;
          color: #64748b;
          font-size: 14px;
        }

        .legalIntro {
          margin-bottom: 35px;
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
        }

        .legalContainer section {
          margin-bottom: 30px;
        }

        .legalContainer h2 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.4;
          color: #152238;
        }

        .legalContainer p {
          margin: 0 0 12px;
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
        }

        .legalContainer ul {
          margin: 8px 0 16px;
          padding-left: 24px;
        }

        .legalContainer li {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 1.65;
          color: #374151;
        }

        @media (max-width: 768px) {
          .legalPage {
            padding: 25px 14px;
          }

          .legalContainer {
            padding: 28px 20px;
            border-radius: 12px;
          }

          .legalContainer h1 {
            font-size: 28px;
          }

          .legalContainer h2 {
            font-size: 19px;
          }

          .legalContainer p,
          .legalContainer li,
          .legalIntro {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .legalPage {
            padding: 18px 10px;
          }

          .legalContainer {
            padding: 22px 16px;
          }

          .legalContainer h1 {
            font-size: 25px;
          }

          .legalContainer h2 {
            font-size: 18px;
          }
        }
      `}</style>

      <main className="legalPage">
        <div className="legalContainer">

          <h1>Privacy Policy</h1>

          <p className="legalUpdated">
            Last Updated: October 2026
          </p>

          <p className="legalIntro">
            This policy explains what information we collect when you use
            our rack rental platform, why we collect it, how we use it,
            and the choices available to you.
          </p>

          {sections.map((section, index) => (
            <section key={index}>
              <h2>
                {index + 1}. {section.title}
              </h2>

              {section.body.map((item, itemIndex) => {
                if (Array.isArray(item)) {
                  return (
                    <ul key={itemIndex}>
                      {item.map((listItem, listIndex) => (
                        <li key={listIndex}>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={itemIndex}>
                    {item}
                  </p>
                );
              })}
            </section>
          ))}

        </div>
      </main>
    </>
  );
}