'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import { getDictionary } from '@/get-dictionary';
import Image from 'next/image';
import { Desktop, Mobile } from './ui/Responsive';

const StyledContainer = styled.div`
  max-width: 1290px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-inline: 16px;
  @media (max-width: 1080px) {
    padding-inline: 16px;
    margin-top: 30px;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  background-color: rgba(217, 217, 217, 1);
  height: 560px;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  @media (max-width: 1080px) {
    height: 342px;
  }
`;

const StyledProjectDetails = styled.div`
  width: 586px;
  height: 215px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  @media (max-width: 1080px) {
    height: 165px;
    width: 100%;
    bottom: 0;
    left: 0;
    border: 0 solid rgba(227, 227, 227, 1);
    border-width: 0 1px 1px 1px;
    box-shadow: 0px -6px 15px 0px rgba(0, 0, 0, 0.15);
  }
`;

const StyledCardTitle = styled.div`
  background-color: rgba(226, 109, 90, 1);
  padding: 9px 0 8px 0;
  text-align: center;
  color: #fff;
  border-radius: 20px 20px 0 0;
  @media (max-width: 1080px) {
    padding: 10px 0;
  }
`;

const StyledTextImages = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  order: 1;
  @media (max-width: 1080px) {
    gap: 10px;
    order: 1;
  }
`;

const StyledSmallImages = styled.div`
  width: 410px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  order: 2;
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    order: 2;
    margin-bottom: 30px;
    gap: 20px;
  }
`;

const StyledBio = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    order: 3;
  }
`;

const StyledSmallImage1 = styled.div`
  height: 416px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  @media (max-width: 1080px) {
    height: 150px;
  }
`;

const StyledSmallImage2 = styled.div`
  height: 191px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  @media (max-width: 1080px) {
    height: 150px;
  }
`;

const StyledCardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 12px;
  align-items: center;
  @media (max-width: 1080px) {
    margin-top: 0;
    gap: 10px;
  }
`;

const StyledName = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  > *:first-child {
    font-weight: 700;
  }
  @media (max-width: 1080px) {
    gap: 5px;
  }
`;

const StyledDate = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  > *:first-child {
    font-weight: 700;
  }
  @media (max-width: 1080px) {
    gap: 5px;
  }
`;

const StyledAuthor = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  > *:first-child {
    font-weight: 700;
  }
  @media (max-width: 1080px) {
    gap: 5px;
  }
`;

const StyledTags = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  > *:first-child {
    font-weight: 700;
  }
  @media (max-width: 1080px) {
    gap: 5px;
  }
`;

const StyledList = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: center;
  font-weight: 700;
`;

const BoldText = styled(Typography)`
  font-weight: 700;
`;
const StyledLi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
  @media (max-width: 1080px) {
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5px;
  @media (max-width: 1080px) {
    flex-direction: row;
    align-self: center;
    gap: 20px;
    margin-top: 10px;
  }
`;

const StyledCardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 33px 30px 40px 30px;
  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 10px 5px;
  }
`;

const GreyText = styled.div`
  color: #4d4d4d;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  @media (max-width: 1080px) {
    margin-top: 0;
  }
`;

const StyledButton = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
  align-items: center;
  font-weight: 700;
`;

const MobileContentWrapper = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`;

const MobileTextSection = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function ProjectDetails({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['projectDetails'];
}) {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledProjectDetails>
          <StyledCardTitle>
            <Typography variant="mBodytext">{dictionary.card.title}</Typography>
          </StyledCardTitle>
          <StyledCardInfos>
            <StyledCardDetails>
              <StyledName>
                <Desktop>
                  <Typography variant="mBodytext">{dictionary.card.name}</Typography>
                </Desktop>
                <Mobile>
                  <BoldText variant="sBodytext">{dictionary.card.name}</BoldText>
                </Mobile>
                <GreyText>
                  <Typography variant="xxsBodytext">{dictionary.card.nameDetail}</Typography>
                </GreyText>
              </StyledName>
              <StyledDate>
                <Desktop>
                  <Typography variant="mBodytext">{dictionary.card.date}</Typography>
                </Desktop>
                <Mobile>
                  <BoldText variant="sBodytext">{dictionary.card.date}</BoldText>
                </Mobile>
                <GreyText>
                  <Typography variant="xxsBodytext">{dictionary.card.dateDetail}</Typography>
                </GreyText>
              </StyledDate>
              <StyledAuthor>
                <Desktop>
                  <Typography variant="mBodytext">{dictionary.card.author}</Typography>
                </Desktop>
                <Mobile>
                  <BoldText variant="sBodytext">{dictionary.card.author}</BoldText>
                </Mobile>
                <GreyText>
                  <Typography variant="xxsBodytext">{dictionary.card.authorDetail}</Typography>
                </GreyText>
              </StyledAuthor>
              <StyledTags>
                <Desktop>
                  <Typography variant="mBodytext">{dictionary.card.tags}</Typography>
                </Desktop>
                <Mobile>
                  <BoldText variant="sBodytext">{dictionary.card.tags}</BoldText>
                </Mobile>
                <GreyText>
                  <Typography variant="xxsBodytext">{dictionary.card.tagsDetail}</Typography>
                </GreyText>
              </StyledTags>
            </StyledCardDetails>

            <StyledSocialLinks>
              <Image
                src="/assets/images/projectDetails/insta.svg"
                alt="instagram"
                width={30}
                height={30}
              />
              <Image
                src="/assets/images/projectDetails/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
              <Image
                src="/assets/images/projectDetails/fb.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </StyledSocialLinks>
          </StyledCardInfos>
        </StyledProjectDetails>
      </StyledImageContainer>

      <Desktop>
        <StyledTextImages>
          <StyledTexts>
            <Typography variant="h2">{dictionary.title}</Typography>
            <GreyText>
              <Typography variant="sBodytext">{dictionary.description}</Typography>
            </GreyText>
            <StyledLi>
              <StyledList>
                <Image
                  src="/assets/images/projectDetails/checkmark.svg"
                  alt="checkmark"
                  width={20}
                  height={20}
                />
                <Typography variant="mBodytext">{dictionary.listOne}</Typography>
              </StyledList>
              <StyledList>
                <Image
                  src="/assets/images/projectDetails/checkmark.svg"
                  alt="checkmark"
                  width={20}
                  height={20}
                />
                <Typography variant="mBodytext">{dictionary.listTwo}</Typography>
              </StyledList>
              <StyledList>
                <Image
                  src="/assets/images/projectDetails/checkmark.svg"
                  alt="checkmark"
                  width={20}
                  height={20}
                />
                <Typography variant="mBodytext">{dictionary.listThree}</Typography>
              </StyledList>
            </StyledLi>
            <StyledBio>
              <Typography variant="lBodytext">{dictionary.bioTitle}</Typography>
              <GreyText>
                <Typography variant="sBodytext">{dictionary.bioDescription}</Typography>
              </GreyText>
            </StyledBio>
          </StyledTexts>
          <StyledSmallImages>
            <StyledSmallImage1 />
            <StyledSmallImage2 />
          </StyledSmallImages>
        </StyledTextImages>
      </Desktop>

      <Mobile>
        <MobileContentWrapper>
          <MobileTextSection>
            <Typography variant="h2">{dictionary.title}</Typography>
            <GreyText>
              <Typography variant="sBodytext">{dictionary.description}</Typography>
            </GreyText>
            <StyledLi>
              <StyledList>
                <Image
                  src="/assets/images/projectDetails/checkmark.svg"
                  alt="checkmark"
                  width={20}
                  height={20}
                />
                <Typography variant="mBodytext">{dictionary.listOne}</Typography>
              </StyledList>
              <StyledList>
                <Image
                  src="/assets/images/projectDetails/checkmark.svg"
                  alt="checkmark"
                  width={20}
                  height={20}
                />
                <Typography variant="mBodytext">{dictionary.listTwo}</Typography>
              </StyledList>
              <StyledList>
                <Image
                  src="/assets/images/projectDetails/checkmark.svg"
                  alt="checkmark"
                  width={20}
                  height={20}
                />
                <Typography variant="mBodytext">{dictionary.listThree}</Typography>
              </StyledList>
            </StyledLi>
          </MobileTextSection>

          <StyledSmallImages>
            <StyledSmallImage1 />
            <StyledSmallImage2 />
          </StyledSmallImages>

          <StyledBio>
            <Typography variant="lBodytext">{dictionary.bioTitle}</Typography>
            <GreyText>
              <Typography variant="sBodytext">{dictionary.bioDescription}</Typography>
            </GreyText>
          </StyledBio>
        </MobileContentWrapper>
      </Mobile>

      <StyledButtons>
        <StyledButton>
          <Image src="/assets/images/projectDetails/prev.svg" alt="button" width={30} height={30} />
          <Typography variant="mBodytext">{dictionary.previoous}</Typography>
        </StyledButton>
        <StyledButton>
          <Typography variant="mBodytext">{dictionary.next}</Typography>
          <Image src="/assets/images/projectDetails/next.svg" alt="button" width={30} height={30} />
        </StyledButton>
      </StyledButtons>
    </StyledContainer>
  );
}
