'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import AboutUsCard from './AboutUsCard';

const StyledSection = styled.section`
  width: 100%;
  padding: 0 0 120px;
  overflow: hidden;
`;

const StyledTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 120px;
  margin-bottom: 80px;

  :nth-child(1) {
    color: rgba(226, 109, 90, 1);
  }

  :nth-child(2) {
    color: rgba(31, 31, 31, 1);
    text-align: center;
    max-width: 630px;
    width: 100%;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  overflow-x: hidden;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
`;

export default function TalkingAboutUs({ dictionary }) {
  const originalTestimonials = [
    {
      id: 1,
      text: "Listened carefully to Lisa's needs and translated them into a stunning website. The design is modern and calming, with beautiful imagery that captures the essence of Blooming",
      author: 'Nina Kraviz',
      role: 'Nursing Assistant',
    },
    {
      id: 2,
      text: "Listened carefully to Lisa's needs and translated them into a stunning website. The design is modern and calming, with beautiful imagery that captures the essence of Blooming",
      author: 'Robert Fox',
      role: 'Nursing Assistant',
    },
    {
      id: 3,
      text: "Listened carefully to Lisa's needs and translated them into a stunning website. The design is modern and calming, with beautiful imagery that captures the essence of Blooming",
      author: 'Solomon DK',
      role: 'Nursing Assistant',
    },
    {
      id: 4,
      text: "Listened carefully to Lisa's needs and translated them into a stunning website. The design is modern and calming, with beautiful imagery that captures the essence of Blooming",
      author: 'Amazing Person',
      role: 'Nursing Assistant',
    },
    {
      id: 5,
      text: "Listened carefully to Lisa's needs and translated them into a stunning website. The design is modern and calming, with beautiful imagery that captures the essence of Blooming",
      author: 'Jane Doe',
      role: 'Nursing Assistant',
    },
  ];

  const testimonials = [
    ...originalTestimonials.map((item) => ({ ...item, key: `prev3-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `prev2-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `prev1-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `orig-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `next1-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `next2-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `next3-${item.id}` })),
  ];

  const sliderRef = useRef(null);
  const isInitialMount = useRef(true);
  const [activeCardIndex, setActiveCardIndex] = useState(originalTestimonials.length * 3);

  const cardWidth = 420;
  const originalLength = originalTestimonials.length;

  const centerCard = useCallback(
    (index) => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth || 2000;
        const scrollPosition = index * cardWidth - (sliderWidth - cardWidth) / 2;

        sliderRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });

        const middleSetStart = originalLength * 3;
        const middleSetEnd = middleSetStart + originalLength - 1;
        let newIndex = index;

        if (index < middleSetStart) {
          newIndex = index + originalLength;
          setTimeout(() => {
            sliderRef.current.scrollTo({
              left: newIndex * cardWidth - (sliderWidth - cardWidth) / 2,
              behavior: 'auto',
            });
          }, 400);
        } else if (index > middleSetEnd) {
          newIndex = index - originalLength;
          setTimeout(() => {
            sliderRef.current.scrollTo({
              left: newIndex * cardWidth - (sliderWidth - cardWidth) / 2,
              behavior: 'auto',
            });
          }, 400);
        }

        setActiveCardIndex(newIndex);
      }
    },
    [cardWidth, originalLength]
  );

  const handleCardClick = (index) => {
    centerCard(index);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setTimeout(() => {
        centerCard(activeCardIndex);
      }, 100);
    }
  }, [centerCard, activeCardIndex]);

  useEffect(() => {
    const handleResize = () => {
      centerCard(activeCardIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeCardIndex, centerCard]);

  return (
    <StyledSection>
      <StyledTitles>
        <Typography variant="sBodytext">{dictionary?.title || 'What people are saying'}</Typography>
        <Typography variant="h2">
          {dictionary?.text || 'Our clients love what we do for them'}
        </Typography>
      </StyledTitles>

      <SliderContainer>
        <StyledSlider ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <AboutUsCard
              key={testimonial.key}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              isActive={index === activeCardIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </StyledSlider>
      </SliderContainer>
    </StyledSection>
  );
}
