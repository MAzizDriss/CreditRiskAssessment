import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialLogo, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRight } from './FooterElements'
import {FaFacebook,FaLinkedin,FaInstagram, FaYoutube,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">About us </FooterLink>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Careers </FooterLink>
                                <FooterLink to="/">Investors  </FooterLink>
                                <FooterLink to="/">Terms of Service </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">E-mail</FooterLink>
                                <FooterLink to="/signin">Phone: (+216)3985700</FooterLink>
                                <FooterLink to="/signin">WhatsApp</FooterLink>
                                <FooterLink to="/signin">Support </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">LinkedIn</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            OTB
                        </SocialLogo>
                        <WebsiteRight> OTB © {new Date().getFullYear()+" "}
                         All rights reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" targets="_blank" area-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" targets="_blank" area-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="/" targets="_blank" area-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" targets="_blank" area-label="Instagram">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" targets="_blank" area-label="Instagram">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    
    </>
  )
}

export default Footer