// pages/terms.js
import Head from 'next/head';
import styles from './page.module.css';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Lenuvio</title>
        <meta
          name='description'
          content='Terms of Service for Lenuvio - Legal terms governing the use of our services.'
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <div className={styles.subtitle}>Lenuvio</div>
          <div className={styles.lastUpdated}>Last updated: June 24, 2025</div>
        </div>

        <div className={styles.content}>
          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Lenuvio website and services, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2>Services Description</h2>
            <p>
              Lenuvio provides full-stack development, cloud solutions, UI/UX
              design, and digital transformation services. We specialize in
              creating custom web applications, modernizing legacy systems, and
              providing technical consulting services.
            </p>
          </section>

          <section>
            <h2>Project Terms</h2>
            <p>
              All development projects are governed by individual project
              agreements that specify:
            </p>
            <ul>
              <li>Project scope, deliverables, and timeline</li>
              <li>Payment terms and schedule</li>
              <li>Intellectual property ownership</li>
              <li>Support and maintenance terms</li>
              <li>Change request procedures</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>Unless otherwise specified in a project agreement:</p>
            <ul>
              <li>
                Client retains ownership of their business logic, content, and
                proprietary information
              </li>
              <li>
                Lenuvio retains ownership of general methodologies, techniques,
                and reusable code components
              </li>
              <li>
                Custom code developed specifically for the client becomes the
                client&apos;s property upon full payment
              </li>
              <li>
                Open-source components remain under their respective licenses
              </li>
            </ul>
          </section>

          <section>
            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual project agreements.
              Generally:
            </p>
            <ul>
              <li>Projects require a deposit before work begins</li>
              <li>Payments are due within 30 days of invoice date</li>
              <li>Late payments may incur additional fees</li>
              <li>Work may be suspended for overdue payments</li>
            </ul>
          </section>

          <section>
            <h2>Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client
              information, business processes, and proprietary data. This
              confidentiality extends beyond the duration of our working
              relationship.
            </p>
          </section>

          <section>
            <h2>Warranties and Disclaimers</h2>
            <p>While we strive to deliver high-quality work:</p>
            <ul>
              <li>
                Services are provided &quot;as is&quot; without warranties of
                any kind
              </li>
              <li>We do not guarantee uninterrupted or error-free operation</li>
              <li>Client is responsible for backing up their data</li>
              <li>
                We are not liable for indirect, incidental, or consequential
                damages
              </li>
            </ul>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Lenuvio be liable for any damages exceeding the
              total amount paid by the client for the specific service that gave
              rise to the claim. This limitation applies to all causes of
              action, including contract, tort, or any other legal theory.
            </p>
          </section>

          <section>
            <h2>Support and Maintenance</h2>
            <p>
              Post-launch support terms are defined in individual project
              agreements. Generally:
            </p>
            <ul>
              <li>
                Bug fixes for issues present at launch are provided at no
                additional cost
              </li>
              <li>New features and enhancements require separate agreements</li>
              <li>
                Emergency support may be available outside normal business hours
              </li>
              <li>Regular maintenance packages are available upon request</li>
            </ul>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              Either party may terminate the service agreement with written
              notice. Upon termination:
            </p>
            <ul>
              <li>Client pays for all work completed to date</li>
              <li>All materials and access credentials are returned</li>
              <li>Confidentiality obligations remain in effect</li>
              <li>Both parties are released from future obligations</li>
            </ul>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction where
              Lenuvio operates. Any disputes will be resolved through
              arbitration or in the appropriate courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated revision date.
              Continued use of our services after changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <div className={styles.contactInfo}>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <p>Email: info@lenuv.io</p>
              <p>Website: www.lenuv.io</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
