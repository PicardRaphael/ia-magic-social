import type { TranslationFunction } from '@/types/Common';
import { CreditCard, History, LucideIcon, WandSparkles } from 'lucide-react';
const menuList = ({
  t,
}: {
  t: TranslationFunction;
}): Array<{ name: string; icon: LucideIcon; path: string }> => [
  {
    name: 'Magic Tools',
    icon: WandSparkles,
    path: '/dashboard',
  },
  {
    name: t('history'),
    icon: History,
    path: '/dashboard/history',
  },
  {
    name: t('upgrade'),
    icon: CreditCard,
    path: '/dashboard/upgrade',
  },
];

export default menuList;
