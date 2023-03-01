import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const handleCheckChange = (isChecked) => {
    if(!isChecked) {
        setProducts(products.filter(product => product.inStock === true));
    }
    else {
        setProducts(jsonData);
    }
  }

  const handleSearchValue = (searchValue) => {
    setProducts(jsonData.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())));
  }

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleCheckChange={handleCheckChange} handleSearchValue= {handleSearchValue}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;