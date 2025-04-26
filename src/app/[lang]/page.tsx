import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Hero from '@/components/Hero';
import FundCards from '@/components/FundCards';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  // Load dictionary based on the current language
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <LanguageSwitcher></LanguageSwitcher>
      <Hero dictionary={dictionary.hero}></Hero>
      <FundCards dictionary={dictionary.fundCards}></FundCards>
    </>
  );
}
