'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';
import { getDictionary } from '@/get-dictionary';

const StyledContainer = styled.div`
  max-width: 1290px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  background-color: rgba(217, 217, 217, 1);
  height: 560px;
  border-radius: 20px;
  padding: 20px;
  position: relative;
`;

const StyledProjectDetails = styled.div`
  width: 586px;
  height: 215px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const StyledCardTitle = styled.div`
  background-color: rgba(226, 109, 90, 1);
  padding: 9px 0 8px 0;
  text-align: center;
  color: #fff;
  border-radius: 20px 20px 0 0;
`;

const StyledTextImages = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 850px 410px;
  width: 100%;
`;

const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledSmallImages = styled.div`
  width: 410px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledSmallImage1 = styled.div`
  height: 416px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
`;

const StyledSmallImage2 = styled.div`
  height: 191px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
`;

const StyledCardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 33px 30px 30px 30px;
`;

const StyledName = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledDate = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledAuthor = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledTags = styled.div`
  display: flex;
  gap: 10px;
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
          <StyledCardDetails>
            <StyledName>
              <Typography variant="mBodytext">{dictionary.card.name}</Typography>
              <Typography variant="sBodytext">{dictionary.card.nameDetail}</Typography>
            </StyledName>
            <StyledDate>
              <Typography variant="mBodytext">{dictionary.card.date}</Typography>
              <Typography variant="sBodytext">{dictionary.card.dateDetail}</Typography>
            </StyledDate>
            <StyledAuthor>
              <Typography variant="mBodytext">{dictionary.card.author}</Typography>
              <Typography variant="sBodytext">{dictionary.card.authorDetail}</Typography>
            </StyledAuthor>
            <StyledTags>
              <Typography variant="mBodytext">{dictionary.card.tags}</Typography>
              <Typography variant="sBodytext">{dictionary.card.tagsDetail}</Typography>
            </StyledTags>
          </StyledCardDetails>
        </StyledProjectDetails>
      </StyledImageContainer>
      <StyledTextImages>
        <StyledTexts>
          <Typography variant="h2">{dictionary.title}</Typography>
          <Typography variant="sBodytext">{dictionary.description}</Typography>
          <Typography variant="mBodytext">{dictionary.listOne}</Typography>
          <Typography variant="mBodytext">{dictionary.listTwo}</Typography>
          <Typography variant="mBodytext">{dictionary.listThree}</Typography>
          <Typography variant="lBodytext">{dictionary.bioTitle}</Typography>
          <Typography variant="sBodytext">{dictionary.bioDescription}</Typography>
        </StyledTexts>
        <StyledSmallImages>
          <StyledSmallImage1 />
          <StyledSmallImage2 />
        </StyledSmallImages>
      </StyledTextImages>
    </StyledContainer>
  );
}
