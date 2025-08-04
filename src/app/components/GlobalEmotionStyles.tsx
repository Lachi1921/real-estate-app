'use client';

import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.typography.fontFamily.body};
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: ${theme.typography.fontFamily.heading};
          font-weight: ${theme.typography.styles.h1.fontWeight};
          margin: 0;
        }
        
        h1 {
          font-size: ${theme.typography.styles.h1.fontSize};
        }
        
        p {
          font-family: ${theme.typography.fontFamily.body};
          font-size: ${theme.typography.styles.p.fontSize};
          font-weight: ${theme.typography.styles.p.fontWeight};
          margin: 0.6rem 0;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};