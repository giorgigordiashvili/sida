'use client';

import styled from 'styled-components';
import Typography from '@/components/ui/Typography';
import Image from 'next/image';

const SectionWrapper = styled.section`
  background-image: url('/assets/images/Who We are.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff3f0;
  padding: 120px 0;
  @media (max-width: 1080px) {
    padding: 30px 16px;
    background-image: none;
    background-color: #fff3f0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  max-width: 630px;
  width: 100%;
`;

const InfoBox = styled.div`
  margin-top: 30px;
  text-align: left;
  @media (max-width: 1080px) {
    margin-top: 20px;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
`;

const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 5px;
  background-color: #dddddd;
  position: relative;
  overflow: hidden;
  @media (max-width: 1080px) {
    height: 4px;
  }
`;

const Bar = styled.div<{ width: string }>`
  background-color: #e26d5a;
  height: 100%;
  width: ${(props) => props.width};
  transition: width 0.3s ease-in-out;
`;

const SubTitle = styled.p`
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: #e26d5a;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Total = styled.p`
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: #4d4d4d;

  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const Amount = styled.p`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #2bb673;
  margin-left: 15px;

  @media (max-width: 1080px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const ResponsiveText = styled.div`
  @media (max-width: 1080px) {
    text-align: center;
    h2 {
      font-size: 28px !important;
      line-height: 40px !important;
      margin-bottom: 20px !important;
    }

    p {
      font-size: 14px !important;
      line-height: 24px !important;
    }
  }
`;

export default function SupportSection({
  dictionary,
}: {
  dictionary: {
    sectionTitle: string;
    headingLine1: string;
    headingLine2: string;
    description1: string;
    description2: string;
    totalFundLabel: string;
    totalFundValue: string;
    totalCasesLabel: string;
    totalCasesValue: string;
  };
}) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Container>
          <SubTitle>{dictionary.sectionTitle}</SubTitle>
          <ResponsiveText>
            <Typography variant="h2">
              {dictionary.headingLine1} <br />
              {dictionary.headingLine2}
            </Typography>
            <Typography variant="sBodytext" style={{ color: '#4D4D4D', marginTop: '30px' }}>
              {dictionary.description1} <br />
              {dictionary.description2}
            </Typography>
          </ResponsiveText>

          <InfoBox>
            <InfoItem>
              <InfoHeader>
                <Total>{dictionary.totalFundLabel}</Total>
                <Amount>{dictionary.totalFundValue}</Amount>
              </InfoHeader>
              <Divider>
                <Bar width="90%" />
              </Divider>
            </InfoItem>

            <InfoItem>
              <InfoHeader>
                <Total>{dictionary.totalCasesLabel}</Total>
                <Amount>{dictionary.totalCasesValue}</Amount>
              </InfoHeader>
              <Divider>
                <Bar width="80%" />
              </Divider>
            </InfoItem>
          </InfoBox>
        </Container>

        <ImageContainer>
          <Image src="/assets/images/picim.png" alt="Illustration" width={600} height={560} />
        </ImageContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
}
