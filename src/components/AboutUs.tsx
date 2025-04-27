'use client';
import { getDictionary } from '@/get-dictionary';
import styled from 'styled-components';
import Image from 'next/image';
import DonateButton from '@/components/DonateButton';

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

const StyledText = styled.h2`
  color: rgba(52, 52, 52, 1);
  font-family: Josefin Sans;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 0%;
`;

const StyledTitle = styled.div`
  text-align: left;
  text-transform: uppercase;
  color: rgba(226, 109, 90, 1);
  font-family: DM Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1.6px;
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

const StyledHelp = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 40px;
`;

const StyledBio = styled.div`
  color: rgba(77, 77, 77, 1);
  font-family: DM Sans;
  font-size: 16px;
  line-height: 26px;
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
  font-family: DM Sans;
  font-size: 16px;
  line-height: 26px;
`;

const DonateContact = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function AboutUs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['aboutUs'];
}) {
  // Create an array of list items from the dictionary
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
          <StyledTitle>{dictionary.title}</StyledTitle>
          <StyledText>{dictionary.description}</StyledText>
          <StyledBio>{dictionary.bio}</StyledBio>

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
            <DonateButton />
            <DonateContact>
              <Image src="/assets/images/hero/phone.svg" alt="Phone" width={46} height={46} />
              <StyledContact>
                <span>{dictionary.help}</span>
                <span>{dictionary.number}</span>
              </StyledContact>
            </DonateContact>
          </StyledHelp>
        </StyledBioContainer>
      </Container>
    </MainContainer>
  );
}
