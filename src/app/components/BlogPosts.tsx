'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const BlogSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div(({ theme }) => ({
    maxWidth: theme.container.maxWidth,
    width: theme.container.width,
    padding: theme.container.padding,
}));

const Headline = styled.h2(({ theme }) => ({
    color: theme.colors.dark,
    fontSize: theme.typography.styles.h2.fontSize,
    fontWeight: theme.typography.styles.h2.fontWeight,
    fontFamily: theme.typography.fontFamily?.body || 'sans-serif',
    letterSpacing: theme.typography.styles.h2.letterSpacing,
    marginBottom: '2rem',
    '@media (max-width: 768px)': {
        fontSize: '30px',
        textAlign: 'center',
    },
}));

const BlogPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogPostCard = styled.div`
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.01);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
    }


`;


const ContentWrapper = styled.div`
  padding: 1rem 0;
`;

const PostTitle = styled.h3`
  color: #07234B;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    text-align: center;
  }

`;

const PostMeta = styled.p`
  color: #777;
  font-size: 0.85rem;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    }
`;

const dummyBlogPosts = [
    {
        title: '9 reasons why Dubai Islands is an investment gem',
        imageUrl: '/islands.png',
        date: 'Aug 07, 2024',
        readTime: '3 min read',
    },
    {
        title: '15 awesome facts about the Dubai Economic Agenda (D33)',
        imageUrl: '/economic.png',
        date: 'Aug 07, 2024',
        readTime: '3 min read',
    },
    {
        title: 'Can a residential property be used as a commercial property?',
        imageUrl: '/residential.png',
        date: 'Aug 07, 2024',
        readTime: '3 min read',
    },
];

export default function Posts() {
    return (
        <BlogSectionWrapper>
            <Container>
                <Headline>Latest News & Insights</Headline>
                <BlogPostsGrid>
                    {dummyBlogPosts.map((post, index) => (
                        <BlogPostCard key={index}>
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={300}
                                height={200}
                                style={{ borderRadius: '6px', width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <ContentWrapper>
                                <PostTitle>{post.title}</PostTitle>
                                <PostMeta>{post.readTime} / {post.date}</PostMeta>
                            </ContentWrapper>
                        </BlogPostCard>
                    ))}
                </BlogPostsGrid>
            </Container>
        </BlogSectionWrapper>
    );
}