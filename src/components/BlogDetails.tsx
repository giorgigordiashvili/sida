'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import SearchBar from '@/components/SearchBar';
import Typography from '@/components/ui/Typography';
import Image from 'next/image';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1290px;
  margin: auto;
  margin-top: 120px;
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1080px) {
    gap: 10px;
  }
`;
const StyledImageWrapper = styled.div`
  width: 850px;
  height: 538px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 20px;
  @media (max-width: 1080px) {
    width: 100%;
    height: 180px;
  }
`;

const StyledTags = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  & > * {
    color: rgba(77, 77, 77, 1);
  }
`;

const StyledBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > *:last-child {
    color: rgba(77, 77, 77, 1);
  }
`;

const StyledCommentWrapper = styled.div`
  padding: 40px;
  background-color: rgba(242, 240, 236, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const StyledComment = styled.div`
  color: rgba(77, 77, 77, 1);
`;

const StyledTagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
`;

const StyledKeywords = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyleTags = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StyledTitle = styled.div`
  color: rgba(77, 77, 77, 1);
  font-weight: 700;
`;

const StyledWords = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledWord = styled.div`
  background-color: rgba(242, 240, 236, 1);
  padding: 10px;
  border-radius: 10px;
  color: rgba(77, 77, 77, 1);
`;
const StyledComments = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledAvatarWrapper = styled.div`
  background-color: rgba(217, 217, 217, 1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StyledInfos = styled.div`
  max-width: 740px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledAuthor = styled.div`
  color: rgba(77, 77, 77, 1);
  font-weight: 700;
`;
export default function BlogDetails({
  searchBar,
  blogDetails,
}: {
  searchBar: Awaited<ReturnType<typeof getDictionary>>['searchBar'];
  blogDetails: Awaited<ReturnType<typeof getDictionary>>['blogDetails'];
}) {
  return (
    <StyledContainer>
      <StyledLeftContent>
        <StyledBlogCard>
          <StyledImageWrapper></StyledImageWrapper>
          <StyledTags>
            <StyledTag>
              <Image src="/assets/images/blog/user.svg" alt="user" width={16} height={16} />
              <Typography variant="sBodytext">{blogDetails.tags.admin}</Typography>
            </StyledTag>
            <StyledTag>
              <Image src="/assets/images/blog/category.svg" alt="category" width={16} height={16} />
              <Typography variant="sBodytext">{blogDetails.tags.category}</Typography>
            </StyledTag>
            <StyledTag>
              <Image src="/assets/images/blog/comments.svg" alt="comments" width={16} height={16} />
              <Typography variant="sBodytext">{blogDetails.tags.comments}</Typography>
            </StyledTag>
          </StyledTags>
          <StyledBio>
            <Typography variant="h2">{blogDetails.title}</Typography>
            <Typography variant="sBodytext">{blogDetails.description}</Typography>
          </StyledBio>
        </StyledBlogCard>
        <StyledCommentWrapper>
          <StyledComment>
            <Typography variant="sBodytext">{blogDetails.comment.comment}</Typography>
          </StyledComment>
        </StyledCommentWrapper>
        <StyledBio>
          <Typography variant="sBodytext">{blogDetails.description}</Typography>
        </StyledBio>
        <StyledTagsContainer>
          <StyledKeywords>
            <StyledTitle>{blogDetails.keywords.keyword}</StyledTitle>
            <StyledWords>
              <StyledWord>{blogDetails.keywords.word1}</StyledWord>
              <StyledWord>{blogDetails.keywords.word2}</StyledWord>
              <StyledWord>{blogDetails.keywords.word3}</StyledWord>
            </StyledWords>
          </StyledKeywords>
          <StyleTags>
            <StyledTitle>{blogDetails.keywordTags.tag}</StyledTitle>
            <StyledWords>
              <StyledWord>{blogDetails.keywordTags.tag1}</StyledWord>
              <StyledWord>{blogDetails.keywordTags.tag2}</StyledWord>
            </StyledWords>
          </StyleTags>
        </StyledTagsContainer>
        <StyledComments>
          <StyledAvatarWrapper></StyledAvatarWrapper>
          <StyledInfos>
            <StyledAuthor>
              <Typography variant="sBodytext">{blogDetails.commentDetails.author}</Typography>
            </StyledAuthor>
            <StyledComment>
              <Typography variant="sBodytext">{blogDetails.comment.comment}</Typography>
            </StyledComment>
          </StyledInfos>
        </StyledComments>
      </StyledLeftContent>
      <SearchBar dictionary={searchBar} />
    </StyledContainer>
  );
}
