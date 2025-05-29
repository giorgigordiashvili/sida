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
export default function BlogDetails({
  searchBar,
  blogDetails,
}: {
  searchBar: Awaited<ReturnType<typeof getDictionary>>['searchBar'];
  blogDetails: Awaited<ReturnType<typeof getDictionary>>['blogDetails'];
}) {
  return (
    <StyledContainer>
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
        <StyledCommentWrapper>
          <StyledComment>
            <Typography variant="sBodytext">{blogDetails.comment.comment}</Typography>
          </StyledComment>
        </StyledCommentWrapper>
        <StyledBio>
          <Typography variant="sBodytext">{blogDetails.description}</Typography>
        </StyledBio>
      </StyledBlogCard>
      <SearchBar dictionary={searchBar} />
    </StyledContainer>
  );
}
