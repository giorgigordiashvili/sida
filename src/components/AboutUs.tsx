'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';
import DonateButton from '@/components/DonateButton';
import Typography from './ui/Typography';
import Help from './Help';

const Container = styled.div`
  padding: 73px 0 189px 0;
  color: rgba(52, 52, 52, 1);
  max-width: 1290px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
`;

const StyledBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 571px;
  gap: 30px;
`;

const MainContainer = styled.div`
  background-color: rgba(249, 249, 247, 1);
`;

const StyledImageBox = styled.div`
  position: relative;
  width: 571px;
  height: 571px;
  background: transparent;
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

  return (
    <MainContainer>
      <Container>
        <StyledImageBox>
          <Image
            src="/assets/images/hero/frame.png"
            width={700}
            height={617}
            alt="circle"
            objectFit="cover"
          />
        </StyledImageBox>
        <StyledBioContainer>
          <StyledTitle>
            <Typography variant="sBodytext">{dictionary.title}</Typography>
            <Typography variant="h2">{dictionary.description}</Typography>
          </StyledTitle>
          <Typography variant="sBodytext">{dictionary.bio}</Typography>
          <StyledList>
            {listItems.map((item, index) => (
              <ListItem key={index}>
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
          </StyledList>

          <StyledHelp>
            <DonateButton text1={dictionary.donateNow.text1} text2={dictionary.donateNow.text2} />
            <Help dictionary={dictionary}></Help>
          </StyledHelp>
        </StyledBioContainer>
      </Container>
    </MainContainer>
  );
}
