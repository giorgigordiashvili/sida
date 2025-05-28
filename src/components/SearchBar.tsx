'use client';

import styled from 'styled-components';
import Typography from './ui/Typography';
import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 410px;
  margin-left: auto;
  @media (max-width: 1080px) {
    width: 100%;
    margin-left: 0;
  }
`;

const StyledSearchBar = styled.div`
  display: flex;
  width: 410px;
  margin-left: auto;
  flex-direction: column;
  background-color: rgba(242, 240, 236, 1);
  padding: 30px;
  border-radius: 20px;
  gap: 30px;
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 1080px) {
    width: 100%;
    margin: auto;
    margin-left: 0;
    border-radius: 0;
    height: 162px;
    padding: 30px 16px;
    gap: 15px;
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 58px;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 16px;
  border: none;
  @media (max-width: 1080px) {
    height: 48px;
    padding: 13px 20px;
  }
  &:focus {
    outline: none;
  }
`;

const StyledPlaceHolder = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
const StyledIcon = styled(Image)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const StyledTitle = styled.div`
  display: flex;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(227, 227, 227, 1);
  @media (max-width: 1080px) {
    padding-bottom: 15px;
  }
`;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 30px 26px 30px;
  background-color: rgba(242, 240, 236, 1);
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.05);
  margin-left: auto;
  border-radius: 20px;
  width: 410px;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 30px 26px 30px;
  background-color: rgba(242, 240, 236, 1);
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.05);
  margin-left: auto;
  border-radius: 20px;
  width: 410px;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledTag = styled.div`
  background-color: #fff;
  color: rgba(77, 77, 77, 1);
  width: fit-content;
  height: 44px;
  border-radius: 20px;
  padding: 5px 10px;
`;

const StyledTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 16px;
`;
const StyledPopularPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 30px 26px 30px;
  background-color: rgba(242, 240, 236, 1);
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.05);
  margin-left: auto;
  border-radius: 20px;
  width: 410px;
  @media (max-width: 1080px) {
    display: none;
  }
`;
const StyledPostCard = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const StyledPostDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImageWrapper = styled.div`
  width: 80px;
  height: 85px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
`;
const StyledDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default function SearchBar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['searchBar'];
}) {
  return (
    <StyledContainer>
      <StyledSearchBar>
        <StyledTitle>
          <Typography variant="lBodytext">{dictionary.title}</Typography>
        </StyledTitle>
        <StyledInputWrapper>
          <StyledInput type="text" />
          <StyledPlaceHolder>{dictionary.placeholder}</StyledPlaceHolder>
          <StyledIcon
            src="/assets/images/searchBar/searchIcon.svg"
            alt="Search Icon"
            width={25}
            height={25}
          />
        </StyledInputWrapper>
      </StyledSearchBar>
      <StyledCategory>
        <StyledTitle>
          <Typography variant="lBodytext">{dictionary.filter.category}</Typography>
        </StyledTitle>
        <Typography variant="sBodytext">{dictionary.filter.donation}</Typography>
        <Typography variant="sBodytext">{dictionary.filter.fundraiser}</Typography>
        <Typography variant="sBodytext">{dictionary.filter.initiative}</Typography>
        <Typography variant="sBodytext">{dictionary.filter.support}</Typography>
        <Typography variant="sBodytext">{dictionary.filter.volunteer}</Typography>
      </StyledCategory>
      <StyledPopularPost>
        <StyledTitle>
          <Typography variant="lBodytext">{dictionary.posts.title}</Typography>
        </StyledTitle>
        <StyledPostCard>
          <StyledImageWrapper></StyledImageWrapper>
          <StyledPostDetails>
            <StyledDate>
              <Image
                src="/assets/images/searchBar/calendar.svg"
                alt="Calendar Icon"
                width={16}
                height={16}
              />
              <Typography variant="sBodytext">{dictionary.posts['post1.date']}</Typography>
            </StyledDate>
            <Typography variant="lBodytext">{dictionary.posts.post1}</Typography>
          </StyledPostDetails>
        </StyledPostCard>
        <StyledPostCard>
          <StyledImageWrapper></StyledImageWrapper>
          <StyledPostDetails>
            <StyledDate>
              <Image
                src="/assets/images/searchBar/calendar.svg"
                alt="Calendar Icon"
                width={16}
                height={16}
              />
              <Typography variant="sBodytext">{dictionary.posts['post1.date']}</Typography>
            </StyledDate>
            <Typography variant="lBodytext">{dictionary.posts.post1}</Typography>
          </StyledPostDetails>
        </StyledPostCard>
        <StyledPostCard>
          <StyledImageWrapper></StyledImageWrapper>
          <StyledPostDetails>
            <StyledDate>
              <Image
                src="/assets/images/searchBar/calendar.svg"
                alt="Calendar Icon"
                width={16}
                height={16}
              />
              <Typography variant="sBodytext">{dictionary.posts['post1.date']}</Typography>
            </StyledDate>
            <Typography variant="lBodytext">{dictionary.posts.post1}</Typography>
          </StyledPostDetails>
        </StyledPostCard>
      </StyledPopularPost>
      <StyledTags>
        <StyledTitle>
          <Typography variant="lBodytext">{dictionary.tags.title}</Typography>
        </StyledTitle>
        <StyledTagsContainer>
          <StyledTag>
            <Typography variant="sBodytext">{dictionary.tags.tag1}</Typography>
          </StyledTag>
          <StyledTag>
            <Typography variant="sBodytext">{dictionary.tags.tag2}</Typography>
          </StyledTag>
          <StyledTag>
            <Typography variant="sBodytext">{dictionary.tags.tag3}</Typography>
          </StyledTag>
          <StyledTag>
            <Typography variant="sBodytext">{dictionary.tags.tag4}</Typography>
          </StyledTag>
          <StyledTag>
            <Typography variant="sBodytext">{dictionary.tags.tag5}</Typography>
          </StyledTag>
          <StyledTag>
            <Typography variant="sBodytext">{dictionary.tags.tag6}</Typography>
          </StyledTag>
        </StyledTagsContainer>
      </StyledTags>
    </StyledContainer>
  );
}
