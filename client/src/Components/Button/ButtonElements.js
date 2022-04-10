import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? 'var(--green)': 'var(--light-blue) ')};
    white-space: nowrap;
    padding: ${({big})=> (big ?'14px 48px':'12px 30px')};
    color:${({dark})=> (dark ? '#051521  ': '#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px': '16px')};
    font-weight: 400;
    outline: none;
    border: none;
    cursor : pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease-in-out;

    &:hover {
        transition: all 0.25s ease-in-out;
        background: ${({primary})=> (primary ? '#e9e9e9': '#869bda')};
    }




`