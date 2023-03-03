import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Akkilahdot from './components/akkilahdot/Akkilahdot';
import Budjettimatkat from './components/budjettimatkat/Budjettimatkat';
import Rantalomat from './components/rantalomat/Rantalomat';
import Etusivu from './components/etusivu/Etusivu';

const App = () => {
  return (
    <>
 <Router>
    <div className="App">
      <Nav/>
      <div className="App_content">
        <Routes>
          <Route exact path="/" element={<Etusivu/>} />
          <Route path="/Rantalomat" element={<Rantalomat/>} />
          <Route path="/Budjettimatkat" element={<Budjettimatkat/>} />
          <Route path="/Akkilahdot" element={<Akkilahdot/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  </>
);
}

export default App