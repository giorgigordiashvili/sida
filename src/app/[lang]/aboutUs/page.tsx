import HeroTheme from '@/components/HeroTheme';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import AboutUs from '@/components/aboutUs/AboutUs';
import Donations from '@/components/aboutUs/Donations';
import DonationSection from '@/components/aboutUs/DonationSection';
import ColoredCards from '@/components/aboutUs/ColoredCards';
import OurEvents from '@/components/aboutUs/OurEvents';

export default async function volunteer(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <HeroTheme
        dictionary={dictionary.projects}
        image={'/assets/images/volunteer/volunteerHero.png'}
      />
      <AboutUs dictionary={dictionary.pageAboutUs} />
      <Donations dictionary={dictionary.donations} />
      <DonationSection dictionary={dictionary.donationSection} />
      <ColoredCards dictionary={dictionary.coloredCard} />
      <OurEvents dictionary={dictionary.ourEvents} />
    </>
  );
}
