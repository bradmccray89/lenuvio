import Head from 'next/head';
import styles from './page.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Lenuvio</title>
        <meta
          name='description'
          content='Privacy Policy for Lenuvio - How we collect, use, and protect your information.'
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.subtitle}>Lenuvio</div>
          <div className={styles.lastUpdated}>Last updated: June 24, 2025</div>
        </div>

        <div className={styles.content}>
          <section>
            <h2>Information We Collect</h2>
            <p>
              When you visit our website or contact us, we may collect the
              following information:
            </p>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Project details and requirements you share with us</li>
              <li>
                Website usage data (pages visited, time spent, browser type)
              </li>
              <li>IP address and device information for security purposes</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate about projects and business matters</li>
              <li>Improve our website and services</li>
              <li>
                Send occasional updates about our services (with your consent)
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information only in the following
              circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>
                With trusted service providers who assist in website operations
                (under strict confidentiality agreements)
              </li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can control cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, hosting, or other
              website functions. These services have their own privacy policies
              governing the use of your information.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>
                File a complaint with relevant data protection authorities
              </li>
            </ul>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <div className={styles.contactInfo}>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <p>Email: privacy@lenuv.io</p>
              <p>Website: www.lenuv.io</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
