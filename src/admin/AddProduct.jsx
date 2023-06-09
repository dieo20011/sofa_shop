import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import {toast} from 'react-toastify';
import {db, storage} from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState('');
  const navigate = useNavigate();

  const addProduct = async(e) =>{
    e.preventDefault();
    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterProductImg
    // };
    try {
      const docRef = await collection(db, 'products');
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      uploadTask.on(()=>{
        toast.error('images not uploaded!!!');
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(dowloadURL)=>{
          await addDoc(docRef, {
            productName: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: dowloadURL
          })
        })
      }
      );
      toast.success("Add Product Success");
      navigate("/dashboard/all-product");
    } catch (error) {
      toast.error("Product not add");
    }
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className='mb-5'>Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className='form__group'>
                <span>Product title</span>
                <input type='text' placeholder='Double sofa' value={enterTitle} onChange={e=> setEnterTitle(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type='text' placeholder='lorem.....' value={enterShortDesc} onChange={e=> setEnterShortDesc(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Description</span>
                <input type='text' placeholder='Description.....' value={enterDescription} onChange={e=> setEnterDescription(e.target.value)} required/>
              </FormGroup>
              <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className='form__group w-50'>
                <span>Price</span>
                <input type='price' placeholder='$100' value={enterPrice} onChange={e=> setEnterPrice(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form__group w-50'>
                <span>Category</span>
                <select className='w-100 p-2' value={enterCategory} onChange={e=> setEnterCategory(e.target.value)} required>
                  <option value='chair'>Chair</option>
                  <option value='sofa'>Sofa</option>
                  <option value='mobile'>Mobile</option>
                  <option value='watch'>Watch</option>
                  <option value='wireless'>Wireless</option>
                </select>
              </FormGroup>
              </div>
              <div>
                <FormGroup className='form__group'>
                  <span>Product Image</span>
                  <input type='file' onChange={e=> setEnterProductImg(e.target.files[0])} required/>
                </FormGroup>
              </div>
              <button className='buy__btn' type='submit'>Add Product</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProduct