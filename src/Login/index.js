import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginApi } from '../apiUtils';
import { useDispatch, useSelector } from 'react-redux';
import { loginActionCreator } from '../reducres/userReducer';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const  data  = useSelector(state => state);

    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

    const isValid = username && password;
    useEffect(() => {
        if (data.name) {
            navigate(-1);
        }
    }, [data.name])

    //Hitting Reducer Login
    const loginUserByReducer = async (e) => {
        e.preventDefault();
        // console.log("loginUserByReducerloginUserByReducer hit");
        let payload = { username, password };
        dispatch(loginActionCreator(payload));
    }

    //Normal Page Login by Hitting from Here
    const loginUser = async (e) => {
        console.log("LOGINUSER==++++", username, password);
        e.preventDefault();
        const payload = { username, password };
        const { data } = await loginApi(payload);
        console.log("LoginUser====>>>", data);
    }




    return (
        <>
            {data.name? <h3>Login as {data.name}</h3>:null}

            <Container fluid>
                <Row>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 5 }}>
                        <Card className='p-4 mt-5 effect-shadow'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Name" onChange={e => setUserame(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>

                                <Button variant="outline-info" type="submit" disabled={!isValid} onClick={loginUserByReducer}>Login </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
