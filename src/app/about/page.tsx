import type { Metadata } from 'next';
import { PageContainer } from '@/components';

export const metadata: Metadata = {
  title: 'About me',
  description: 'Wonderful budgeting app - About Me',
};

export default function About() {
  return (
    <PageContainer>
      <h1> About me </h1>
    </PageContainer>
  );
}
