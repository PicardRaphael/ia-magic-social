'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguageStore } from '@/stores/languageStore';

const flags = {
  en: 'flag:gb-4x3',
  fr: 'flag:fr-4x3',
};

const LanguageSelector = () => {
  const router = useRouter();
  const t = useTranslations('LanguageSelector');
  const { language, setLanguage } = useLanguageStore();

  const changeLanguage = (locale: string) => {
    setLanguage(locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Icon
          icon='carbon:earth-europe-africa'
          width='24'
          height='24'
          className='self-center'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {Object.entries(flags).map(([locale, flagIcon]) => (
          <DropdownMenuItem
            key={locale}
            onSelect={() => changeLanguage(locale)}
          >
            <Icon icon={flagIcon} width='24' height='24' className='mr-2' />
            {t(locale)}
            {language === locale && (
              <Icon
                icon='mdi:check'
                className='ml-auto text-green-600'
                width='20'
                height='20'
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
