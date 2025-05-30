import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import HeroTheme from '@/components/HeroTheme';
import DonationForm from '@/components/DonationForm';

export default async function DoantionDetails(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <HeroTheme
        dictionary={dictionary.donationDetails}
        image="/assets/images/volunteer/volunteerHero.png"
      />
      <DonationForm dictionary={dictionary.donationDetails} />
    </>
  );
}
