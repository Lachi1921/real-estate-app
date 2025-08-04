'use client';
import styled from '@emotion/styled';
import { useState } from 'react';
import Image from 'next/image';

const PropertiesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4.5rem 0;
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
    fontSize: '29px',
    textAlign: 'center',
  },

}));




const categories = ['Penthouses', 'Apartments', 'Townhouses', 'Villas'];

const Tabs = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

`;

interface TabProps {
  active: boolean;
}

const Tab = styled.button<TabProps>`
  background: none;
  border: none;
  text-transform: uppercase;
  width: 125px;
  font-size: 1rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.typography.fontFamily.ui};
  color: ${({ active }) => (active ? '#3B5998' : '#00000099')};
  padding-bottom: 0.8rem;
  border-bottom: ${({ active }) => (active ? '3px solid #3B5998' : '3px solid transparent')};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex: 1;
    justify-content: center;
    text-align: center;
  }

`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #C6C6C6DD;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;



const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: #07234B;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 23px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  margin: 0 0 10px;
`;

const Text = styled.p`
  color: #07234B;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.16px;
  margin: 0px 0 10px;
  & span {
    font-weight: 600;
    }
  `;

const PriceSpan = styled.span`
  color: #EE7133;
  font-weight: 700;
`;

const Details = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.styles.fontSize.xs};
  color: ${({ theme }) => theme.colors.cardText};
  gap: 1rem;
`;


const DetailItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Divider = styled.hr`
  margin: 13px 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const WhatsApp = styled.a`
  color: ${({ theme }) => theme.colors.whatsappGreen};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-weight: 800;
  font-size: ${({ theme }) => theme.typography.styles.fontSize.xs};
  letter-spacing: 0.16px;
  cursor: pointer;
`;

const WhatsAppLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.4rem;
`;

const dummyPropertiesByCategory = {
  Penthouses: [
    { title: 'One Park Central', seller: 'IMAN Developers', price: '147k USD', bedrooms: 1, area: '1,202 Sq Ft' },
    { title: 'Penthouse B', seller: 'Luxury Stay', price: '$3,800,000', bedrooms: 3, area: '4,100 Sq Ft' },
    { title: 'Penthouse C', seller: 'Vista Group', price: '$4,200,000', bedrooms: 5, area: '5,000 Sq Ft' },
  ],
  Apartments: [
    { title: 'Apartment A', seller: 'Skyline Realtors', price: '$800,000', bedrooms: 2, area: '1,200 Sq Ft' },
    { title: 'Apartment B', seller: 'Urban Nest', price: '$750,000', bedrooms: 2, area: '1,100 Sq Ft' },
    { title: 'Apartment C', seller: 'Metro Spaces', price: '$850,000', bedrooms: 3, area: '1,400 Sq Ft' },
  ],
  Townhouses: [
    { title: 'Townhouse A', seller: 'Green Villas', price: '$1,200,000', bedrooms: 3, area: '2,500 Sq Ft' },
    { title: 'Townhouse B', seller: 'Estate Co.', price: '$1,300,000', bedrooms: 4, area: '2,800 Sq Ft' },
    { title: 'Townhouse C', seller: 'Smart Living', price: '$1,150,000', bedrooms: 3, area: '2,400 Sq Ft' },
  ],
  Villas: [
    { title: 'Villa A', seller: 'Palm Realty', price: '$2,500,000', bedrooms: 5, area: '4,200 Sq Ft' },
    { title: 'Villa B', seller: 'Luxury Haven', price: '$2,800,000', bedrooms: 6, area: '4,600 Sq Ft' },
    { title: 'Villa C', seller: 'Golden Keys', price: '$2,600,000', bedrooms: 5, area: '4,300 Sq Ft' },
  ],
};


export default function Properties() {
  type PropertyCategory = keyof typeof dummyPropertiesByCategory;
  const [activeTab, setActiveTab] = useState<PropertyCategory>('Penthouses');

  return (
    <>
      <PropertiesSection>
        <Container>
          <Headline>Latest Properties</Headline>
          <Tabs>
            {categories.map(cat => (
              <Tab
                key={cat}
                active={activeTab === cat}
                onClick={() => setActiveTab(cat as PropertyCategory)}
              >
                {cat}
              </Tab>
            ))}
          </Tabs>

          <CardGrid>
            {dummyPropertiesByCategory[activeTab].map((property, i) => (
              <Card key={i}>
                <Image
                  src='/onepark.png'
                  alt={property.title}
                  width={357}
                  height={200}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Content>
                  <Title>{property.title}</Title>
                  <Text>by <span>{property.seller}</span></Text>
                  <Text>Price: <PriceSpan>{property.price}</PriceSpan></Text>
                  <Details>
                    <DetailItem>
                      <Image src="/bed-icon.svg" alt="Bedrooms" width={16} height={16} />
                      {property.bedrooms}
                    </DetailItem>
                    <DetailItem>
                      <Image src="/area-icon.svg" alt="Area" width={16} height={16} />
                      {property.area}
                    </DetailItem>
                  </Details>
                  <Divider />

                  <WhatsAppLink>
                    <Image src="/whatsapp-icon2.svg" alt="WhatsApp" width={23} height={26} />
                    <WhatsApp href="https://wa.me" target="_blank">
                      Whatsapp now
                    </WhatsApp>
                  </WhatsAppLink>
                </Content>
              </Card>
            ))}
          </CardGrid>
        </Container>
      </PropertiesSection>
    </>
  );
}
