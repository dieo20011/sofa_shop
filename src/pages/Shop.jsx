import React, {useState} from 'react';
import CommoSection from '../components/UI/CommoSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
// import products from '../assets/data/products';
import ProductLists from '../components/UI/ProductLists';
import useGetData from '../custom-hooks/useGetData';

const Shop = () => {
  const {data: products} = useGetData('products');
  const [productsData, setProductsData] = useState({});
  const handleFilter = e => {
    const filterValue = e.target.value;
    if(filterValue==='sofa'){
      const filteredProducts = products.filter((item)=> item.category==='sofa');
      setProductsData(filteredProducts);
    }
    if(filterValue==='chair'){
      const filteredProducts = products.filter((item)=> item.category==='chair');
      setProductsData(filteredProducts);
    }
    if(filterValue==='mobile'){
      const filteredProducts = products.filter((item)=> item.category==='mobile');
      setProductsData(filteredProducts);
    }
    if(filterValue==='wireless'){
      const filteredProducts = products.filter((item)=> item.category==='wireless');
      setProductsData(filteredProducts);
    }
    if(filterValue==='watch'){
      const filteredProducts = products.filter((item)=> item.category==='watch');
      setProductsData(filteredProducts);
    }
  }
  const handleSearch = e => {
    const searchItem  = e.target.value;
    const searchedProducts = products.filter((item)=> item.productName.
    toLowerCase().includes(searchItem.toLowerCase()));
    setProductsData(searchedProducts);
  }
  return (
    <Helmet title='Shop'>
      <CommoSection title='Products'/>
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className='filter__widget'>
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search__box'>
                <input type='text' placeholder='Search......' onChange={handleSearch}/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              products.length === 0? <h1 className='text-center fs-4'>No products are found!</h1>
              : (<ProductLists data={products}/>)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Shop;