'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    padding: 0px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const SelectWrapper = styled.div`
    position: relative;
    min-width: 150px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        min-width: 100%;
    }
`;

const StyledSelect = styled.select`
    appearance: none;
    width: 100%;
    padding: 16px 40px 16px 12px;
    height: 58px;

    border: 1px solid ${({ theme }) => theme.colors.searchBarBorder};
    background-color: ${({ theme }) => theme.colors.inputBackground};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
`;

const DropdownArrow = styled.img`
    position: absolute;
    right: 12px;
    top: 50%;
    width: 14px;
    height: 14px;
    transform: translateY(-50%);
    pointer-events: none;
`;

const Input = styled.input`
    flex: 2;
    padding: 16px 12px;
    height: 58px;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    background-color: ${({ theme }) => theme.colors.inputBackground};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.searchBarBorder};
    outline: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
    }
`;

const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.colors.searchOrange};
    border: none;
    padding: 16px 20px;
    height: 58px;
    border: 1px solid ${({ theme }) => theme.colors.searchOrange};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 20px;
        height: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
    }
`;

export default function SearchBar() {
    return (
        <Form>
            <SelectWrapper>
                <StyledSelect defaultValue="buy">
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </StyledSelect>
                <DropdownArrow src="/dropdown-arrow.svg" alt="arrow" />
            </SelectWrapper>

            <SelectWrapper>
                <StyledSelect defaultValue="residential">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                </StyledSelect>
                <DropdownArrow src="/dropdown-arrow.svg" alt="arrow" />
            </SelectWrapper>

            <Input type="text" placeholder="Search city, building, or community" />

            <SearchButton type="submit">
                <Image src="/magnifying-glass.svg" alt="search" width={20} height={20} />

            </SearchButton>
        </Form>
    );
}
