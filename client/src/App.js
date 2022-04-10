import './App.css';
import WelcomePage from './Pages/Visitor/WelcomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element= {<WelcomePage/>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
