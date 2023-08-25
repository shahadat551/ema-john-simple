import './App.css';
import { useEffect, useState } from "react";
import Header from './compoments/Header/Header';
import Shop from './compoments/Shop/Shop';
import Product from './compoments/product/Product';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}



export default App;
