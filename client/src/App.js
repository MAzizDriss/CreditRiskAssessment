import './Assets/css/root.css'
import WelcomePage from './Pages/Visitor/WelcomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DemandsList from './Pages/Admin/DemandsList';
import Dashboard from './Pages/Admin/Dashboard';
import Inbox from './Pages/Admin/Inbox';
import MyAccount from './Pages/Admin/MyAccount';
import BankerUserForm from './Components/BankerFrom/BankerUserForm';
import HomeClient from './Pages/Client/HomeClient';
import ClientAccount from './Pages/Client/ClientAccount';
import ClientBalance from './Pages/Client/ClientBalance';
import DemandForm from './Pages/Client/DemandForm';
import ClientDemands from './Pages/Client/ClientDemands';

const App =() => {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element= {<WelcomePage/>}> </Route>
         <Route exact path='/a/dash' element={<Dashboard/>}></Route>
         <Route exact path='/a/list' element={<DemandsList/>}></Route>
         <Route exact path='/a/inbox' element={<Inbox/>}></Route>
         <Route exact path='/a/account' element={<MyAccount/>}></Route>
         <Route exact path="/a/form" element= {<BankerUserForm/>}> </Route>
         <Route exact path="/c/account" element= {<ClientAccount/>}> </Route>
         <Route exact path="/c/balance" element= {<ClientBalance/>}> </Route>
         <Route exact path="/c/demands" element= {<ClientDemands/>}> </Route>
         <Route exact path="/c/form" element= {<DemandForm/>}></Route>
         <Route exact path="/c/home" element= {<HomeClient/>}></Route>
      </Routes>
    </Router> 
  );
}

export default App;