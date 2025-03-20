import Link from 'next/link';
import Image from 'next/image';
import { PageContainer } from '@/components';

export default function Verification() {
  return (
    <PageContainer>
      <div className='flex flex-col gap-10 text-black dark:text-white'>
        <h2 className='text-4xl sm:text-6xl text-center font-bold'>
          Email verification successful
        </h2>
        <Image
          className='w-1/2 self-center'
          src='/assets/email-verified.svg'
          width={0}
          height={0}
          sizes='50vw'
          alt='Picture of the email verification'
        />
        <Link href='/'>Return Home</Link>
      </div>
    </PageContainer>
  );
}
