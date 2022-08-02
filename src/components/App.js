import React, { useEffect, useState } from 'react';
import CountBtn from './CountBtn';
import SearchBar from './SearchBar/SearchBar';

const App = () =>{

  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsArr => {
        const newProductsState = productsArr.map(product => product.title);
        setProductsState(newProductsState);
      })
  }, [])

  const hasProducts = productsState.length > 0;

  return (
    <div>
      {hasProducts ? <SearchBar products={productsState} /> : 'Loading...'}
    </div>
  )
}

export default App;