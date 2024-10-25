import '../assets/scss/app.scss';
import './globals.scss';
import type {Metadata} from 'next';
import {ThemeProvider} from '@/providers/theme-provider';


export const metadata: Metadata = {
  title: 'EPC EAS',
  description: 'Generated by create next app',
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
