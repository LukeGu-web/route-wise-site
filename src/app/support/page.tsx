import type { Metadata } from 'next';
import { PageContainer, Support } from '@/components';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Wonderful budgeting app - Support',
};

export default function SupportPage() {
  return (
    <PageContainer>
      <Support />
    </PageContainer>
  );
}
