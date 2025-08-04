'use client';
import styled from '@emotion/styled';
import Image from 'next/image';


const ReviewsSection = styled.section`
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

    '@media (max-width: 768px)': {
        fontSize: '30px',
        textAlign: 'center',
    },


}));

const Subtitle = styled.p`
  color: #555;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    text-align: center;
    }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ReviewCard = styled.div`
  background-color: white;
  border: 1px solid #C6C6C6;
  border-radius: 6px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin: 0 auto;
        
    }
`;

const ClientName = styled.p(({ theme }) => ({
    color: theme.colors.dark,
    fontSize: theme.typography.styles.fontSize.xs,
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily?.body || 'sans-serif',
    letterSpacing: theme.typography.styles.h2.letterSpacing,
    margin: '0 0 0.5rem',
}));


const ReviewTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: 14px;
  font-weight: 600;
  color: #07234B;
  margin: 0.5rem 0 12px;
`;

const ReviewText = styled.p`
  color: #5F6268;
  font-size: ${({ theme }) => theme.typography.styles.fontSize.xs};
  letter-spacing: 0.2px;
  margin: 0;
`;

const reviewsData = [
    {
        name: 'A. Clark',
        title: 'Smart Investment Advice for a First-Time Buyer',
        text: "As a first-time property buyer, I was pretty confused and didn't know where to start. Provident Real Estate's agents were incredibly knowledgeable and...",
    },
    {
        name: 'C. Miller',
        title: 'I\'m Living in a Perfect Family Home!',
        text: "Moving to Dubai with my wife and two kids was a huge change, and finding a home for my family was my top priority but also a big headache. Provident R...",
    },
    {
        name: 'M. Khan',
        title: 'Smooth Relocation Experience',
        text: "Relocating to Dubai for work was a big move, and finding a new home was stressing me out. I needed a reliable real estate company to help me out. Prov...",
    },
];

export default function Reviews() {
    return (
        <ReviewsSection>
            <Container>
                <Headline>Why Our Clients Trust Us</Headline>
                <Subtitle>
                    Discover what our customers are saying about their experiences.
                </Subtitle>
                <ReviewsGrid>
                    {reviewsData.map((review, index) => (
                        <ReviewCard key={index}>
                            <ClientName>{review.name}</ClientName>
                            <Image src="/stars.png" alt="Star Rating" width={120} height={20} />
                            <ReviewTitle>{review.title}</ReviewTitle>
                            <ReviewText>{review.text}</ReviewText>
                        </ReviewCard>
                    ))}
                </ReviewsGrid>
            </Container>
        </ReviewsSection>
    );
}