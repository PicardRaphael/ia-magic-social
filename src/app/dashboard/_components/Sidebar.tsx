import { Logo } from '@/components/Logo';
import React from 'react';
import menuList from '@/utils/menuList';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
const Sidebar = () => {
  const t = useTranslations('Sidebar');
  return (
    <div className='p-5 bg-white h-full flex flex-col'>
      <Logo />
      <div className='mt-10 h-max flex flex-col justify-between'>
        {menuList({ t }).map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className='flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center'
          >
            <item.icon className='h-6 w-6'></item.icon>
            <h2 className='text-lg'>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
