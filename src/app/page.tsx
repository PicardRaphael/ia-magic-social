import Link from 'next/link';
import { Logo } from '../components/Logo';
import LanguageSelector from '@/components/LanguageSelector';
import { Auth } from '@/components/Auth';
import { useTranslations } from 'next-intl';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function Home() {
  const { userId } = auth();
  const t = useTranslations();

  if (userId) {
    redirect('/dashboard');
  }
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 mt-5 lg:px-6 h-14 flex items-center'>
        <Logo />
        <nav className='ml-auto hidden lg:flex gap-4 sm:gap-6'>
          <LanguageSelector />
          <Auth />
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full pt-12 md:pt-24 lg:pt-32'>
          <div className='container space-y-10 xl:space-y-16'>
            <div className='grid gap-4 px-10 md:grid-cols-2 md:gap-16'>
              <div>
                <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  {t('title')}
                </h1>
              </div>
              <div className='flex flex-col items-start space-y-4'>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                  {t('description')}
                </p>
                <Link
                  href='#'
                  className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                    Key Features
                  </div>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Faster iteration. More innovation.
                  </h2>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                    The platform for rapid progress. Let your team focus on
                    shipping features instead of managing infrastructure with
                    automated CI/CD, built-in testing, and integrated
                    collaboration.
                  </p>
                </div>
                <ul className='grid gap-2 py-4'>
                  <li>
                    Make collaboration seamless with built-in code review tools.
                  </li>
                  <li>
                    Automate your workflow with continuous integration and
                    delivery.
                  </li>
                  <li>
                    Deploy to the cloud with a single click and scale with ease.
                  </li>
                </ul>
              </div>
              <img
                src='/placeholder.svg'
                width='550'
                height='310'
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
              />
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
            <img
              src='/placeholder.svg'
              width='550'
              height='310'
              alt='Image'
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
            />
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Powerful Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Unlock your team's potential
                </h2>
                <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Empower your team to build better products faster with our
                  suite of powerful features.
                </p>
              </div>
              <ul className='grid gap-2 py-4'>
                <li>
                  Streamline your development workflow with our CI/CD tools.
                </li>
                <li>Gain deep insights into your application's performance.</li>
                <li>
                  Easily scale your infrastructure to meet growing demand.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
