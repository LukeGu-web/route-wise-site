import Link from 'next/link';
import Image from 'next/image';
import { PageContainer } from '@/components';

export default function NotFound() {
  return (
    <PageContainer>
      <div className='flex flex-col gap-10 text-black dark:text-white'>
        <h2 className='text-4xl sm:text-6xl text-center font-bold'>
          Not Found
        </h2>
        <Image
          className='w-1/2 self-center'
          src='/assets/404.svg'
          width={0}
          height={0}
          sizes='50vw'
          alt='Picture of the 404'
        />
        <Link href='/'>Return Home</Link>
      </div>
    </PageContainer>
  );
}
