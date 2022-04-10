import online_banking from './../../Assets/images/online_transaction.svg'
import save from './../../Assets/images/pig_save.svg'
export const homeObjOne={
    id:'about',
    lightBg:false,
    lightText:true,
    LightTextDesc:true,
    Topline:'Loan application',
    headline:'Apply to loans from anywhere ',
    description:'Get access to our exclusive app that allows you to apply for a loan online without having to transport to our location.',
    buttonLabel:'Get started',
    imgStart:false,
    img: online_banking,
    fontBig:true,
    alt:'loan',
    dark:true,
    primary:true,
    darkText:false,

}
export const homeObjtwo={
    id:'discover',
    lightBg:true,
    lightText:false,
    LightTextDesc:false,
    Topline:'unlimited access',
    headline:'Login to your account at any time',
    description:'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel:'Learn More',
    imgStart:true,
    img: save,
    alt:'online',
    fontBig:true,
    dark:false,
    primary:false,
    darkText:true,
}