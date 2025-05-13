import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import TeamMembers from '@/components/TeamMembers';
import JoinUs from '@/components/JoinUs';
import NewsArticles from '@/components/NewsArticles';
import Causes from '@/components/Causes';
import TalkingAboutUs from '@/components/TalkingAboutUs';

export default async function IndexPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      <Causes dictionary={dictionary.causes} />
      <TalkingAboutUs dictionary={dictionary.talkingAboutUs} />
      <TeamMembers dictionary={dictionary.members} />
      <JoinUs dictionary={dictionary.joinUs} />
      <NewsArticles dictionary={dictionary.newsCard} />
    </>
  );
}
