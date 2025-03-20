'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Support() {
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
        <h1 className='text-5xl font-semibold font-mono'>RouteWise Support</h1>
        <p>
          Welcome to the <em>RouteWise</em> support page! We&apos;re here to help you with any questions about route planning, 
          navigation features, or technical assistance. Our team is dedicated to making your travel experience seamless and enjoyable.
        </p>

        <section>
          <h2 className='text-xl font-semibold'>Contact Information</h2>

          <h3 className='font-medium'>Email Support:</h3>
          <p>
            For any inquiries, you can email us at:{' '}
            <a
              href='smart.assistant.reset@gmail.com'
              className='text-blue-600 dark:text-blue-200'
            >
              smart.assistant.reset@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>FAQs</h2>
          <p>
            Find answers to common questions about route planning, navigation features, and app usage.
          </p>

          <div className='mt-6 space-y-6'>
            <div>
              <h3 className='text-lg font-medium mb-2'>About Route Planning</h3>
              <div className='space-y-4'>
                <div>
                  <p className='font-medium'>Q: How can I save my favorite routes?</p>
                  <p className='ml-4'>A: Simply click the favorite button while viewing route details to save it to your favorites.</p>
                </div>
                <div>
                  <p className='font-medium'>Q: Is offline usage supported?</p>
                  <p className='ml-4'>A: Yes, you can download frequently used routes for offline access.</p>
                </div>
                <div>
                  <p className='font-medium'>Q: How can I change the language settings?</p>
                  <p className='ml-4'>A: Go to the settings page and find the language option to select your preferred language.</p>
                </div>
                <div>
                  <p className='font-medium'>Q: Do I need to register an account?</p>
                  <p className='ml-4'>A: No registration required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>Feature Requests and Feedback</h2>
          <p>
            We value your input! If you have suggestions for new features or improvements to make RouteWise better, 
            please share your ideas with us through our feedback system in the app or via email.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>Support Hours</h2>
          <p>Our support team is available to assist you during the following hours:</p>
          <ul>
            <li>Monday to Friday: 9:00 AM - 6:00 PM (UTC)</li>
            <li>Saturday: 10:00 AM - 4:00 PM (UTC)</li>
            <li>Sunday: Closed</li>
          </ul>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Note: For urgent technical issues, please use our in-app support chat for immediate assistance.
          </p>
        </section>
      </div>
    </>
  );
}
