import React from 'react';
import './App.css';
import './Mobiledesign.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <div className="head-title">
          <h4>We provide products and the service</h4>
          <h2>Suthasinee Thai-Canada Skincare Product</h2> 
        </div>
      </header>
      <div className="sticky">
        <Navbar />
      </div> 
      <div>
        <Home />
      </div>
        <Footer />
    </div>
  );
}

export default App;
