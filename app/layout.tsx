import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Headers from '@sharedLayout/Headers';
import { ThemeProvider } from '@sharedLayout/Theme/theme-provider';
import { Footer } from '@sharedLayout/Footer';
import { Toaster } from '@/components/ui/sonner';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Back To Bachpan',
  description: 'Back To Backhpan Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Headers />
          {children}
          <Footer />
          <Toaster position='top-center' />
        </ThemeProvider>
      </body>
    </html>
  );
}
