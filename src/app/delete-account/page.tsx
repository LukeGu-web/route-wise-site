import type { Metadata } from 'next';
import { PageContainer, DeleteAccount } from '@/components';

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Wonderful budgeting app - Delete Account',
};

export default function DeleteAccountPage() {
  return (
    <PageContainer>
      <DeleteAccount />
    </PageContainer>
  );
}
