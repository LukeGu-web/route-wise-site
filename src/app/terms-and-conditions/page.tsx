import type { Metadata } from 'next';
import { PageContainer, Terms } from '@/components';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Wonderful budgeting app - Terms and Conditions',
};

export default function TermsAndConditions() {
  return (
    <PageContainer>
      <Terms />
    </PageContainer>
  );
}
