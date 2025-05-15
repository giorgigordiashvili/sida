'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import AboutUsCard from './AboutUsCard';

const StyledSection = styled.section`
  width: 100%;
  padding: 0 0 120px;
  overflow: hidden;

  @media (max-width: 1080px) {
    padding: 0 0 60px;
  }
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

  @media (max-width: 1080px) {
    padding-top: 60px;
    margin-bottom: 40px;
    gap: 5px;
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

  @media (max-width: 1080px) {
    padding: 20px 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      scroll-snap-align: center;
      transition: transform 0.3s ease;
    }

    & > *:not(.active) {
      transform: scale(0.8); /* Scale down inactive cards on mobile */
    }

    & > *.active {
      transform: scale(1); /* Active card at full size */
    }
  }

  @media (min-width: 1081px) {
    & > *:not(.active) {
      transform: scale(0.9); /* Slightly smaller inactive cards on desktop */
    }

    & > *.active {
      transform: scale(1); /* Active card at full size */
    }
  }
`;

interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar?: string;
  id?: number;
  key?: string;
}

interface TalkingAboutUsProps {
  dictionary?: {
    title?: string;
    text?: string;
    testimonials?: Testimonial[];
  };
}

export default function TalkingAboutUs({ dictionary }: TalkingAboutUsProps) {
  // Declare all hooks at the top
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const lastScrollLeft = useRef(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Map testimonials
  const originalTestimonials = (dictionary?.testimonials || []).map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  // Create repeated testimonials for infinite scroll effect
  const testimonials = [
    ...originalTestimonials.map((item) => ({ ...item, key: `prev3-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `prev2-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `prev1-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `orig-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `next1-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `next2-${item.id}` })),
    ...originalTestimonials.map((item) => ({ ...item, key: `next3-${item.id}` })),
  ];

  // Set initial active card index to the middle set
  useEffect(() => {
    setActiveCardIndex(originalTestimonials.length * 3);
  }, [originalTestimonials.length]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 1080);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const cardWidth = isMobile ? 224 : 580;
  const originalLength = originalTestimonials.length;

  const centerCard = useCallback(
    (index: number) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const sliderWidth = slider.offsetWidth || 2000;
      const scrollPosition = index * cardWidth - (sliderWidth - cardWidth) / 2;

      slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      const middleSetStart = originalLength * 3;
      const middleSetEnd = middleSetStart + originalLength - 1;
      let newIndex = index;

      if (index < middleSetStart) {
        newIndex = index + originalLength;
        setTimeout(() => {
          const currentSlider = sliderRef.current;
          if (!currentSlider) return;

          currentSlider.scrollTo({
            left: newIndex * cardWidth - (sliderWidth - cardWidth) / 2,
            behavior: 'auto',
          });
        }, 400);
      } else if (index > middleSetEnd) {
        newIndex = index - originalLength;
        setTimeout(() => {
          const currentSlider = sliderRef.current;
          if (!currentSlider) return;

          currentSlider.scrollTo({
            left: newIndex * cardWidth - (sliderWidth - cardWidth) / 2,
            behavior: 'auto',
          });
        }, 400);
      }

      setActiveCardIndex(newIndex);
    },
    [cardWidth, originalLength]
  );

  const handleCardClick = (index: number) => {
    if (!isMobile) {
      centerCard(index);
    }
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

  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;

    const slider = sliderRef.current;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (!slider) return;

        const sliderRect = slider.getBoundingClientRect();
        const centerX = sliderRect.left + sliderRect.width / 2;
        const scrollLeft = slider.scrollLeft;
        const totalWidth = slider.scrollWidth;
        const cardWidthWithMargin = cardWidth + 20;

        const isScrollingRight = scrollLeft > lastScrollLeft.current;
        lastScrollLeft.current = scrollLeft;

        const middleSetStart = originalLength * 3;
        const middleSetEnd = middleSetStart + originalLength - 1;
        const nearStart = scrollLeft < cardWidthWithMargin * originalLength;
        const nearEnd = scrollLeft > totalWidth - cardWidthWithMargin * originalLength * 2;

        let closestCard = null;
        let closestDistance = Infinity;

        Array.from(slider.children).forEach((child, index) => {
          const cardRect = child.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(centerX - cardCenterX);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = index;
          }
        });

        if (nearStart && closestCard !== null && closestCard < middleSetStart && isScrollingRight) {
          const newIndex = closestCard + originalLength * 3;
          slider.scrollTo({
            left: newIndex * cardWidthWithMargin - (sliderRect.width - cardWidth) / 2,
            behavior: 'auto',
          });
          setActiveCardIndex(newIndex);
        } else if (
          nearEnd &&
          closestCard !== null &&
          closestCard > middleSetEnd &&
          !isScrollingRight
        ) {
          const newIndex = closestCard - originalLength * 3;
          slider.scrollTo({
            left: newIndex * cardWidthWithMargin - (sliderRect.width - cardWidth) / 2,
            behavior: 'auto',
          });
          setActiveCardIndex(newIndex);
        } else if (closestCard !== null && closestCard !== activeCardIndex) {
          setActiveCardIndex(closestCard);
        }
      }, 30);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => {
      slider.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isMobile, activeCardIndex, cardWidth, originalLength]);

  // Early return after all hooks are declared
  if (originalTestimonials.length === 0) {
    return null;
  }

  return (
    <StyledSection>
      <StyledTitles>
        <Typography variant="sBodytext">{dictionary?.title}</Typography>
        <Typography variant="h2">{dictionary?.text}</Typography>
      </StyledTitles>

      <SliderContainer>
        <StyledSlider ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.key}
              className={index === activeCardIndex ? 'active' : ''}
              onClick={() => handleCardClick(index)}
            >
              <AboutUsCard
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
                isActive={index === activeCardIndex}
                onClick={() => handleCardClick(index)}
                isMobile={isMobile}
              />
            </div>
          ))}
        </StyledSlider>
      </SliderContainer>
    </StyledSection>
  );
}
