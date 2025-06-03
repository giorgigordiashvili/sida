import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import BlogDetails from '@/components/BlogDetails';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <BlogDetails blogDetails={dictionary.blogDetails} searchBar={dictionary.searchBar} />
    </>
  );
}
