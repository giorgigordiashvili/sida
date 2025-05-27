import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import SearchBar from '@/components/SearchBar';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <SearchBar dictionary={dictionary.searchBar} />
    </>
  );
}
