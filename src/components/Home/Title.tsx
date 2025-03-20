import './styles.css';

export default function Title() {
  return (
    <section className='pt-16 flex-col items-center flex w-full gap-8'>
      <p className='text-center text-xl sm:text-3xl text-blue-400 uppercase font-bold'>
        Route Wise
      </p>
      <div className='breath-header relative flex'>
        <h1 className='absolute text-center text-4xl sm:text-7xl uppercase font-bold text-black dark:text-white'>
          Super Route <br /> Planner
        </h1>
        <h1 className='absolute text-center text-4xl sm:text-7xl uppercase font-bold hover:rounded-l-xl text-black dark:text-white breath-text-hover'>
          Super Route <br /> Planner
        </h1>
      </div>
      <p className='text-center text-lg sm:text-2xl text-zinc-400'>
        Discover, save, and organize your favorite routes
        <br />
        for any journey, from weekend getaways to cross-country adventures.
      </p>
    </section>
  );
}
