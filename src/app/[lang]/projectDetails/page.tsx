import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import ProjectDetails from '@/components/ProjectDetails';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <ProjectDetails dictionary={dictionary.projectDetails} />
    </>
  );
}
