import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import HeroTheme from '@/components/HeroTheme';
import DonationCards from '@/components/DonationCards';
import Distributors from '@/components/Distributors';

export default async function Donation(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <HeroTheme
        dictionary={dictionary.donation}
        image={'/assets/images/volunteer/volunteerHero.png'}
      />
      <DonationCards dictionary={dictionary.causes} />
      <Distributors dictionary={dictionary.distributor} />
    </>
  );
}
