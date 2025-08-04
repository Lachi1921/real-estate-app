'use client';

import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';
import { GlobalStyles } from './GlobalEmotionStyles';


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}  