'use client';
import { Locale } from '@/i18n-config';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';

const LocaleItem = styled.li`
  padding: 0;

  a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    text-transform: uppercase;
    font-family: Helvetica, Arial, sans-serif;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const LanguageSwitcher = () => {
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] as Locale;
  const alternateLocale: Locale = currentLocale === 'en' ? 'ge' : 'en';

  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  const newPath = `/${alternateLocale}${pathWithoutLocale}`;

  return (
    <LocaleItem>
      <Link href={newPath}>{alternateLocale.toUpperCase()}</Link>
    </LocaleItem>
  );
};

export default LanguageSwitcher;
