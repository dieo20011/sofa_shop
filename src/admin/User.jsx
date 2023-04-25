import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import {toast} from 'react-toastify'

const User = () => {
    const {data: userData, loading} = useGetData('users');
    const deleteUser = async(id) =>{
        await deleteDoc(doc(db, 'users',id));
        toast.success('Delete User success');
    }
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'><h4 className='fw-bold'>Users</h4></Col>
                <Col lg='12' className='pt-5'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData?.map(users=>(
                                    <tr key={users.id}>
                                        <td><img src={users.photoURL} alt='a'/></td>
                                        <td>{users.displayName}</td>
                                        <td>{users.email}</td>
                                        <td>
                                            {" "}
                                            <button onClick={()=>{deleteUser(users.uid)}} className='btn btn-danger'>
                                                Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default User