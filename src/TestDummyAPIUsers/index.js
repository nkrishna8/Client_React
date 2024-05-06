import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.css';
import User from '../User';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cookieLoginActionCreator, myDataCheckActionCreator } from '../reducres/userReducer';

export default function TestDummyAPIUsers() {

    const APIURL = "https://dummyapi.io/data/v1/user?limit=10";
    const [userData, setUserData] = useState([])

    const { username, friendList, MyUserList } = useSelector(state => state);


    useEffect(() => {

        const fetchAllUser = async () => {
            const dataApi = await axios.get(APIURL, { headers: { "app-id": "6624a1cfbf8c6311d7126369" } });
            // console.log("Data++++",dataApi.data.data);
            setUserData(dataApi.data.data);
        }
        fetchAllUser();
    }, []);

    const dispatch = useDispatch();

    const loadDataToState = () => {
        dispatch(myDataCheckActionCreator());
    }

    // useEffect(() => {
    //     let newURL = baseURL + id;
    //     const fetchData = async () => {
    //         // const  dataApi = await axios.get(newURL);
    //         // console.log(dataApi.data);

    //         const { data } = await axios.get(newURL);
    //         console.log(data);
    //         setRest(data);

    //     }
    //     fetchData();
    // }, [id]);
    // console.log("userData State=>>>",userData);
    return (
        <>
            {/* <h1>Response Name : {rest==null ? "DATA HERE" : rest.name}</h1> */}
            {/* <h3>{userData[0]?.name}</h3> */}
            <h2>Hello {username}</h2>

            <Button onClick={loadDataToState}>LOAD</Button>
            {/* <Button onClick={cookieLoginActionCreator}>Cookie Login</Button> */}


            
            {MyUserList.length>0? MyUserList.map(item => (
                <div>
            <span><i>Name: {item.name}</i></span>
            <span><i> Phone: {item.phone}</i></span>
            <span><i> Email: {item.email}</i></span>
            </div>
            )):null}

            <Container fluid>
                <Row>
                    {userData.length > 0 ? userData.map(item => (<User data={item} key={item.id} isFriend={friendList.includes(item.id)} />)) : null}
                </Row></Container>
            <button> Dummy </button>
        </>
    )
}