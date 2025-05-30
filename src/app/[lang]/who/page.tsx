import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import SupportSection from '@/components/SupportSection';

export default async function Who(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <SupportSection dictionary={dictionary.who} />
    </>
  );
}
