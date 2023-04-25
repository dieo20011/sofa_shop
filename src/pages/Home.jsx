import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import Clock from "../components/UI/Clock";
import products from '../assets/data/products';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png';
import '../styles/home.css';
import Services from "../services/Services";
import ProductLists from "../components/UI/ProductLists";
import useGetData from '../custom-hooks/useGetData';

const Home = () => {
  const {data: products} = useGetData('products');
  const [trendingProducts, setTrendingProducts]=useState([]);
  const [bestSalesProducts, setbestSalesProducts]=useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(()=>{
    const filterdTrendingProducts = products.filter((item) => item.category === 'chair');
    const filterdBestSalesProducts = products.filter((item) => item.category === 'sofa');
    const filterdMobileProducts = products.filter((item) => item.category === 'mobile');
    const filterdWirelesssProducts = products.filter((item) => item.category === 'wireless');
    const filterdPopularProducts = products.filter((item) => item.category === 'watch');
    setTrendingProducts(filterdTrendingProducts);
    setbestSalesProducts(filterdBestSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelesssProducts);
    setPopularProducts(filterdPopularProducts);
  },[products]);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Choose for your dream</h2>
                <p>
                  Teacher a word that takes me back to the start, The start of
                  my very first day at school. I tightly clenched my mother
                  hand. I was afraid to let her go,
                </p>
                <motion.button whileHover={{scale: 1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <motion.div whileHover={{scale: 1.1}} className="hero__img">
                <img src={heroImg} alt="hero"/>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductLists data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
        <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductLists data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lq='6' md='12' className="count__down-col">
              <div className="clock__top-content">
                <h4>Limited Offer</h4>
                <h3>Quanlity Armchair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>
            </Col>
            <Col lq='6' md='12' className="text-end counter__img">
              <img src={counterImg} alt=""/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
          <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductLists data={mobileProducts}/>
            <ProductLists data={wirelessProducts}/>
          </Row>
        </Container>
      </section>
      <section className="popular__category">
      <Container>
          <Row>
          <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">Best seller </h2>
            </Col>
            <ProductLists data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
