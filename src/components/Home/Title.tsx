import './styles.css';

export default function Title() {
  return (
    <section className='pt-16 flex-col items-center flex w-full gap-8'>
      <p className='text-center text-xl sm:text-3xl text-blue-400 uppercase font-bold'>
        Get Rich
      </p>
      <div className='breath-header relative flex'>
        <h1 className='absolute text-center text-4xl sm:text-7xl uppercase font-bold text-black dark:text-white'>
          Master Money <br /> Simplify Life
        </h1>
        <h1 className='absolute text-center text-4xl sm:text-7xl uppercase font-bold hover:rounded-l-xl text-black dark:text-white breath-text-hover'>
          Master Money <br /> Simplify Life
        </h1>
      </div>
      <p className='text-center text-lg sm:text-2xl text-zinc-400'>
        Manage your money effortlessly,
        <br />
        track spending, set budgets, and save more.
      </p>
    </section>
  );
}
