import { i18n, type Locale } from '@/i18n-config';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'i18n within app router - Vercel Examples',
  description: 'How to do i18n in Next.js 15 within app router',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  // Assuming dictionary is imported or defined based on the selected language
  const dictionary = await import(`@/dictionary/${params.lang}`).then((mod) => mod.default);

  return (
    <html lang={params.lang}>
      <body>
        <StyledComponentsRegistry>
          <Header dictionary={dictionary.header} />

          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
