import styled from 'styled-components';
import '../../Assets/css/root.css'

export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    padding-top:50px;
    align-items: center;
    background: var(--light-blue) ;

    @media screen and (max-width: 768px){
        height:1500px;
    }
    @media screen and (max-width: 480px){
        height:1500px;
    }

`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`
export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction : column;
    justify-content:flex-start;
    align-items: center;
    padding: 40px 10px;
    border-radius: 10px;
    max-height: 350px;
    maw-width:300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition : all 0.2 ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.25 ease-in-out;
    }


`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160 px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width : 480px){
        font-size: 2rem;
    }

`
export const ServicesH2 = styled.h2`
    font-size:1 rem;
    margin-bottom:10px;
`
export const ServicesP= styled.p`
    font-size: 1rem;
    text-align: center;

`