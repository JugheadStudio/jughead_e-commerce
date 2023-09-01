import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navigation from './components/navbar';
import Footer from './components/footer';

import AdminConsole from "./components/AdminConsole";
import Signup from "./components/Signup";
import Login from "./components/Login";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Prints from './pages/Prints';
import ClothingProduct from './pages/ClothingProductTemplate';

function App() {

  const user = localStorage.getItem("token");
  const isAdminValue = localStorage.getItem("isAdmin");
  const isAdmin = JSON.parse(isAdminValue) || false;

  console.log('app.js isAdmin: ' + isAdmin);
  console.log('app.js user:' + user);
  console.log("isAdmin type:", typeof isAdmin);

  return (
    <div>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clothing' element={<Clothing />} />
        <Route path='/prints' element={<Prints />} />
        {/* <Route path='/clothing/clothingProduct' element={<ClothingProduct />} /> */}

        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />

        {user && isAdmin && <Route path="/admin" exact element={<AdminConsole />} />}

        {!isAdmin && <Route path="/admin" element={<Navigate replace to="/" />} />}

        {/* {!user && <Route path="/" element={<Navigate replace to="/login" />} />} */}
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        {/* <Route path="/admin" exact element={<AdminConsole />} /> */}

        {/* ========= Templates ========= */}
        <Route path="/clothing/clothingProduct/:productId" element={<ClothingProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
