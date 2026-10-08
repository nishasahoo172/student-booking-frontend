import React from "react";


// Replace every [bracketed placeholder] with your real details before publishing.

const sections = [
  {
    title: "Terms & Conditions",
    body: [
      "These Terms apply to your use of https://ccielabtraining.com  (the \"Website\") and to every service provided by CCIE Rack Rentals (\"we\", \"us\", \"our\"), including rack access (remote and on-site), technical lab support and training. Please read them before you book or pay.",
      "You accept these Terms when you submit an enquiry, register, book a rack slot, buy a package, make a payment or use our racks or lab. By accepting, you also accept the package details you chose (lab hours, validity and price), the booking and scheduling rules, the payment and fee terms, the lab rules, the Refund & Cancellation Policy and the Privacy Policy.",
      "If you do not agree with any part of these Terms, please do not book or use our services. If you have a question about any term, write to support@ccielabtraining.com before you pay.",
      "The content of the pages of this website is for your general information and uses only. It is subject to change without any notice.",
    ],
  },

  {
    title: " Our services",
    body: [
      "We provide:",
      [
        "Rack access for CCIE Enterprise Infrastructure, CCIE Security, CCIE Data Center, CCIE Wireless and Fortinet FCX/NSE8 labs], remotely and in person at our facility",
        "Training related to CCIE lab preparation",
        "Technical lab support, such as help with access, connectivity and rack issues",
      ],
      "We do not provide accommodation, meals, SIM cards, travel or visa assistance.",
    ],
  },

  {
    title: " Who can use our services",
    body: [
      "Our services are available to individual students, working professionals, training institutes and companies, including customers outside India. You must be at least 18 years old. Institutes and companies are responsible for ensuring that their nominated users follow these Terms.",
    ],
  },

  {
    title: " Packages, lab hours and booking",
    body: [
      [
        "Each package includes a fixed number of lab hours / a number of credits and a validity period.",
        "Rack slots must be booked in advance through website. Access is provided only during the booked slot.",
        "If you start late or leave early, the slot is not extended, and the lost time is not refunded or credited.",
        "Unused hours expire at the end of the package validity and do not carry over.",
        "Slots may be cancelled or rescheduled at least 24 hours before the start time, up to 8 times per package. Slots cancelled later, or not attended, are counted as used.",
        "We may reschedule a slot if there is a technical issue, maintenance or an emergency. In that case we will offer you an alternative slot or credit the lost hours.",
      ],
    ],
  },

  {
    title: " Remote access rules",
    body: [
      [
        "Your login details are for your use only. You must not share them or let anyone else use your slot.",
        "You must use the racks only for CCIE lab practice and learning.",
        "You must not run activity that could disrupt or harm our equipment, other users or any external network. This includes port scanning, attacks, mining, or connecting lab devices to the public internet without our written approval.",
        "You must not change the lab's base configuration, passwords or management access, unless the exercise requires it.",
        "We may monitor and log sessions for security, troubleshooting and quality purposes.",
        "You are responsible for your own device, internet connection and VPN. We are not responsible for problems on your side. Rack environments may be reset between sessions, so save or export any configuration you want to keep before your session ends.",
        "Audio and video recording is not allowed.",
      ],
    ],
  },

  {
    title: " Rules for visiting our lab",
    body: [
      [
        "Bring your own laptop. We provide the racks and connectivity only.",
        "Please carry a valid photo ID and follow the instructions of our staff.",
        "Audio and video recording is not allowed on the premises. Still photography requires permission.",
        "Smoking, alcohol and any illegal substances are strictly prohibited.",
        "The premises are under CCTV surveillance. Our staff may check bags if needed.",
        "You are responsible for your belongings and vehicle. We are not liable for loss or theft.",
        "We may deny entry or end your session if you behave in a disruptive or unsafe manner.",
      ],
    ],
  },

  {
    title: " Equipment, care and damage",
    body: [
      "You must handle our equipment with care. You may be charged for repair or replacement if you intentionally or carelessly damage equipment, cabling, devices or software. Please report any fault straight away.",
    ],
  },

  {
    title: " Fees and payments",
    body: [
      [
        "Fees are shown on the Website or in your quotation. Unless stated otherwise, fees are exclusive of GST (currently 18%) and other applicable taxes.",
        "Payment must be made in advance, before access is activated. Accepted payment methods: [UPI / net banking / debit and credit cards / bank transfer / international payment options].",
        "Prices in INR apply to customers in India. Customers outside India are charged in currency.",
        "Bank charges and currency conversion charges are borne by the customer. Your card issuer may add a conversion mark-up on international payments.",
        "Fees may change from time to time. Changes do not affect packages you have already paid for.",
        "A payment receipt or invoice is provided for every payment.",
        "There will be no refund at all.",
      ],
    ],
  },

  {
    title: " Training and support",
    body: [
      [
        "Training and support sessions run on a schedule agreed with you. If you are late or absent, we are not required to give a make-up session.",
        "Training content and materials are for your own use. You must not copy, share, record or resell them.",
        "We do not provide recordings.",
        "Technical support is provided for issues related to our racks, access and lab environment. We do not provide support for your personal devices or software.",
      ],
    ],
  },

  {
    title: " No guarantee of results",
    body: [
      "We provide lab access and training to help you prepare. We do not guarantee that you will pass any exam, earn any certification or get a job. You are responsible for deciding whether our services suit your needs. We are an independent service provider and are not Cisco and are not affiliated with or endorsed by Cisco Systems, Inc. unless stated otherwise.",
    ],
  },

  {
    title: " International customers",
    body: [
      "Customers from outside India are responsible for their own travel, visa, insurance, accommodation and local arrangements if they visit our lab. Please take out suitable insurance for yourself and your property.",
    ],
  },

  {
    title: " Testimonials and use of your name",
    body: [
      "We will use your name, photo, certification results or testimonial in marketing only with your prior consent.",
    ],
  },

  {
    title: " Intellectual property",
    body: [
      "All content on the Website and in our training materials, topologies and documentation belongs to us or our licensors. You may not copy, distribute or modify it.",
    ],
  },

  {
    title: " Limitation of liability",
    body: [
      "To the extent permitted by law:",
      [
        "We provide the services on an \"as available\" basis. We do not guarantee uninterrupted or error-free access, although we will make reasonable efforts to keep the racks available and fix faults quickly.",
        "We are not liable for indirect or consequential losses, loss of data, or loss of opportunity.",
        "We are not responsible for injury, accident or loss of personal property during an on-site visit, except where caused by our negligence.",
        "Our total liability for any claim is limited to the fees you paid for the package concerned.",
      ],
    ],
  },

  {
    title: " Suspension and termination",
    body: [
      "We may suspend or end your access, without refund where the breach is serious, if you:",
      [
        "break these Terms or the acceptable use rules",
        "share your access or misuse the equipment",
        "fail to pay",
        "act in an abusive, unsafe or illegal manner",
      ],
    ],
  },

  {
    title: " Changes to these Terms",
    body: [
      "We may update these Terms from time to time. The updated version applies from the date it is posted on the Website. Please check this page regularly.",
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