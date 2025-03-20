import { PageContainer, QRCode } from '@/components';
import { Download, Features, Screenshots, Title } from '@/components/Home';

export default function Home() {
  return (
    <PageContainer>
      <Title />
      <Screenshots />
      <Features />
      <Download />
      <div className='hidden md:block'>
        <QRCode />
      </div>
    </PageContainer>
  );
}
