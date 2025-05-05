'use client';
import NewsCard from './NewsCard';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';

export default function NewsArticles({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['newsCard'];
}) {
  return (
    <div>
      <NewsCard
        title={dictionary.title}
        text={dictionary.text}
        readMore={dictionary.readMore}
        admin={dictionary.admin}
        comment={dictionary.comments}
      />
      <NewsCard
        title={dictionary.title}
        text={dictionary.text}
        readMore={dictionary.readMore}
        admin={dictionary.admin}
        comment={dictionary.comments}
      />
      <NewsCard
        title={dictionary.title}
        text={dictionary.text}
        readMore={dictionary.readMore}
        admin={dictionary.admin}
        comment={dictionary.comments}
      />
      <Typography variant="h1">{dictionary.text}</Typography>
    </div>
  );
}
