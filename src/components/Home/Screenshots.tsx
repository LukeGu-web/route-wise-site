import Image from 'next/image';

export default function Screenshots() {
  return (
    <section className='flex flex-row gap-6 border-2 justify-center border-zinc-200 dark:border-zinc-600 rounded-2xl p-6 mt-20 flex-wrap md:justify-evenly'>
      <Image
        className='rounded-2xl'
        src='/assets/screenshots/home.png'
        width={258}
        height={559}
        alt='Picture of the homepage'
      />
      <Image
        className='rounded-2xl'
        src='/assets/screenshots/asset.png'
        width={258}
        height={559}
        alt='Picture of the asset management'
      />

      <div className='flex flex-col gap-8 sm:flex-row sm:gap-0 md:justify-evenly md:w-full lg:flex-col lg:w-fit lg:justify-between'>
        <Image
          className='rounded-2xl'
          src='/assets/screenshots/line-chart.png'
          width={258}
          height={244}
          alt='Picture of the asset management'
        />
        <p className='text-xl text-black dark:text-white font-semibold text-center sm:[writing-mode:vertical-rl] lg:[writing-mode:horizontal-tb]'>
          Easy-to-read Charts
        </p>
        <Image
          className='rounded-2xl'
          src='/assets/screenshots/pie-chart.png'
          width={258}
          height={236}
          alt='Picture of the asset management'
        />
      </div>
    </section>
  );
}
