'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';
import DonateButton from '@/components/DonateButton';
import Typography from './ui/Typography';
import Help from './Help';
import { useState, useEffect } from 'react';

const Container = styled.div`
  padding: 73px 0 189px 0;
  color: rgba(52, 52, 52, 1);
  max-width: 1290px;
  margin: auto;
  display: flex;
  gap: 35px;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

const StyledBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 571px;
  gap: 30px;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const MainContainer = styled.div`
  background-color: rgba(249, 249, 247, 1);
`;

const StyledImageBox = styled.div`
  position: relative;
  width: 571px;
  height: 571px;
  background: transparent;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: rgba(77, 77, 77, 1);
`;

const CheckmarkContainer = styled.div`
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 3px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const ListItemText = styled.div`
  flex: 1;
  font-size: 18px;
  line-height: 30px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1080px) {
    :nth-child(1) {
      display: none;
    }

    :nth-child(2) {
      font-size: 28px;
      text-align: center;
      vertical-align: middle;
      text-transform: capitalize;
    }
  }
`;

const StyledBioText = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledDonateButton = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledSwitcher = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: flex;
    width: 270px;
    height: 44px;
    border-radius: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: rgba(249, 249, 247, 1);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

interface SwitcherItemProps {
  selected: boolean;
}

const SwitcherItem = styled.div<SwitcherItemProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.selected ? 'rgba(31, 31, 31, 1)' : 'transparent')};

  img {
    filter: ${(props) => (props.selected ? 'brightness(0) invert(1)' : 'none')};
  }
`;

const StyledHelp = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 40px;
`;

export default function AboutUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['aboutUs'];
}) {
  const listItems = [dictionary.listOne, dictionary.listTwo, dictionary.listThree];
  const [selectedItem, setSelectedItem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200); // Default for SSR

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <MainContainer>
      <Container>
        <StyledImageBox>
          <Image
            src="/assets/images/hero/frame.png"
            width={700}
            height={617}
            alt="circle"
            style={{ objectFit: 'cover' }}
          />
        </StyledImageBox>
        <StyledBioContainer>
          <StyledTitle>
            <Typography variant="sBodytext">{dictionary.title}</Typography>
            <Typography variant="h2">{dictionary.description}</Typography>
          </StyledTitle>
          <StyledBioText>
            <Typography variant="sBodytext">{dictionary.bio}</Typography>
          </StyledBioText>
          <StyledList>
            <StyledSwitcher>
              {[0, 1, 2].map((index) => (
                <SwitcherItem
                  key={index}
                  selected={selectedItem === index}
                  onClick={() => handleItemClick(index)}
                >
                  <Image
                    src="/assets/images/hero/checkmarkk.svg"
                    alt="Checkmark"
                    width={29}
                    height={29}
                  />
                </SwitcherItem>
              ))}
            </StyledSwitcher>

            {listItems.map((item, index) => (
              <ListItem key={index} style={{ display: windowWidth > 1080 ? 'flex' : 'none' }}>
                <CheckmarkContainer>
                  <Image
                    src="/assets/images/hero/checkmarkk.svg"
                    alt="Checkmark"
                    width={16}
                    height={16}
                  />
                </CheckmarkContainer>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}

            {windowWidth <= 1080 && (
              <ListItem>
                <ListItemText>{listItems[selectedItem]}</ListItemText>
              </ListItem>
            )}
          </StyledList>

          <StyledHelp>
            <StyledDonateButton>
              <DonateButton text1={dictionary.donateNow.text1} text2={dictionary.donateNow.text2} />
            </StyledDonateButton>
            <Help dictionary={dictionary} />
          </StyledHelp>
        </StyledBioContainer>
      </Container>
    </MainContainer>
  );
}
