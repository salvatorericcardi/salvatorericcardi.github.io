'use client';
import '@/styles/loader.css';
import { i18n } from '@/i18n.config';
import React from 'react';
import { usePathname } from 'next/navigation';

const oldPaths = [
  '/',
].map(p => {
  if (p === '/') {
    return new RegExp(`^${p}$`);
  }

  return new RegExp(`^${p}`);
});

const useBackRouteCompatibility = () => {
  React.useEffect(() => {
    const { pathname } = window.location;
    if (oldPaths.some(p => p.test(pathname)) && pathname !== '/') {
      window.location.replace(`/${i18n.defaultLocale}${pathname}`);
    } else if(pathname === '/') {
      window.location.replace(`/${i18n.defaultLocale}`);
    }
  }, []);
};

export default function NotFound() {
  const [isNeedToRedirect, setIsNeedToRedirect] = React.useState(false);
  useBackRouteCompatibility();

  React.useEffect(() => {
    setIsNeedToRedirect(oldPaths.some(p => p.test(window.location.pathname)));
  }, []);

  if (isNeedToRedirect) {
    return <div id='loader'></div>;
  }

  return <h1>404 - Page Not Found</h1>;
}