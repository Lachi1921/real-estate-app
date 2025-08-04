'use client';
import Header from './Header';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';

const HeroSection = styled.main`
    background-color: #3B5998;
    padding: 1rem 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Container = styled.div(({ theme }) => ({
    maxWidth: theme.container.maxWidth,
    width: theme.container.width,
    padding: theme.container.padding,

}));

const WrapperContainer = styled.div`
  width: 100%;
  max-width: 833px;
  flex-direction: column;
  padding: 5rem 0 2rem 0; 
  color: #FFFFFF;
  gap: 1rem;
  margin: 3rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0 1rem 0;
    margin: 2rem 0;
    text-align: center;
  }
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  width: 80%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    padding: 0 1rem;
    bottom: 0;
    width: 100%;
  }
`;

const Headline = styled.h1(({ theme }) => ({
    color: '#FFFFFF',
    fontSize: theme.typography.styles.h1.fontSize,
    fontWeight: theme.typography.styles.h1.fontWeight,
    fontFamily: theme.typography.fontFamily?.heading || 'sans-serif',

    '@media (max-width: 768px)': {
        fontSize: '32px',
        textAlign: 'center',
    },
}));

const Subtitle = styled.p(({ theme }) => ({
    color: '#FFFFFF',
    fontSize: theme.typography.styles.subtitle.fontSize,
    fontWeight: theme.typography.styles.subtitle.fontWeight,
    fontFamily: theme.typography.fontFamily?.body || 'sans-serif',
    '@media (max-width: 768px)': {
        fontSize: '16px',
        textAlign: 'center',
    },
}));



export default function Hero() {
    return (
        <>
            <HeroSection>
                <Container>
                    <Header />
                    <WrapperContainer>
                        <Headline>Find your perfect property in Dubai.</Headline>
                        <Subtitle>
                            Explore our exceptional range of residences. Apartments, villas, duplexes,
                            and more are ready for you to uncover!
                        </Subtitle>
                    </WrapperContainer>
                    <SearchBarWrapper >
                        <SearchBar />
                    </SearchBarWrapper>
                </Container>
            </HeroSection>
        </>
    );
}