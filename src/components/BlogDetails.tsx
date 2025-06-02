'use client';
import styled from 'styled-components';
import { getDictionary } from '@/get-dictionary';
import SearchBar from '@/components/SearchBar';
import Typography from '@/components/ui/Typography';
import Image from 'next/image';
import InputWithIcon from '@/components/Input/InputWithIcon';
import TextAreaWithIcon from './Input/TextAreaWithIcon';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(850px, 2fr) minmax(410px, 1fr);
  max-width: 1290px;
  margin: auto;
  margin-top: 120px;
  gap: 30px;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    margin-top: 0;
    gap: 20px;
  }
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1080px) {
    order: 1;
  }
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
& > :first-child {
    font-weight: 700;'}`;

const StyledReply = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(226, 109, 90, 1);
  & > *:last-child {
    font-weight: 700;
  }
`;

const StyledCreateComm = styled.div`
  padding: 60px 40px;
  background-color: rgba(242, 240, 236, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledTitleComm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > *:first-child {
    font-weight: 700;
  }
`;

const StyledInputs = styled.div`
  display: flex;
  gap: 10px;
`;
const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledTextArea = styled.div``;
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
              <Typography variant="sBodytext">{blogDetails.commentDetails.date}</Typography>
            </StyledAuthor>
            <StyledComment>
              <Typography variant="sBodytext">{blogDetails.comment.comment}</Typography>
            </StyledComment>
            <StyledReply>
              <Typography variant="sBodytext">{blogDetails.commentDetails.replies}</Typography>
              <Typography variant="sBodytext">{blogDetails.commentDetails.reply}</Typography>
            </StyledReply>
          </StyledInfos>
        </StyledComments>
        <StyledComments>
          <StyledAvatarWrapper></StyledAvatarWrapper>
          <StyledInfos>
            <StyledAuthor>
              <Typography variant="sBodytext">{blogDetails.commentDetails.author}</Typography>
              <Typography variant="sBodytext">{blogDetails.commentDetails.date}</Typography>
            </StyledAuthor>
            <StyledComment>
              <Typography variant="sBodytext">{blogDetails.comment.comment}</Typography>
            </StyledComment>
            <StyledReply>
              <Typography variant="sBodytext">{blogDetails.commentDetails.reply}</Typography>
            </StyledReply>
          </StyledInfos>
        </StyledComments>
        <StyledCreateComm>
          <StyledTitleComm>
            <Typography variant="h2">{blogDetails.commentCreate.title}</Typography>
            <Typography variant="sBodytext">{blogDetails.commentCreate.bio}</Typography>
          </StyledTitleComm>
          <StyledTextInput>
            <StyledInputs>
              <InputWithIcon
                width="248px"
                label=""
                placeholder={blogDetails.commentCreate.placeholders.name}
              />
              <InputWithIcon
                width="248px"
                label=""
                placeholder={blogDetails.commentCreate.placeholders.email}
              />
              <InputWithIcon
                width="248px"
                label=""
                placeholder={blogDetails.commentCreate.placeholders.website}
              />
            </StyledInputs>
            <StyledTextArea>
              <TextAreaWithIcon
                width="764px"
                label=""
                placeholder={blogDetails.commentCreate.placeholders.comment}
              ></TextAreaWithIcon>
            </StyledTextArea>
          </StyledTextInput>
          <Checkbox>
            <input type="checkbox" />
            <Typography variant="sBodytext">{blogDetails.commentCreate.checkbox}</Typography>
          </Checkbox>
        </StyledCreateComm>
      </StyledLeftContent>
      <SearchBar dictionary={searchBar} />
    </StyledContainer>
  );
}
