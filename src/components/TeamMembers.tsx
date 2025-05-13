'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import Typography from './ui/Typography';
import StatsCard from './StatsCard';
import MemberCard from './MemberCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const StyledSection = styled.section`
  margin: auto;
  margin-top: 160px;
  max-width: 1290px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1080px) {
    order: 2;
    align-items: center;
  }
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

  @media (max-width: 1080px) {
    width: fit-content;

    :nth-child(1) {
      display: none;
    }

    :nth-child(2) {
      font-size: 28px;
      text-align: center;
    }

    :nth-child(3) {
      display: none;
    }
  }
`;

const StyledMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
    width: 100%;
    position: relative;
    padding: 20px 0;
    overflow: hidden;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  opacity: 0.3;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  &.swiper-slide-active {
    opacity: 1;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1080px) {
    order: 1;
  }
`;

export default function TeamMembers({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['members'];
}) {
  const members = [
    { name: dictionary.member.name, job: dictionary.member.job },
    { name: dictionary.member.name, job: dictionary.member.job },
    { name: dictionary.member.name, job: dictionary.member.job },
    { name: dictionary.member.name, job: dictionary.member.job },
  ];
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
        {members.map((member, index) => (
          <MemberCard key={index} name={member.name} job={member.job} />
        ))}
      </StyledMembers>

      <CarouselContainer>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={false}
          style={{ width: '100%' }}
        >
          {members.map((member, index) => (
            <StyledSwiperSlide key={index}>
              <MemberCard name={member.name} job={member.job} />
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    </StyledSection>
  );
}
