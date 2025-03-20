import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-zinc-200 dark:bg-zinc-700 text-stone-700 dark:text-white w-full p-5 flex flex-col items-center justify-center gap-2'>
      <div className='w-full gap-6 flex flex-row flex-wrap items-center justify-center'>
        {/* <Link className='text-stone-700 dark:text-white' href='/about'>
          About
        </Link> */}
        <Link href='/terms-and-conditions'>Terms & Conditions</Link>
        <Link href='/privacy-policy'>Privacy Policy</Link>
        <Link href='/support'>Contact Us</Link>
      </div>
      <p className='text-xs font-semibold text-zinc-500 dark:text-zinc-400'>
        Copyright &#169; {new Date().getFullYear()} Xpper
      </p>
    </footer>
  );
}
