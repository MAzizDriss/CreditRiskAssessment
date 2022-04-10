import React from 'react'
import { Button } from '../Button/ButtonElements'
import { BtnWrap, Column1, Column2, ImgWrap, InfoContainer, InfoRow, InfoWrapper,Heading, Subtitle, TextWrapper, TopLine,Img } from './InfoElemnts'

const InfoSection = ({lightBg, fontBig, id, dark, big,  imgStart, Topline, primary, lightText, headline, darkText, description, buttonLabel, img, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{Topline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                 primary={primary}
                                 dark={dark} 
                                 fontBig= {fontBig}
                                 big={big}
                                >{buttonLabel}</Button> 
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection