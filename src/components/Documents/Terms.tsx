'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Terms() {
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
      <div className='flex flex-col gap-4 leading-8 my-12 text-black dark:text-white'>
        <h1 className='text-5xl font-semibold font-mono'>
          Terms and Conditions
        </h1>
        <p>
          <strong>Effective Date:</strong> 2024 November 11
        </p>

        <h2 className='text-xl font-semibold'>1. Acceptance of Terms</h2>
        <p>
          By accessing or using <strong>Get Rich</strong>, you confirm that you
          have read, understood, and agree to be bound by these Terms. If you do
          not agree with any part of these Terms, you must not use the App.
        </p>

        <h2 className='text-xl font-semibold'>2. User Accounts</h2>
        <h3>Eligibility</h3>
        <p>
          You must be at least 13 years old to use <strong>Get Rich</strong>.
        </p>

        <h3>Account Responsibility</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account login details and for all activities that occur under your
          account. You agree to notify us immediately of any unauthorized use of
          your account or security breaches.
        </p>

        <h3>Accuracy of Information</h3>
        <p>
          You agree to provide accurate, up-to-date, and complete information
          when registering or using the App. Failure to do so may result in the
          suspension or termination of your account.
        </p>

        <h2 className='text-xl font-semibold'>3. App Usage</h2>
        <h3>Personal Use</h3>
        <p>
          <strong>Get Rich</strong> is intended for your personal,
          non-commercial use. You agree not to resell, sublicense, or exploit
          the App for any commercial purposes.
        </p>

        <h3>Prohibited Activities</h3>
        <ul>
          <li>Engage in unlawful activities while using the App.</li>
          <li>
            Use the App in any way that could harm, disable, overburden, or
            impair its functionality.
          </li>
          <li>
            Attempt to gain unauthorized access to the App’s servers, systems,
            or data.
          </li>
          <li>
            Use any automated means (e.g., bots, scrapers) to access the App.
          </li>
        </ul>

        <h3>Modifications to the App</h3>
        <p>
          We reserve the right to modify, suspend, or discontinue the App at any
          time, without prior notice or liability to you.
        </p>

        <h2 className='text-xl font-semibold'>4. Subscription and Payments</h2>
        <h3>Free and Premium Services</h3>
        <p>
          <strong>Get Rich</strong> offers both free and premium features. Some
          advanced features may require a subscription.
        </p>

        <h3>Pricing</h3>
        <p>
          All pricing for premium services will be clearly stated within the
          App. We reserve the right to change subscription prices at any time
          but will provide notice in advance of any changes.
        </p>

        <h3>Billing</h3>
        <p>
          By subscribing to premium services, you authorize us to charge your
          payment method for the applicable subscription fees on a recurring
          basis.
        </p>

        <h3>Refunds</h3>
        <p>
          Subscription fees are non-refundable except as required by applicable
          law or as stated in our refund policy.
        </p>

        <h2 className='text-xl font-semibold'>5. Data and Privacy</h2>
        <h3>Data Collection</h3>
        <p>
          We collect personal and financial data, as described in our Privacy
          Policy, to provide you with our services. Please review our Privacy
          Policy to understand how we collect, use, and protect your
          information.
        </p>

        <h3>Security</h3>
        <p>
          While we implement reasonable security measures, we cannot guarantee
          that your information will be completely secure from unauthorized
          access or breaches.
        </p>

        <h3>User Data Ownership</h3>
        <p>
          You retain ownership of any data you input into the App. By using{' '}
          <strong>Get Rich</strong>, you grant us a limited, non-exclusive
          license to use, store, and process your data for the purpose of
          providing the services.
        </p>

        <h2 className='text-xl font-semibold'>6. Intellectual Property</h2>
        <h3>Ownership</h3>
        <p>
          All intellectual property rights in the App, including but not limited
          to software, design, logos, and trademarks, are owned by us or our
          licensors.
        </p>

        <h3>License to Use</h3>
        <p>
          We grant you a limited, non-transferable, non-exclusive license to use
          the App for personal purposes, subject to these Terms. This license
          does not include the right to modify, distribute, or exploit the App.
        </p>

        <h3>Feedback</h3>
        <p>
          By providing feedback or suggestions to us, you grant us a perpetual,
          royalty-free license to use and incorporate your feedback without any
          compensation.
        </p>

        <h2 className='text-xl font-semibold'>
          7. Third-Party Links and Services
        </h2>
        <p>
          <strong>Get Rich</strong> may contain links to third-party websites,
          services, or content that we do not control. We are not responsible
          for the privacy practices, terms, or content of third-party sites.
          Your use of third-party services is at your own risk.
        </p>

        <h2 className='text-xl font-semibold'>8. Termination</h2>
        <h3>Termination by You</h3>
        <p>
          You may stop using <strong>Get Rich</strong> and terminate your
          account at any time.
        </p>

        <h3>Termination by Us</h3>
        <p>
          We reserve the right to suspend or terminate your account or access to
          the App at any time for any reason, including but not limited to
          violations of these Terms.
        </p>

        <h3>Effect of Termination</h3>
        <p>
          Upon termination, you will lose access to the App and any data
          associated with your account. We are not liable for any loss of data
          upon termination.
        </p>

        <h2 className='text-xl font-semibold'>9. Disclaimer of Warranties</h2>
        <p>
          <strong>Get Rich</strong> is provided &quot;as is&quot; and &quot;as
          available.&quot; We make no representations or warranties of any kind,
          express or implied, about the App, including but not limited to the
          accuracy, reliability, or availability of the services. Your use of
          the App is at your own risk.
        </p>

        <h2 className='text-xl font-semibold'>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, or consequential damages, including but not
          limited to lost profits, loss of data, or business interruption,
          arising from your use of the App, even if we have been advised of the
          possibility of such damages.
        </p>

        <h2 className='text-xl font-semibold'>11. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Any changes will be
          posted on this page, and we will notify you of significant changes
          through the App or via email. By continuing to use the App after
          changes are made, you agree to the updated Terms.
        </p>

        <h2 className='text-xl font-semibold'>12. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of [Your Country/State], without regard to its conflict of law
          principles. Any legal action arising from or related to these Terms
          shall be brought exclusively in the courts located in [Your
          Country/State].
        </p>

        <h2 className='text-xl font-semibold'>13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
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
      </div>
    </>
  );
}
