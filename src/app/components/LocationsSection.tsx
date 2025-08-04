'use client';
import styled from '@emotion/styled';

const LocationsSection = styled.section`
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
        fontSize: '29px',
        textAlign: 'center',
    },
}));

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const LocationCard = styled.div<{ bgImage: string }>`
  height: 250px;
  border-radius: 5px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 200px;
    align-items: center;
    text-align: center;
  }

`;

const LocationName = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 600;

`;


const Highlight = styled.div`
    background-color: #ffffff;
    padding: 0.75rem 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    width: fit-content;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 95%;
        margin: 0.5rem;

        text-align: center;
    }
`

const dummyLocations = [
    'Downtown Dubai',
    'Dubai Marina',
    'Jumeirah Lakes Towers',
    'Palm Jumeirah',
    'Business Bay',
    'Dubai Hills Estate',
];

const images = [
    'golfpoint.png',
    'onepark.png',
    'jadetower.png',
    'jadetower.png',
    'onepark.png',
    'golfpoint.png',
];

export default function Locations() {
    return (
        <LocationsSection>
            <Container>
                <Headline>Discover Properties by Location</Headline>
                <LocationsGrid>
                    {dummyLocations.map((location, index) => (
                        <LocationCard key={index} bgImage={images[index % images.length]}>
                            <Highlight>
                                <LocationName>{location}</LocationName>
                            </Highlight>

                        </LocationCard>
                    ))}
                </LocationsGrid>
            </Container>
        </LocationsSection>
    );
}