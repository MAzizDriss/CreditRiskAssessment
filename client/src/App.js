import './Assets/css/root.css'
import WelcomePage from './Pages/Visitor/WelcomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import DemandsList from './Pages/Admin/DemandsList';
import Dashboard from './Pages/Admin/Dashboard';
import Inbox from './Pages/Admin/Inbox';
import MyAccount from './Pages/Admin/MyAccount';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element= {<WelcomePage/>}> </Route>
      </Routes>
      <Routes>
         <Route exact path='/a/dash' element={<Dashboard/>}></Route>
      </Routes>
      <Routes>
         <Route exact path='/a/list' element={<DemandsList/>}></Route>
      </Routes>
      <Routes>
         <Route exact path='/a/inbox' element={<Inbox/>}></Route>
      </Routes>
      <Routes>
         <Route exact path='/a/account' element={<MyAccount/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
