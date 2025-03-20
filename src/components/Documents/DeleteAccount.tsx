'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function DeleteAccount() {
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
          User Deletion Instruction for Get Rich
        </h1>
        <p>
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <p>
          Thank you for using <em>Get Rich</em>! We are committed to giving you
          control over your personal data and ensuring your information is
          handled securely. This <strong>Delete Account</strong> feature allows
          you to permanently delete your account and all associated data. Once
          deleted, your data cannot be recovered. We&apos;re here to support
          your privacy and data choices.
        </p>

        <h2>
          <strong>Step 1.</strong> Open the app and go to the Account section
        </h2>
        <p>
          Tap the rightmost option in the bottom navigation bar labeled{' '}
          <strong>Account</strong>.
        </p>
        <Image
          className='rounded-xl border-2 dark:border-zinc-100'
          src='/assets/delete-account/step1.PNG'
          width={262}
          height={568}
          alt='Picture of the detele account step 1'
        />

        <h2>
          <strong>Step 2.</strong> Access Account Details
        </h2>
        <p>
          Scroll to the Account section and tap <strong>Account Details</strong>
          .
        </p>
        <Image
          className='rounded-xl border-2 dark:border-zinc-100'
          src='/assets/delete-account/step2.PNG'
          width={262}
          height={568}
          alt='Picture of the detele account step 1'
        />

        <h2>
          <strong>Step 3.</strong> Delete Account
        </h2>
        <p>Scroll to the bottom of the Account Details page.</p>
        <p>
          Tap the <strong>Delete Account</strong> button.
        </p>
        <p>
          Follow any additional prompts to confirm the deletion of your account
          and user data.
        </p>
        <Image
          className='rounded-xl border-2 dark:border-zinc-100'
          src='/assets/delete-account/step3.PNG'
          width={262}
          height={568}
          alt='Picture of the detele account step 1'
        />

        <p>
          Your account and data will be permanently deleted once you complete
          these steps.
        </p>
      </div>
    </>
  );
}
