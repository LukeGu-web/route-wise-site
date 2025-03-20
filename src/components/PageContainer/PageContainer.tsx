import Header from '../Header/Header';

export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className='min-h-screen flex-col items-center justify-start flex pt-4 pb-16 px-4'
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      <Header />
      {children}
    </div>
  );
}
