import React from 'react';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialLogo, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRight } from './FooterElements'
import {FaFacebook,FaLinkedin,FaInstagram, FaYoutube,FaTwitter} from 'react-icons/fa'
function ClientFooter() {
  return <>
<FooterContainer>
            <FooterWrap>
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
  </>;
}

export default ClientFooter;