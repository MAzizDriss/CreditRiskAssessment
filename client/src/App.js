import './Assets/css/root.css'
import WelcomePage from './Pages/Visitor/WelcomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DemandsList from './Pages/Admin/DemandsList';
import Dashboard from './Pages/Admin/Dashboard';
import Inbox from './Pages/Admin/Inbox';
import MyAccount from './Pages/Admin/MyAccount';
import BankerUserForm from './Components/BankerFrom/BankerUserForm';

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
      </Routes>
    </Router>
  );
}

export default App;