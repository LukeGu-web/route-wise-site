import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from '../DarkMode/ThemeSwitch';

export default function Header() {
  return (
    <div className='py-6 w-full flex flex-row justify-end'>
      <Link href='/'>
        <Image
          className='absolute left-2 top-4 p-2'
          src='/assets/icon.png'
          width={80}
          height={80}
          alt='Brand icon'
        />
      </Link>
      <ThemeSwitch />
    </div>
  );
}
