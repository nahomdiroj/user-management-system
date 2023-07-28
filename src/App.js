import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepages from './components/pages/Homepages';
import Aboutpage from './components/pages/Aboutpage';
import Contactpage from './components/pages/Contactpage';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
  
      <Router>
          <div >
            <NavBar/>
            <Routes>
            <Route exact path="/" element={<Homepages/>}/>
            <Route exact path="/about" element={<Aboutpage/>}/>
            <Route exact path="/contact" element={<Contactpage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </div>
      </Router>
      
   
  );
}

export default App;
