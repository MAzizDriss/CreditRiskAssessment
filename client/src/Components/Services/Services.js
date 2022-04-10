import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesWrapper,ServicesP } from './ServicesElements'
import loanimg from '../../Assets/images/online_banking_green.svg'
import up from '../../Assets/images/going_up.svg'
import mobile from '../../Assets/images/mobile_interface.svg'

const Services = () => {
  return (
    <>
        <ServicesContainer>
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={up}/>
                    <ServicesH2 >Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={mobile}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access to our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={loanimg}/>
                    <ServicesH2>Online Loans</ServicesH2>
                    <ServicesP>You can apply to loans online and follow the state of your current loans</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services