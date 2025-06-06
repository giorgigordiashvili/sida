'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { getDictionary } from '@/get-dictionary';
import SearchBar from './SearchBar';
import Typography from './ui/Typography';
import Image from 'next/image';
import PageSwitcher from './PageSwitcher';

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

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledBlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media (max-width: 1080px) {
    padding-inline: 16px;
  }
`;

const StyledImageWrapper = styled.div`
  width: 850px;
  height: 431px;
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

const mockBlogs = [
  { id: 1, title: 'Blog Title 1', description: 'Blog description 1' },
  { id: 2, title: 'Blog Title 2', description: 'Blog description 2' },
  { id: 3, title: 'Blog Title 3', description: 'Blog description 3' },
  { id: 4, title: 'Blog Title 4', description: 'Blog description 4' },
  { id: 5, title: 'Blog Title 5', description: 'Blog description 5' },
  { id: 6, title: 'Blog Title 6', description: 'Blog description 6' },
];

const BLOGS_PER_PAGE = 3;

export default function Blog({
  searchBar,
  blog,
}: {
  searchBar: Awaited<ReturnType<typeof getDictionary>>['searchBar'];
  blog: Awaited<ReturnType<typeof getDictionary>>['blog'];
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = mockBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You might want to scroll to top or add smooth scrolling here
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  type BlogType = {
    id: number;
    title: string;
    description: string;
  };
  const renderBlogCard = (blogData: BlogType, index: number) => (
    <StyledBlogCard key={`${blogData.id}-${index}`}>
      <StyledImageWrapper></StyledImageWrapper>
      <StyledTags>
        <StyledTag>
          <Image src="/assets/images/blog/user.svg" alt="user" width={16} height={16} />
          <Typography variant="sBodytext">{blog.tags.admin}</Typography>
        </StyledTag>
        <StyledTag>
          <Image src="/assets/images/blog/category.svg" alt="category" width={16} height={16} />
          <Typography variant="sBodytext">{blog.tags.category}</Typography>
        </StyledTag>
        <StyledTag>
          <Image src="/assets/images/blog/comments.svg" alt="comments" width={16} height={16} />
          <Typography variant="sBodytext">{blog.tags.comments}</Typography>
        </StyledTag>
      </StyledTags>
      <StyledBio>
        <Typography variant="xlBodytext">{blog.title}</Typography>
        <Typography variant="sBodytext">{blog.description}</Typography>
      </StyledBio>
    </StyledBlogCard>
  );

  return (
    <StyledContainer>
      <StyledMainContent>
        <StyledBlogsContainer>
          {currentBlogs.map((blogData, index) => renderBlogCard(blogData, index))}
        </StyledBlogsContainer>

        <PageSwitcher
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </StyledMainContent>

      <SearchBar dictionary={searchBar} />
    </StyledContainer>
  );
}
