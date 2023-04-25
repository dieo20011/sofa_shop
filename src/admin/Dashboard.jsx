import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/dashboard.css';
import useGetData from '../custom-hooks/useGetData';

const Dashboard = () => {
  const {data: products} = useGetData('products');
  const {data: users} = useGetData('users');
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <div className='revenue__box'>
                <h5>Total Sales</h5>
                <span>$7890</span>
              </div>
            </Col>
            <Col lg='3'>
            <div className='order__box'>
                <h5>Order</h5>
                <span>$789</span>
              </div>
            </Col>
            <Col lg='3'>
            <div className='product__box'>
                <h5>Total Product</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col lg='3'>
            <div className='user__box'>
                <h5>Total User</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard