import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@components';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Buy best cars in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
