'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import AboutUsCard from './AboutUsCard';
import DiscoverBtn from './DiscoverBtn';

const StyledSection = styled.section`
  width: 100%;
  padding: 0 0 120px;
  overflow: hidden;
  @media (max-width: 1080px) {
    padding: 0;
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
    :nth-child(1) {
      display: none;
    }
    padding-top: 30px;
    margin-bottom: 0;
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
  margin: 0 auto;
  scroll-behavior: smooth;
  @media (max-width: 1080px) {
    padding: 30px 0;
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
    & > *.active {
      transform: scale(1);
    }
  }
  @media (min-width: 1081px) {
    & > *:not(.active) {
      transform: scale(0.717);
      width: 416px;
    }
    & > *.active {
      transform: scale(1);
      width: 580px;
    }
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1080px) {
    display: none;
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
    btn: string;
  };
}

export default function TalkingAboutUs({ dictionary }: TalkingAboutUsProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const lastScrollLeft = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = (dictionary?.testimonials || []).map((item, i) => ({ ...item, id: i + 1 }));
  const sets = ['prev3', 'prev2', 'prev1', 'orig', 'next1', 'next2', 'next3'];
  const allTestimonials = sets.flatMap((set) =>
    testimonials.map((item) => ({ ...item, key: `${set}-${item.id}` }))
  );
  const len = testimonials.length;
  const midStart = len * 3;

  useEffect(() => {
    setActiveIndex(midStart);
    const checkMobile = () => setIsMobile(window.innerWidth <= 1080);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [midStart]);

  const cardW = isMobile ? 224 : 580;
  const inactiveW = isMobile ? 224 : 416;

  const getScrollPos = useCallback(
    (idx: number) => {
      const slider = sliderRef.current;
      if (!slider) return 0;
      const w = slider.offsetWidth || 2000;
      return inactiveW * idx + cardW / 2 - w / 2;
    },
    [inactiveW, cardW]
  );

  const handleClick = (idx: number) => {
    if (isMobile) return;
    const modIdx = idx % len;
    const activeMod = activeIndex % len;
    const forward = (modIdx - activeMod + len) % len;
    const backward = (activeMod - modIdx + len) % len;
    const nextIdx = forward <= backward ? activeIndex + forward : activeIndex - backward;
    setActiveIndex(nextIdx);
    const slider = sliderRef.current;
    if (slider)
      slider.scrollTo({
        left: getScrollPos(nextIdx),
        behavior: isInitialMount.current ? 'auto' : 'smooth',
      });
  };

  const handleNav = useCallback(
    (dir: number) => {
      if (isMobile) return;
      const nextIdx = activeIndex + dir;
      setActiveIndex(nextIdx);
      const slider = sliderRef.current;
      if (slider) slider.scrollTo({ left: getScrollPos(nextIdx), behavior: 'smooth' });
    },
    [isMobile, activeIndex, getScrollPos]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (isInitialMount.current) {
      slider.scrollTo({ left: getScrollPos(activeIndex), behavior: 'auto' });
      setTimeout(() => {
        isInitialMount.current = false;
      }, 500);
    }

    const totalSets = 7;
    const totalCards = len * totalSets;
    const dist = Math.abs(Math.floor(activeIndex / len) - Math.floor(midStart / len));
    if (activeIndex >= totalCards - 1 || activeIndex <= 0 || dist >= 2) {
      const newIdx = midStart + (activeIndex % len);
      setTimeout(() => {
        setActiveIndex(newIdx);
        slider.scrollTo({ left: getScrollPos(newIdx), behavior: 'auto' });
      }, 50);
    }
  }, [activeIndex, midStart, len, getScrollPos]);

  useEffect(() => {
    if (isMobile) return;
    const keyDown = (e: { key: string }) => {
      if (e.key === 'ArrowLeft') handleNav(-1);
      if (e.key === 'ArrowRight') handleNav(1);
    };
    window.addEventListener('keydown', keyDown);
    return () => window.removeEventListener('keydown', keyDown);
  }, [isMobile, handleNav]);

  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;
    const slider = sliderRef.current;
    let timeout: string | number | NodeJS.Timeout | undefined;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const rect = slider.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const scrollLeft = slider.scrollLeft;
        const w = cardW + 20;
        const isRight = scrollLeft > lastScrollLeft.current;
        lastScrollLeft.current = scrollLeft;

        const end = midStart + len - 1;
        const startBound = w * len;
        const endBound = slider.scrollWidth - w * len * 2;

        let closest: number | null = null;
        let minDist = Infinity;
        Array.from(slider.children).forEach((child, i) => {
          const childRect = (child as HTMLElement).getBoundingClientRect();
          const childX = childRect.left + childRect.width / 2;
          const dist = Math.abs(centerX - childX);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });

        if (closest !== null) {
          if (scrollLeft < startBound && closest < midStart && isRight) {
            const newIdx = closest + len * 3;
            slider.scrollTo({ left: newIdx * w - (rect.width - cardW) / 2, behavior: 'auto' });
            setActiveIndex(newIdx);
          } else if (scrollLeft > endBound && closest > end && !isRight) {
            const newIdx = closest - len * 3;
            slider.scrollTo({ left: newIdx * w - (rect.width - cardW) / 2, behavior: 'auto' });
            setActiveIndex(newIdx);
          } else if (closest !== activeIndex) {
            setActiveIndex(closest);
          }
        }
      }, 30);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => {
      slider.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [isMobile, activeIndex, cardW, len, midStart]);

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      const slider = sliderRef.current;
      const w = cardW + 20;
      slider.scrollTo({
        left: activeIndex * w - (slider.getBoundingClientRect().width - cardW) / 2,
        behavior: isInitialMount.current ? 'auto' : 'smooth',
      });
    }
  }, [isMobile, activeIndex, cardW]);

  if (!testimonials.length) return null;

  return (
    <StyledSection>
      <StyledTitles>
        <Typography variant="sBodytext">{dictionary?.title}</Typography>
        <Typography variant="h2">{dictionary?.text}</Typography>
      </StyledTitles>
      <SliderContainer>
        <StyledSlider ref={sliderRef}>
          {allTestimonials.map((t, i) => (
            <div
              key={t.key}
              className={i === activeIndex ? 'active' : ''}
              onClick={() => handleClick(i)}
            >
              <AboutUsCard
                text={t.text}
                author={t.author}
                role={t.role}
                avatar={t.avatar}
                isActive={i === activeIndex}
                onClick={() => handleClick(i)}
                isMobile={isMobile}
              />
            </div>
          ))}
        </StyledSlider>
      </SliderContainer>
      <StyledButton>
        <DiscoverBtn dictionary={dictionary?.btn ?? ''} />
      </StyledButton>
    </StyledSection>
  );
}
