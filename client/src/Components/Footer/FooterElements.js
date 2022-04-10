import styled from "styled-components";
import '../../Assets/css/root.css'
import { Link } from "react-router-dom";
export const FooterContainer=styled.footer`
     background-color:#fff;
`
export const FooterWrap= styled.div`
    padding: 35px 24px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content:center;

    @media screen and (max-wdith: 820px){
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display:flex;

    @media screen and (max-width:820 px){
        flex-direction:column;
    }
`
export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: var(--dark-blue);

    @media screen and (max-width: 420px){
        margin 0;
        padding: 10px;
        width: 100%;
    }

`
export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    color: var(--dark-blue);
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    &:hover{
        color: var(--green);
        transition:0.3 ease-out;
    }
`
export const SocialMedia=styled.section`
    max-width: 1000px;
    width: 100%;

`
export const SocialMediaWrap=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100 px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

`
export const SocialLogo=styled(Link)`
    color:  var(--dark-blue);
    justify-self: start;
    cursor: pointer;
    text-decoration : none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const WebsiteRight=styled.small`
    margin-top:20px;
    color: var(--dark-blue);
    margin-bottom: 10px;
    margin-left:0px;

`
export const SocialIcons= styled.div`
    display: flex;
    justify-content: space-between;
    align-items:  center;
    width: 240px;

`
export const SocialIconLink=styled.a`
    color: var(--dark-blue);
    font-size: 24px;
`
