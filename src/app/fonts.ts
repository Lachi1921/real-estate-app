import { Manrope, Montserrat, Roboto } from 'next/font/google';

export const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-manrope',
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

export const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});