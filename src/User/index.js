import React from 'react'
import './styles.css';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFriendActionCreator } from '../reducres/userReducer';

export default function User(props) {

    const dispatch = useDispatch();
    const { username } = useSelector(state => state);

    console.log("props==>>>+++", props.data);
    let userData = props.data;
    let fullName = userData.firstName + userData.lastName;

    const addFriend = () => {
        console.log("Hitttttttt+++++");
    };
    const unFriend = () => {
        console.log("Hitttttttt+++++");
    };

    return (

        <>
            <Col xs={{ span: 10, offset: 1 }} sm={6} lg={4} xl={3}>
                <Card className="user">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body className='user-card'>
                        <img src={userData.picture} alt="ProfileImage" height="100px" width="100px" />
                        <div className="info-card">
                            <div><b>{fullName}</b></div>
                            {props.isFriend ? <Button variant="outline-danger" onClick={unFriend}>Unfriend</Button> : <Button
                                variant="outline-primary" onClick={() => dispatch(addFriendActionCreator({ id: userData.id, name: fullName, username: { username } }))}>Add Friend</Button>}

                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>

        // <div className="container-card">
        //        <img src={userData.picture} alt="ProfileImage" className="" />
        //        <div className="info-card">
        //   <span className="">{userData.firstName}</span>
        //   {/* <button></button> */}
        //   <Button variant="outline-info">Add Friend</Button>
        //   </div>
        // </div>
    )
}
