// app/page.tsx

import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'My Homepage',
  description: 'This is the homepage of my application',
};

export default function Home() {
  return (
    <main>
      <Header logoSrc="/images/herobanner.jpg" title="My App" />
      {/* ... your main content, potentially including the Feature component or other elements ... */}
    </main>
  );
}