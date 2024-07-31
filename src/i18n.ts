import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  // Importer dynamiquement le fichier index.ts du dossier de la langue
  const messages = (await import(`./messages/${locale}`)).default;

  return {
    locale,
    messages,
  };
});
