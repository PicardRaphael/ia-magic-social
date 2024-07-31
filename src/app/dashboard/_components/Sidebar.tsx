'use client';
import { Logo } from '@/components/Logo';
import React from 'react';
import menuList from '@/lib/menuList';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import LanguageSelector from '@/components/LanguageSelector';
const Sidebar = () => {
  const path = usePathname();
  const t = useTranslations('common.sidebar');
  return (
    <div className='p-5 bg-white h-full flex flex-col'>
      <Logo />
      <div className='mt-10 h-max flex flex-col justify-between'>
        {menuList({ t }).map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={cn(
              'flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center',
              path === item.path && 'bg-primary text-white'
            )}
          >
            <item.icon className='h-6 w-6'></item.icon>
            <h2 className='text-lg'>{item.name}</h2>
          </Link>
        ))}
      </div>
      <div className='mt-auto pt-5 self-end'>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Sidebar;
