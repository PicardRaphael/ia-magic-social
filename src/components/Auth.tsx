import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

export const Auth = () => {
  const t = useTranslations();

  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button>{t('signIn')}</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
};
