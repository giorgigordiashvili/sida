import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Hero from '@/components/Hero';
import FundCards from '@/components/FundCards';
import DonateButton from '@/components/DonateButton';
import TransparentButton from '@/components/TransparentButton';
import AboutUs from '@/components/AboutUs';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  // Load dictionary based on the current language
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <LanguageSwitcher></LanguageSwitcher>
      <TransparentButton variant="discover"></TransparentButton>
      <TransparentButton variant="view"></TransparentButton>
      <DonateButton></DonateButton>
      <Hero dictionary={dictionary.hero}></Hero>
      <FundCards dictionary={dictionary.fundCards}></FundCards>
      <AboutUs dictionary={dictionary.aboutUs}></AboutUs>
    </>
  );
}
