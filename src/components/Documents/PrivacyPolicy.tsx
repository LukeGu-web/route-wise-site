'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function PrivacyPolicy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className='fixed top-0 left-0 right-0 origin-top-left h-1 bg-sky-400 dark:bg-amber-400'
        style={{ scaleX }}
      />
      <div className='flex flex-col gap-10 leading-8 my-12 text-black dark:text-white'>
        <h1 className='text-5xl font-semibold font-mono'>
          Privacy Policy for Get Rich
        </h1>
        <p>
          <strong>Effective Date:</strong> 2024 November 11
        </p>

        <p>
          Thank you for using <em>Get Rich</em>! We are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we collect, use, and protect your
          data when you use our app.
        </p>
        <section>
          <h2 className='text-xl font-semibold'>1. Information We Collect</h2>
          <p>
            We collect the following types of information when you use{' '}
            <em>Get Rich</em>:
          </p>

          <h3 className='text-lg font-semibold'>Data Used to Track You</h3>
          <p>
            The following data may be used to track you across apps and websites
            owned by other companies:
          </p>
          <ul>
            <li>
              <strong>Diagnostics:</strong> Information about app performance to
              identify and fix issues.
            </li>
            <li>
              <strong>Crash Data:</strong> Data related to app crashes to
              enhance reliability.
            </li>
            <li>
              <strong>Performance Data:</strong> Information about app speed and
              functionality to improve user experience.
            </li>
          </ul>

          <h3 className='text-lg font-semibold'>Data Linked to You</h3>
          <p>
            The following data may be collected and linked to your identity:
          </p>
          <ul>
            <li>
              <strong>Contact Info:</strong> Name and email address (if provided
              during account creation).
            </li>
          </ul>

          <h3 className='text-lg font-semibold'>Data Not Linked to You</h3>
          <p>
            The following data may be collected but is not linked to your
            identity:
          </p>
          <ul>
            <li>
              <strong>User Content:</strong> Photos or videos you upload within
              the app.
            </li>
            <li>
              <strong>Diagnostics:</strong> General performance and crash data,
              anonymized for analysis.
            </li>
            <li>
              <strong>Contact Info:</strong> Name, used in account-related
              functionality.
            </li>
          </ul>

          <h3 className='text-lg font-semibold'>Financial Data</h3>
          <p>
            We collect data such as your income, expenses, transfers, budgets,
            and asset information to help you manage your finances. This
            information is stored securely and used only for your financial
            tracking.
          </p>
          <p>
            We do not access or store sensitive financial information like bank
            account numbers or credit card details.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>
            2. How We Use Your Information
          </h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>
              <strong>To provide and maintain the service:</strong> We collect
              your data to enable core app functionalities, such as tracking
              expenses, setting budgets, managing transfers, and visualizing
              analytics.
            </li>
            <li>
              <strong>To improve our app:</strong> We analyze usage data to
              understand how users interact with <em>Get Rich</em> and enhance
              its features.
            </li>
            <li>
              <strong>To send reminders:</strong>If you enable daily reminders,
              we use your preferences to notify you about logging expenses and
              reviewing your finances.
            </li>
            <li>
              <strong>To Ensure Privacy and Transparency:</strong>
              <ul className='list-disc pl-8'>
                <li>
                  We collect only the name and email address during
                  registration, which are necessary for account creation and
                  authentication.
                </li>
                <li>
                  For users who log in with Sign in with Apple, email privacy
                  options are supported, and you can opt to hide your email.
                </li>
                <li>
                  Users can also choose to use the app without registration by
                  clicking the Start button on the Welcome page, ensuring no
                  personal data is collected.
                </li>
              </ul>
            </li>
            <li>
              <strong>To Protect Your Privacy:</strong>
              <ul className='list-disc pl-8'>
                <li>
                  We do not sell, rent, or share your personal information with
                  third parties for marketing purposes.
                </li>
                <li>
                  The app does not collect or use your interaction data for
                  advertising without explicit consent.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>3. Data Security</h2>
          <p>
            We prioritize the security of your data and use industry-standard
            encryption to protect it from unauthorized access, alteration, or
            disclosure. However, no method of electronic transmission or storage
            is completely secure. While we strive to protect your data, we
            cannot guarantee absolute security.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>
            4. Data Sharing and Disclosure
          </h2>
          <p>We only share your data in the following cases:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share your information
              with trusted service providers who assist us in operating the app
              (e.g., cloud hosting). These providers are required to maintain
              the confidentiality of your data.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your data when
              required by law or in response to valid legal requests.
            </li>
          </ul>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>
            5. Use of Biometric Authentication
          </h2>
          <ul>
            <li>
              <strong>Biometric Data Utilized by the App</strong>
              <p>
                <em>Get Rich</em> does not collect, store, or share any
                biometric data. The app utilizes the biometric authentication
                features provided by the device&apos;s operating system, such as
                FaceID or fingerprint scanning, to enhance security.
              </p>
            </li>
            <li>
              <strong>Purpose of Biometric Authentication</strong>
              <p>
                Biometric authentication (FaceID or fingerprint) is an optional
                feature that users can enable in the app&apos;s security
                settings. This feature allows users to secure their app access
                by requiring biometric verification after a user-specified time
                period. It is designed to protect user information and prevent
                unauthorized access.
              </p>
            </li>
            <li>
              <strong>Biometric Data Is Not Shared or Stored</strong>
              <p>
                Biometric data is neither stored by <em>Get Rich</em> nor shared
                with third parties. All biometric authentication processes are
                handled locally by the device&apos;s operating system (e.g., iOS
                for FaceID, Android for fingerprints). The app does not have
                access to this data.
              </p>
            </li>
            <li>
              <strong>Retention of Biometric Data</strong>
              <p>
                Biometric data is not retained by the app. It is used
                momentarily during the authentication process, which is managed
                entirely by the device&apos;s operating system.
              </p>
            </li>
            <li>
              <strong>Transparency in Handling Biometric Data</strong>
              <p>
                The app&apos;s use of biometric authentication is limited to
                ensuring secure access. The app relies on the device&apos;s
                operating system to handle all biometric data locally and does
                not process or retain this information.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>6. Your Rights</h2>
          <p>You have the following rights regarding your data:</p>
          <ul>
            <li>
              <strong>Access and Correction:</strong> You can access and update
              your personal and financial information through the app.
            </li>
            <li>
              <strong>Deletion:</strong> You can request to delete your account
              and associated data at any time. Once deleted, your data will no
              longer be accessible.
            </li>
            <li>
              <strong>Opt-out:</strong> You can disable reminders or
              notifications in your app settings at any time.
            </li>
          </ul>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>7. Third-Party Links</h2>
          <p>
            Our app may contain links to third-party websites or services. We
            are not responsible for the privacy practices of these third
            parties, and we encourage you to review their privacy policies.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>8. Children&apos;s Privacy</h2>
          <p>
            <em>Get Rich</em> is designed for general audiences and does not
            impose any age restrictions for its use. The app does not knowingly
            collect personal information from children under the age of 13.
          </p>
          <p>
            If we become aware that personal information has been collected from
            a user under the age of 13 without verifiable parental consent, we
            will take immediate steps to delete the information from our
            systems.
          </p>
          <p>
            We encourage parents and guardians to monitor their children’s app
            usage and guide them in using the app responsibly.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we will notify you of significant
            changes via email or through the app. We encourage you to review
            this policy periodically to stay informed about how we protect your
            data.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold'>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            <strong>Email: </strong>
            <a
              href='getrich.help.service@gmail.com'
              className='text-blue-600 dark:text-blue-200'
            >
              getrich.help.service@gmail.com
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
