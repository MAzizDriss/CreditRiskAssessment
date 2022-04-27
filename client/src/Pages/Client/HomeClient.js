import React from 'react';
import ClientNav from '../../Components/Navbar/ClientNav';
import "../../Assets/css/home.css";
import Footer from '../../Components/Footer/Footer';
import account from '../../Assets/images/account.svg'
import balance  from '../../Assets/images/balance.svg'
import forms  from '../../Assets/images/forms.svg'
import list  from '../../Assets/images/list.svg'
import {Link }from 'react-router-dom'
import ClientFooter from '../../Components/Footer/ClientFooter';
// import { Container } from './styles';

function HomeClient() {
  return <div>
    <ClientNav />
    <div className='bluecont'></div>
    

    <div className='bord'>
      <div className='grid-container'>
        <Link to='/c/account' className='grid-item'>
         <img  className='im2'src={account}/>
          <h2 className='tx'>
            My account
          </h2>
        </Link>
        <Link to='/c/balance' className='grid-item'>
          <img  className='im1'src={balance}/>
          <h2 className='tx'>
            My Balance
          </h2>
        </Link>
        <Link to='/c/form' className='grid-item'>
        <img  className='im'src={forms}/>
          <h2 className='tx'>
            Create loan demand
          </h2>
        </Link>
        <Link to='/c/demands' className='grid-item'>
        <img  className='im3'src={list}/>
          <h2 className='tx'>
            List of demands
          </h2>
        </Link>
      </div>
    </div>
    <ClientFooter/>
 

  </div>;
}

export default HomeClient;