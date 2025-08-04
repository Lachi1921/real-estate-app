'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const StyledHeader = styled.header(({ theme }) => ({
    paddingBlock: theme.spacing.md,
    display: 'flex',
    // make the header sticky
    zIndex: 1000,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily?.body || 'sans-serif',
}));

const Logo = styled.h1(({ theme }) => ({
    margin: 0,
    fontSize: theme.typography.styles.logo.fontSize,
    lineHeight: theme.typography.styles.logo.lineHeight,
    fontWeight: theme.typography.styles.logo.fontWeight,
    letterSpacing: theme.typography.styles.logo.letterSpacing,
    fontFamily: theme.typography.styles.logo.fontFamily,
    color: theme.colors.light,
}));


const Nav = styled.nav<{ $isOpen: boolean }>`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.styles.a.fontSize};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {


    // Improve mobile responsiveness and the design of the navigation menu
    ul {
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.md};
      align-items: flex-start;
      text-align: center;
    }

    li {
      margin: 0;
    }

    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    padding: ${({ theme }) => theme.spacing.md};
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  }
`;


const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  color: #003B95;
  border-radius: 6px;
  border: 0px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm}`};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  font-family: ${({ theme }) => theme.typography.fontFamily.ui || 'sans-serif'};
  font-size: 14px;
  font-weight: 400;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #25D36633;
  }
`;

const WhatsappIcon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;




const HamburgerMenu = styled.button(({ theme }) => ({
    background: 'none',
    border: 'none',
    color: theme.colors.light,
    fontSize: '2rem',
    cursor: 'pointer',
    display: 'none',
    '@media (max-width: 768px)': {
        display: 'block',
    },
}));

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <>
            <StyledHeader>
                <Logo>LOGO</Logo>
                <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </HamburgerMenu>
                <Nav $isOpen={isMenuOpen}>
                    <ul>
                        <li><Link href="/">Buy</Link></li>
                        <li><Link href="/rent">Rent</Link></li>
                        <li><Link href="/offplan">Off Plan</Link></li>
                        <li><Link href="/commercial">Commercial</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li>
                            <StyledButton>
                                <WhatsappIcon
                                    src="../whatsapp-icon.svg"
                                    alt="WhatsApp Icon"
                                    width={20}
                                    height={20}
                                />
                                Whatsapp
                            </StyledButton>
                        </li>
                    </ul>
                </Nav>
            </StyledHeader>
        </>
    );
}