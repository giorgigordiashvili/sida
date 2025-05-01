'use client';
import React from 'react';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';
import StatsCard from './StatsCard';
import MemberCard from './MemberCard';

const StyledSection = styled.section`
  margin: auto;
  margin-top: 160px;
  max-width: 1290px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTitle = styled.div`
  width: 570px;
  gap: 20px;
  display: flex;
  flex-direction: column;

  :nth-child(1) {
    color: rgba(226, 109, 90, 1);
    font-family: jost;
  }

  :nth-child(2) {
    color: rgba(31, 31, 31, 1);
    font-family: jost;
  }

  :nth-child(3) {
    color: rgba(77, 77, 77, 1);
    font-family: jost;
  }
`;

const StyledMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function TeamMembers({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['members'];
}) {
  return (
    <StyledSection>
      <StyledLeft>
        <StyledTitle>
          <Typography variant="sBodytext">{dictionary.teamMembers}</Typography>
          <Typography variant="h2">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.text}</Typography>
        </StyledTitle>
        <StyledStats>
          <StatsCard
            title={dictionary.stats.memberNumber}
            image="/assets/images/totalDonated.svg"
            text={dictionary.stats.teamMember}
          />
          <StatsCard
            title={dictionary.stats.donatedNumber}
            image="/assets/images/totalDonated.svg"
            text={dictionary.stats.totalDonated}
          />
          <StatsCard
            title={dictionary.stats.fundNumber}
            image="/assets/images/totalDonated.svg"
            text={dictionary.stats.fund}
          />
        </StyledStats>
      </StyledLeft>
      <StyledMembers>
        <MemberCard name={dictionary.member.name} job={dictionary.member.job} />
        <MemberCard name={dictionary.member.name} job={dictionary.member.job} />
        <MemberCard name={dictionary.member.name} job={dictionary.member.job} />
        <MemberCard name={dictionary.member.name} job={dictionary.member.job} />
      </StyledMembers>
    </StyledSection>
  );
}
