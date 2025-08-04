'use client';
import styled from '@emotion/styled';

const ContactSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div(({ theme }) => ({
    maxWidth: theme.container.maxWidth,
    width: theme.container.width,
    padding: theme.container.padding,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Headline = styled.h2(({ theme }) => ({
    color: theme.colors.dark,
    fontSize: '40px',
    fontWeight: theme.typography.styles.h2.fontWeight,
    fontFamily: theme.typography.fontFamily?.body || 'sans-serif',
    letterSpacing: theme.typography.styles.h2.letterSpacing,
    marginBottom: '2rem',
    '@media (max-width: 768px)': {
        fontSize: '29px',
        textAlign: 'center',
    },
}));

const Subline = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.typography.styles.p.fontSize};
    font-weight: ${({ theme }) => theme.typography.styles.fontWeight.bold};
    font-family: ${({ theme }) => theme.typography.fontFamily?.body || 'sans-serif'};
    letter-spacing: 0.1px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
`;

const FormCard = styled.div`
    background-color: white;
    border: 1px solid #C6C6C6;
    border-radius: 10px;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 650px;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 95%;
        margin: 0.5rem;
        text-align: center;
        padding: 20px 30px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;

    input {
        padding: 12px;
        background-color: ${({ theme }) => theme.colors.inputBackground};
        border: 1px solid #C6C6C6;
        border-radius: 5px;
        font-size: ${({ theme }) => theme.typography.styles.inputText.fontSize};
        outline: none;
        font-family: ${({ theme }) => theme.typography.fontFamily?.body || 'sans-serif'}
        color: #737373;
        font-weight: ${({ theme }) => theme.typography.styles.fontWeight.regular};
        width: 100%;
    }


    textarea {
        padding: 12px;
        background-color: ${({ theme }) => theme.colors.inputBackground};
        border: 1px solid #C6C6C6;
        border-radius: 5px;
        font-size: ${({ theme }) => theme.typography.styles.inputText.fontSize};
        outline: none;
        font-family: ${({ theme }) => theme.typography.fontFamily?.body || 'sans-serif'};
        color: #BDBDBD;
        font-weight: ${({ theme }) => theme.typography.styles.fontWeight.regular};
        width: 100%;
        margin-bottom: 16px;
        
    }
    
    button {
        background-color: ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.light};
        padding: 15px 40px;
        border: 1px solid ${({ theme }) => theme.colors.orange};
        border-radius: 5px;
        cursor: pointer;
        font-size: ${({ theme }) => theme.typography.styles.inputText.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily?.body || 'sans-serif'};
        font-weight: ${({ theme }) => theme.typography.styles.fontWeight.bold};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
    }


`;
const InlineForm = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
`


export default function ContactUs() {
    return (
        <ContactSectionWrapper>
            <Container>
                <FormCard>
                    <Subline>Contact Us</Subline>
                    <Headline>Make an Appointment</Headline>
                    <Form>
                        <InlineForm>
                            <input type="text" placeholder="Full name *" required />
                            <input type="email" placeholder="Email *" required />
                        </InlineForm>
                        <textarea placeholder="Message" rows={4} required></textarea>
                        <button type="submit">Book Appointment</button>
                    </Form>
                </FormCard>
            </Container>
        </ContactSectionWrapper >
    );
}