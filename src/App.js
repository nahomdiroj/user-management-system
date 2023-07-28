import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepages from './components/pages/Homepages';
import Aboutpage from './components/pages/Aboutpage';
import Contactpage from './components/pages/Contactpage';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';


function App() {
  return (
  
      <Router>
          <div className="container">
            <NavBar/>
            <Routes>
            <Route exact path="/" element={<Homepages/>}/>
            <Route exact path="/about" element={<Aboutpage/>}/>
            <Route exact path="/contact" element={<Contactpage/>}/>
            </Routes>
          </div>
      </Router>
      
   
  );
}

export default App;
