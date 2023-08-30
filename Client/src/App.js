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
        <Route path='/clothing/clothingProduct' element={<ClothingProduct />} />


        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="login" />} />


        {user && isAdmin && <Route path="/" exact element={<AdminConsole />} />}

        <Route path="/admin" exact element={<AdminConsole />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />

        {user && isAdmin && <Route path="/" element={<Navigate replace to="/admin" />} />}
        {user && !isAdmin && <Route path="/" element={<Navigate replace to="/home" />} />}
        {!user && <Route path="/" element={<Navigate replace to="/login" />} />}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
