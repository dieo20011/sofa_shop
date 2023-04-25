import React from 'react';
import ProductCard from './ProductCard';

const ProductLists = ({data}) => {
  return (<>
  {
    data?.map((item,index)=>(
      <ProductCard item={item} key={index}/>
    ))
  }
    
  </>
  );
}

export default ProductLists