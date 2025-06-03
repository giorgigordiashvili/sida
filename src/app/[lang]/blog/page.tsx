import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Blog from '@/components/Blog';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <Blog blog={dictionary.blog} searchBar={dictionary.searchBar} />
    </>
  );
}
