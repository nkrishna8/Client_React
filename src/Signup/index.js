import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUpApi } from '../apiUtils';


export default function SignUp() {
    const [name, setName] = useState("");
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

    const isValid = name && username && password;

    const signUpUser = async (e) => {
        e.preventDefault();
        const payload = { name, username, password };
        const {data} = await signUpApi(payload);
        console.log("SignUpUserData++++++++",data);
    }



    return (
        <>
            <h1>SignUp</h1>
            <Container fluid>
                <Row>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 5 }}>
                        <Card className='p-4 mt-5 effect-shadow'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Name" onChange={e => setUserame(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>

                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}

                                <Button variant="outline-info" type="submit" disabled={!isValid} onClick={signUpUser}>Submit </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
