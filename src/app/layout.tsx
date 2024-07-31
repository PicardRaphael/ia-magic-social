import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import { getMessages } from 'next-intl/server';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClerkProvider>
        <html lang={locale}>
          <body>{children}</body>
        </html>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}
