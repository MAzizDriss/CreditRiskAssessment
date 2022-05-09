import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Assets/css/admin.css';
import styled from "styled-components";
import MainContent from '../../Components/Dashboard/MainContent';


function Dashboard() {
  return <div className='disp'>
    <Sidebar />
    <div className='admincontainer'>
      <PageContainer>
          <MainContent/>
      </PageContainer>
    </div>
  </div>;
}

const PageContainer = styled.div`
  display: flex;
  height: 150vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Dashboard;