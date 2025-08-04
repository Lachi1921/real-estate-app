'use client';
import styled from '@emotion/styled';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #171715;
  color: #fff;
  padding: 60px 0 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md} ) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md} ) {
    align-items: start;
    justify-content: flex-start;
  }
`;

const Heading = styled.h4`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  margin-bottom: 1rem;
  text-align: left;
  text-transform: uppercase;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ccc;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #444;
  margin: 2rem 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;


  @media (max-width: ${({ theme }) => theme.breakpoints.md} ) {
    align-items: start;
    justify-content: flex-start;
    text-align: left;
    flex-direction: column-reverse;
  }
`;
const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md} ) {
    margin-bottom: 1rem;
  }
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #333;
  color: #ccc;
  border-radius: 50%;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <FooterGrid>
                    <Column>
                        <Heading>Navigation</Heading>
                        <LinkList>
                            <LinkItem><FooterLink href="#">Home</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">About Us</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">What We Do</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">To The Power of 10</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Donate</FooterLink></LinkItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <Heading>What We Do</Heading>
                        <LinkList>
                            <LinkItem><FooterLink href="#">Encouraging Testing</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Strengthening Advocacy</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Sharing Information</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Building Leadership</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Engaging With Global Fund</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Shining a Light</FooterLink></LinkItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <Heading>Legal</Heading>
                        <LinkList>
                            <LinkItem><FooterLink href="#">General Info</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Privacy Policy</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Terms of Service</FooterLink></LinkItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <Heading>Talk to Us</Heading>
                        <LinkList>
                            <LinkItem><FooterLink>support@eroom.com</FooterLink></LinkItem>
                            <LinkItem><FooterLink>+66 2399 1145</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Contact Us</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Facebook</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Linkedin</FooterLink></LinkItem>
                            <LinkItem><FooterLink href="#">Twitter</FooterLink></LinkItem>
                        </LinkList>
                    </Column>
                </FooterGrid>

                <Divider />

                <BottomSection>
                    <Copyright>© {new Date().getFullYear()} Company Name. All Rights Reserved.</Copyright>
                    <SocialIcons>
                        <SocialIconLink href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></SocialIconLink>
                        <SocialIconLink href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></SocialIconLink>
                        <SocialIconLink href="https://x.com" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                    </SocialIcons>
                </BottomSection>
            </Container>
        </FooterWrapper>
    );
}