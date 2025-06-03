import HeroTheme from '@/components/HeroTheme';
import ProjectsGrid from '@/components/ProjectsGrid';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function volunteer(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <HeroTheme
        dictionary={dictionary.projects}
        image={'/assets/images/volunteer/volunteerHero.png'}
      />
      <ProjectsGrid />
    </>
  );
}
