import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navigation from './components/navbar';
import Footer from './components/footer';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// Pages
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Prints from './pages/Prints';
import ClothingProduct from './pages/ClothingProduct';

function App() {
  return (
    <div>
      <Navigation/>

        <Routes>
          <Route path='/' element= { <Home /> } />
          <Route path='/clothing' element= { <Clothing /> } />
          <Route path='/prints' element= { <Prints /> } />
          <Route path='/clothing/clothingProduct' element= { <ClothingProduct /> } />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
