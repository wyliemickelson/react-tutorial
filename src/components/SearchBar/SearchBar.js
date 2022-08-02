import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ( {products} ) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  }

  const handleClearInput = () => {
    setInputValue('');
  }

  const hasInput = inputValue !== '';
  const filteredProducts = products.filter(product => product.includes(inputValue));

  return (
    <div>
      <input type="text" value={inputValue}
      onChange={handleInputChange} />
      {hasInput && <button onClick={handleClearInput} >Clear Input</button>}
      <ul>
        {filteredProducts.map((product) => <li key={product}>{product}</li>)}
      </ul>
    </div>
  )
}

export default SearchBar;