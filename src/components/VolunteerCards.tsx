'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import MemberCard from './MemberCard';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 120px 10px 0;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 16px;
    padding: 30px 16px 0;
  }

  @media (max-width: 673px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function VolunteerCards({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['volunteer'];
}) {
  return (
    <StyledContainer>
      {dictionary.volunteersInfo.map((volunteer, index) => (
        <MemberCard key={index} name={volunteer.name} job={volunteer.job} noMedia={true} />
      ))}
    </StyledContainer>
  );
}
