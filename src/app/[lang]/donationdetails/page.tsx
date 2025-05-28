import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import HeroTheme from '@/components/HeroTheme';
import DonationForm from '@/components/DonationForm';

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function DonationDetail({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  const donationDetails = dictionary.donationDetails;

  return (
    <>
      <HeroTheme dictionary={donationDetails} image="/assets/images/volunteer/volunteerHero.png" />
      <DonationForm dictionary={donationDetails} />
    </>
  );
}
