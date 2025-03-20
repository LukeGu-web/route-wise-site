import Image from 'next/image';

export default function Screenshots() {
  return (
    <section className='flex flex-row gap-6 border-2 justify-center border-zinc-200 dark:border-zinc-600 rounded-2xl p-6 mt-20 flex-wrap md:justify-evenly'>
      <Image
        className='rounded-2xl'
        src='/assets/screenshots/1.png'
        width={258}
        height={559}
        alt='Picture of the homepage'
      />
      <Image
        className='rounded-2xl'
        src='/assets/screenshots/2.png'
        width={258}
        height={559}
        alt='Picture of the asset management'
      />
      <Image
        className='rounded-2xl'
        src='/assets/screenshots/3.png'
        width={258}
        height={559}
        alt='Picture of the asset management'
      />
    </section>
  );
}
