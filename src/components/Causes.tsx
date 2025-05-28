'use client';
import React, { useEffect, useState } from 'react';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Typography from './ui/Typography';
import CausesCard from './CausesCard';
import DiscoverBtn from './DiscoverBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const StyledSection = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 0;
  background-color: rgba(255, 243, 240, 1);
  @media (max-width: 1080px) {
    padding: 30px 0;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    :nth-child(1) {
      color: rgba(226, 109, 90, 1);
    }
    :nth-child(2) {
      color: rgba(31, 31, 31, 1);
    }
  }
  @media (max-width: 1080px) {
    justify-content: center;
    div {
      :nth-child(1) {
        display: none;
      }
      :nth-child(2) {
        color: rgba(31, 31, 31, 1);
        font-size: 28px;
        text-align: center;
      }
    }
    button {
      display: none;
    }
  }
`;

const StyledContainer = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: auto;
  padding: 0 15px;

  @media (max-width: 1080px) {
    padding: 0;
    width: 100%;
    overflow: hidden;
  }
`;

const StyledCards = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  @media (max-width: 1080px) {
    display: none;
    padding-top: 30px;
  }
`;

const MobileCardsContainer = styled.div`
  display: none;
  padding-top: 30px;
  width: 100%;

  @media (max-width: 1080px) {
    display: block;
  }

  .swiper {
    width: 100%;
    padding-bottom: 60px;
    overflow: visible;
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    transition: transform 0.3s ease;
    transform: scale(0.8);
    display: flex;
    justify-content: center;
    width: auto;

    @media (max-width: 1080px) {
      width: 80%;
      max-width: 320px;
    }
  }

  .swiper-slide-active {
    transform: scale(1);
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: rgba(217, 217, 217, 1);
    margin: auto;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: rgba(0, 0, 0, 1);
    width: 20px;
    height: 20px;
    transition: all 0.5s ease;
  }
`;

export default function Causes({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['causes'];
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>
          <div>
            <Typography variant="sBodytext">{dictionary.featured}</Typography>
            <Typography variant="h2">{dictionary.Popular}</Typography>
          </div>
          <DiscoverBtn dictionary={dictionary.btn} />
        </StyledTitle>

        <StyledCards>
          <CausesCard dictionary={dictionary.cardContent} color="purple" />
          <CausesCard dictionary={dictionary.cardContent} color="green" />
          <CausesCard dictionary={dictionary.cardContent} color="orange" />
        </StyledCards>

        {isMounted && (
          <MobileCardsContainer>
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={-32}
              slidesPerView="auto"
              centeredSlides={true}
              initialSlide={1}
            >
              <SwiperSlide>
                <CausesCard dictionary={dictionary.cardContent} color="purple" />
              </SwiperSlide>
              <SwiperSlide>
                <CausesCard dictionary={dictionary.cardContent} color="green" />
              </SwiperSlide>
              <SwiperSlide>
                <CausesCard dictionary={dictionary.cardContent} color="orange" />
              </SwiperSlide>
            </Swiper>
          </MobileCardsContainer>
        )}
      </StyledContainer>
    </StyledSection>
  );
}
