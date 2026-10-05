import React from "react";


// Replace every [bracketed placeholder] with your real details before publishing.
const sections = [
  {
    title: "Introduction",
    body: [
      "These Terms & Conditions govern the use of the CCIE Rack Rentals platform, including account registration, course access, rack booking, credits, rescheduling, rack access guides, topology documents, and related support services.",
      "By creating an account, receiving account approval, booking a rack session, or using any rack or resource available through the platform, you agree to these Terms & Conditions.",
    ],
  },

  {
    title: "Account Registration",
    body: [
      "Users must provide accurate and complete information when creating an account.",
      "Each account is intended for individual use only. Users are responsible for maintaining the confidentiality of their login credentials and for activities performed through their account.",
    ],
  },

  {
    title: "Account Approval",
    body: [
      "New student accounts may remain in pending status until reviewed and approved by an administrator.",
      "Account approval allows access to the platform but does not automatically provide access to every course, rack, or time slot.",
      "Course and rack access may be assigned separately based on the services purchased or approved for the student.",
    ],
  },

  {
    title: "Course Access",
    body: [
      "Students can access only the courses, equipment information, topologies, schedulers, and rack resources assigned to their account.",
      "Available courses may include CCIE Enterprise Infrastructure, CCIE Security, CCIE Data Center, CCIE Wireless, Fortinet FCX/NSE8, and other supported programs.",
      "Course access is personal and must not be shared with another person.",
    ],
  },

  {
    title: "Rack Access",
    body: [
      "Rack access is provided only for the rack and booking period assigned to the student.",
      "Students must follow the applicable Rack Access Guide before connecting to any device.",
      "Rack credentials, device IP addresses, console information, VPN details, and other access information are confidential and must not be shared with any unauthorized person.",
      "Students must access only the devices and rack environment assigned to their booking.",
    ],
  },

  {
    title: "Rack Access Guides and Topologies",
    body: [
      "Rack Access Guides, network topologies, device details, and technical documents are provided to help students use the assigned lab environment.",
      "Different racks may have different access instructions, IP addresses, device credentials, and topology information.",
      "Students are responsible for reviewing the correct guide for the rack assigned to their session before starting the lab.",
    ],
  },

  {
    title: "Credits",
    body: [
      "Rack bookings are managed using credits available in the student's account.",
      "The number of credits required for a booking may vary depending on the rack, course, booking duration, or service selected.",
      "Credits may be purchased, assigned, added by an administrator, deducted for bookings, restored where applicable, or expire according to the validity shown in the student's account or purchase history.",
      "Credits are linked to the student's account and cannot be transferred to another user unless expressly approved by the administrator.",
    ],
  },

  {
    title: "Credit Validity and Expiry",
    body: [
      "Each credit allocation may have its own validity and expiry date.",
      "Students are responsible for checking the expiry date shown in their purchase or credit history.",
      "Unused credits may expire after the applicable validity period and may no longer be available for booking after expiry.",
    ],
  },

  {
    title: "Rack Booking",
    body: [
      "Students may book rack sessions only for courses and racks available to their account.",
      "A booking is considered confirmed only when the booking has been successfully created and the required credits have been deducted.",
      "Students must verify the selected rack, date, time, and timezone before confirming a booking.",
      "Availability of a rack or time slot is not guaranteed until the booking is successfully completed.",
    ],
  },

  {
    title: "Booking Time",
    body: [
      "Rack access is available only during the confirmed booking period.",
      "Starting a session late does not automatically extend the scheduled end time.",
      "Students should complete their work and save required configurations before the booking period ends.",
    ],
  },

  {
    title: "Rescheduling",
    body: [
      "Eligible bookings may be rescheduled through the platform, subject to rack availability and the rescheduling rules displayed for the booking.",
      "A reschedule is confirmed only after the new date and time are successfully saved in the system.",
      "Students should verify the updated booking details after completing a reschedule request.",
    ],
  },

  {
    title: "Cancellation and Missed Sessions",
    body: [
      "Cancellation, rescheduling, and credit restoration are subject to the rules applicable to the student's booking.",
      "If a student does not use a confirmed booking, the session may be treated as a missed session and the credits used for that booking may not be restored.",
      "Any exception or credit restoration will be handled according to the applicable support and booking policy.",
    ],
  },

  {
    title: "Rack Availability and Maintenance",
    body: [
      "We make reasonable efforts to keep rack infrastructure available during scheduled booking periods.",
      "Rack access may occasionally be affected by hardware failure, software upgrades, maintenance, network problems, power issues, or other technical conditions.",
      "If a confirmed session is materially affected by an issue within our infrastructure, our support team may provide an alternative session, restore applicable credits, or provide another appropriate resolution.",
    ],
  },

  {
    title: "Student Responsibilities",
    body: [
      "Students are responsible for:",
      [
        "maintaining a reliable internet connection;",
        "using the required VPN, terminal, console, or remote-access software;",
        "following the correct Rack Access Guide;",
        "using only the rack and devices assigned to their booking;",
        "saving required configurations before the session ends;",
        "reporting rack or device problems promptly;",
        "keeping account and rack credentials confidential;",
        "using the environment only for legitimate training and lab activities.",
      ],
    ],
  },

  {
    title: "Prohibited Activities",
    body: [
      "Users must not:",
      [
        "share account, rack, VPN, console, or device credentials;",
        "access another student's booking or rack session;",
        "attempt to bypass access restrictions;",
        "scan, attack, disrupt, or misuse the rack infrastructure;",
        "use the lab environment to attack or interfere with external systems;",
        "change management or access settings in a way that prevents other users or administrators from accessing the equipment;",
        "upload malware or intentionally damage rack infrastructure;",
        "copy, redistribute, resell, or publicly share protected rack guides, topology documents, credentials, or training materials without permission.",
      ],
    ],
  },

  {
    title: "Configuration and Lab Data",
    body: [
      "Students are responsible for saving or exporting any configuration they wish to keep before their rack session ends.",
      "Rack devices may be reset, reloaded, restored, or reconfigured between student sessions.",
      "We cannot guarantee that configurations created during a previous session will remain available for a future booking.",
    ],
  },

  {
    title: "Technical Support",
    body: [
      "Students should contact support if they experience rack connectivity problems, incorrect credentials, unavailable devices, booking issues, credit discrepancies, or other platform-related problems.",
      "Support may request booking details, screenshots, timestamps, or other information required to investigate the issue.",
    ],
  },

  {
    title: "Email Notifications",
    body: [
      "The platform may send operational emails related to account registration, account approval, rejection, reactivation, booking activity, reminders, rescheduling, credits, maintenance, and support.",
      "Users are responsible for providing a valid email address and checking important service notifications.",
    ],
  },

  {
    title: "Payments and Purchases",
    body: [
      "Where paid credits, rack packages, or other services are offered, the applicable price and credit allocation will be displayed or communicated before purchase.",
      "Students should verify the service, course, credits, validity period, and applicable conditions before completing a purchase.",
    ],
  },

  {
    title: "Refunds and Service Credits",
    body: [
      "Purchased rack credits or services are generally non-refundable after allocation or use, except where required by applicable law or specifically approved by us.",
      "If a confirmed rack session cannot be provided because of a verified issue within our infrastructure, we may restore the affected credits, provide an alternative booking, or provide another suitable resolution.",
      "Problems caused by the student's internet connection, local computer, software configuration, incorrect use of the rack, or failure to follow access instructions may not qualify for credit restoration.",
    ],
  },

  {
    title: "Intellectual Property",
    body: [
      "Website content, rack access guides, documentation, topology diagrams, training resources, platform design, and other materials provided through the service are protected by applicable intellectual property rights.",
      "Students receive a limited right to use these materials for their own learning and rack-session purposes.",
      "Materials must not be copied, resold, publicly distributed, or commercially reused without authorization.",
    ],
  },

  {
    title: "Third-Party Products",
    body: [
      "Rack environments may contain hardware, software, operating systems, trademarks, and technologies belonging to third-party vendors including Cisco, Fortinet, and others.",
      "All third-party product names and trademarks belong to their respective owners.",
      "Use of third-party software or technologies may also be subject to the applicable vendor terms and licensing conditions.",
    ],
  },

  {
    title: "Account Rejection, Suspension and Reactivation",
    body: [
      "An account may be rejected, suspended, or restricted if required information is incomplete, the platform is misused, security policies are violated, credentials are shared, or these Terms are breached.",
      "Where appropriate, an administrator may reactivate a previously rejected or restricted account.",
      "Reactivation does not automatically restore expired credits, previous bookings, or course access unless separately approved.",
    ],
  },

  {
    title: "Service Availability",
    body: [
      "We aim to provide reliable access to the platform and rack infrastructure, but continuous or uninterrupted availability cannot be guaranteed.",
      "Services may be temporarily unavailable due to maintenance, upgrades, technical faults, security requirements, or circumstances outside our reasonable control.",
    ],
  },

  {
    title: "Limitation of Liability",
    body: [
      "To the extent permitted by applicable law, we are not responsible for indirect losses, lost configurations, lost study time, examination results, internet connectivity problems, or issues caused by equipment or software outside our control.",
      "Rack rental services are provided as training and lab-access services and do not guarantee certification, examination success, employment, or any specific professional outcome.",
    ],
  },

  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms & Conditions when our rack services, booking rules, credit system, platform features, or legal requirements change.",
      "The latest version will be published on this page together with the applicable update date.",
    ],
  },

  {
    title: "Contact Information",
    body: [
      "For questions about rack access, bookings, credits, these Terms & Conditions, or other platform services, please contact CCIE Rack Rentals using the official support email address and contact number published on our website.",
    ],
  },
];
export default function TermsConditions() {
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

          <h1>Terms & Conditions</h1>

          <p className="legalUpdated">
            Last Updated: October 2026
          </p>

          <p className="legalIntro">
            Please read these terms before booking a rack.
            They explain how accounts, credits, bookings,
            rescheduling, and rack access work.
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