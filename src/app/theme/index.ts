export const theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        orange: '#EE7133',
        info: '#17a2b8',
        light: '#FFFFFF',
        dark: '#1A1A27',
        text: '#212529',
        background: '#ffffff',
        border: '#E1E1E1',
        searchOrange: '#EE7133',
        searchBarBorder: '#E6E6E6',
        inputBackground: '#F9F9F9',
        whatsappGreen: '#02B934',
        cardText: '#5F6268',
    },
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        padding: '0 1rem',
    },
    typography: {
        fontFamily: {
            heading: 'var(--font-manrope)',
            body: 'var(--font-montserrat)',
            ui: 'var(--font-roboto)',
        },
        lineHeight: {
            heading: 1.2,
            body: 1.5,
        },
        styles: {
            fontSize: {
                xs: '12px',
                sm: '0.875rem',
                md: '1rem',
                lg: '1.25rem',
                xl: '1.5rem',
            },
            fontWeight: {
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            h1: {
                fontSize: '48px',
                lineHeight: '56px',
                fontWeight: 800,
                fontFamily: 'var(--font-manrope)',
            },
            h2: {
                fontSize: '24px',
                lineHeight: '28px',
                fontWeight: 700,
                fontFamily: 'var(--font-montserrat)',
                letterSpacing: '0.2px',
            },
            subtitle: {
                fontSize: '22px',
                lineHeight: '32px',
                fontWeight: 500,
                fontFamily: 'var(--font-manrope)',
            },
            a: {
                fontFamily: 'var(--font-manrope)',
                color: 'var(--color-light)',
                textDecoration: 'none',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.5',
            },

            inputText: {
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: 'var(--font-montserrat)',
                lineHeight: '28px',
                letterSpacing: '0.2px',
            },

            p: {
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
                fontFamily: 'var(--font-montserrat)',
            },
            logo: {
                fontSize: '24px',
                lineHeight: '28px',
                fontWeight: 800,
                letterSpacing: '0.2px',
                fontFamily: 'var(--font-manrope)',
            },
        },
    },
};

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            success: string;
            danger: string;
            orange: string;
            info: string;
            light: string;
            dark: string;
            text: string;
            background: string;
            border: string;
            searchOrange: string;
            searchBarBorder: string;
            inputBackground: string;
            whatsappGreen: string;
            cardText: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        container: {
            maxWidth: string;
            width: string;
            padding: string;
        };
        typography: {
            fontFamily: {
                heading: string;
                body: string;
                ui: string;
            };
            lineHeight: {
                heading: number;
                body: number;
            };
            styles: {
                fontSize: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                },
                fontWeight: {
                    regular: number;
                    medium: number;
                    semibold: number;
                    bold: number;
                };
                h1: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: number;
                    fontFamily: string;
                };
                h2: {
                    letterSpacing: string;
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: number;
                    fontFamily: string;
                };
                subtitle: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: number;
                    fontFamily: string;
                };
                inputText: {
                    fontSize: string;
                    fontWeight: number;
                    fontFamily: string;
                    lineHeight: string;
                    letterSpacing: string;
                };

                a: {
                    color: string;
                    textDecoration: string;
                    fontWeight: number;
                    fontStyle: string;
                    fontSize: string;
                    lineHeight: string;
                };
                p: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: number;
                    fontFamily: string;
                };
                logo: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: number;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
        };
    }
}