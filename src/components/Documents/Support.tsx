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
        <h1 className='text-5xl font-semibold font-mono'>Get Rich Support</h1>
        <p>
          Welcome to the <em>Get Rich</em> support page! We&apos;re here to
          assist you with any issues, feedback, or feature enhancement requests.
          Please use the contact information below to reach out to us.
        </p>

        <section>
          <h2 className='text-xl font-semibold'>Contact Information</h2>

          <h3 className='font-medium'>Email:</h3>
          <p>
            For any inquiries, you can email us at:{' '}
            <a
              href='getrich.help.service@gmail.com'
              className='text-blue-600 dark:text-blue-200'
            >
              getrich.help.service@gmail.com
            </a>
          </p>

          {/* <h3>Phone Support</h3>
          <p>
            You can also contact us by phone at:{' '}
            <strong>+1 (123) 456-7890</strong>
          </p>

          <h3>Mailing Address</h3>
          <address>
            <p>
              <strong>Get Rich Support Team</strong>
            </p>
            <p>1234 Finance Avenue, Suite 100</p>
            <p>Budget City, Moneyland 56789</p>
          </address> */}
        </section>

        <section>
          <h2 className='text-xl font-semibold'>FAQs</h2>
          <p>
            Visit our <a href='#faq'>FAQ section</a> to find answers to common
            questions about using <em>Get Rich</em>.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>
            Feature Requests and Feedback
          </h2>
          <p>
            We value your feedback! If you have suggestions for new features or
            improvements, let us know by sending email to us.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold'>Support Hours</h2>
          <p>Our team is available to assist you during the following hours:</p>
          <ul>
            <li>Monday to Friday: 9:00 AM - 5:00 PM</li>
            {/* <li>Weekends: Closed</li> */}
          </ul>
        </section>
      </div>
    </>
  );
}
