import './App.css';
import ProductItem from './components/productItem';
import React from 'react';
import Icon from './components/icon.png';

function App() {
  return (
    <div className="App">
      <ProductItem title="ÁO PHÔNG NỮ RIB CỔ TRÒN" img={Icon} price="199.000đ" sale="Giảm 60%"/>
      <ProductItem title="ÁO PHÔNG NỮ KIỂU VẶN EO" img={Icon} price="299.000đ"/>
      <ProductItem title="QUẦN JEANS NAM SLIM FIT COTTON USA" img={Icon} price="599.000đ"/>
      <ProductItem title="ÁO SƠ MI NAM" img={Icon} price="299.000đ" sale="Giảm 40%"/>
    </div>
  );
}

export default App;
