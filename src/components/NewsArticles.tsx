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
      <NewsCard />
      <Typography variant="h1">{dictionary.text}</Typography>
    </div>
  );
}
