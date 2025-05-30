'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Typography from '../ui/Typography';
import EventsCard from './EventsCard';

const StyledSection = styled.section`
  padding: 120px 16px 0 16px;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitles = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  & > :nth-child(1) {
    color: rgba(226, 109, 90, 1);
  }
`;

const StyledCards = styled.div`
  display: flex;
  max-width: 1290px;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
  padding-top: 60px;
`;

export default function OurEvents({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['ourEvents'];
}) {
  return (
    <StyledSection>
      <StyledTitles>
        <Typography variant="sBodytext">{dictionary.title}</Typography>
        <Typography variant="h2">{dictionary.text}</Typography>
      </StyledTitles>
      <StyledCards>
        <EventsCard
          img={dictionary.cards.firstCard.img}
          title={dictionary.cards.firstCard.title}
          text={dictionary.cards.firstCard.text}
          donateBtn={dictionary.cards.buttonText}
          address={dictionary.cards.firstCard.address}
        />
        <EventsCard
          img={dictionary.cards.firstCard.img}
          title={dictionary.cards.firstCard.title}
          text={dictionary.cards.firstCard.text}
          donateBtn={dictionary.cards.buttonText}
          address={dictionary.cards.secondCard.address}
          schedule={dictionary.cards.secondCard.schedule}
        />
        <EventsCard
          img={dictionary.cards.secondCard.img}
          title={dictionary.cards.secondCard.title}
          text={dictionary.cards.secondCard.text}
          donateBtn={dictionary.cards.buttonText}
          address={dictionary.cards.thirdCard.address}
          schedule={dictionary.cards.thirdCard.schedule}
        />
      </StyledCards>
    </StyledSection>
  );
}
