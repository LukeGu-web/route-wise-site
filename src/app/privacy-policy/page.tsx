import type { Metadata } from 'next';
import { PageContainer, PrivacyPolicy } from '@/components';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Wonderful budgeting app - Privacy Policy',
};

export default function Privacy() {
  return (
    <PageContainer>
      <PrivacyPolicy />
    </PageContainer>
  );
}
