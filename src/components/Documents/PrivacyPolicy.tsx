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
          Privacy Policy for RouteWise
        </h1>
        <p>
          <strong>Last updated:</strong> March 19, 2024
        </p>

        <p>
          Thank you for using <em>RouteWise</em>! We are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we handle your data when you use our app.
        </p>

        <section>
          <h2 className='text-xl font-semibold'>1. Information We Collect</h2>
          <p>
            RouteWise is designed with privacy in mind. We collect minimal information to provide you with the best route planning experience:
          </p>
          <ul>
            <li>
              <strong>User Preferences:</strong> Your app settings and preferences
            </li>
            <li>
              <strong>Saved Routes:</strong> Your favorite routes and saved locations
            </li>
            <li>
              <strong>App Usage Statistics:</strong> Basic usage data to improve app performance
            </li>
          </ul>
          <p className='mt-4'>
            <strong>Important Note:</strong> RouteWise does not require registration, and all your personal data is stored locally on your device. We do not collect or store any personal information on our servers.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>2. How We Use Your Information</h2>
          <p>We use your information solely for the following purposes:</p>
          <ul>
            <li>
              <strong>Route Planning:</strong> To provide route planning services
            </li>
            <li>
              <strong>App Improvement:</strong> To enhance app performance and user experience
            </li>
            <li>
              <strong>Personalization:</strong> To customize your experience based on your preferences
            </li>
            <li>
              <strong>Feature Maintenance:</strong> To maintain and improve app features
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>3. Data Storage and Security</h2>
          <p>
            Your privacy is our top priority. Here's how we handle your data:
          </p>
          <ul>
            <li>
              <strong>Local Storage:</strong> All your data is stored locally on your device
            </li>
            <li>
              <strong>No Server Storage:</strong> We do not store any personal information on our servers
            </li>
            <li>
              <strong>Data Protection:</strong> Your local data is protected by your device's built-in security features
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>4. Your Rights</h2>
          <p>You have complete control over your data:</p>
          <ul>
            <li>
              <strong>Data Access:</strong> All your data is accessible directly through the app
            </li>
            <li>
              <strong>Data Deletion:</strong> You can clear all app data through your device settings
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>5. Contact Us</h2>
          <p>
            If you have any questions about our privacy practices, please contact us at:
          </p>
          <p>
            <strong>Email: </strong>
            <a
              href='smart.assistant.reset@gmail.com'
              className='text-blue-600 dark:text-blue-200'
            >
              smart.assistant.reset@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, 
            and we will notify you of significant changes through the app. We encourage you to review this 
            policy periodically to stay informed about how we protect your privacy.
          </p>
        </section>
      </div>
    </>
  );
}
