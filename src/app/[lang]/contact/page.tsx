import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import HeroTheme from '@/components/HeroTheme';
import ContactForm from '@/components/Contact';

export default async function Donation(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <HeroTheme
        dictionary={dictionary.contact}
        image={'/assets/images/volunteer/volunteerHero.png'}
      />
      <ContactForm dictionary={dictionary.mail} />
    </>
  );
}
