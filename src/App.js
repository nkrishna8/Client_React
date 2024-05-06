import logo from './logo.svg';
import './App.css';
import ComponentA from './Component';
import FC_Users from './FC_Users';
import TestDummyAPIUsers from './TestDummyAPIUsers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Navigate, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import Component from './Component';
import RandomImage from './RandomImage';
import Routing from './Routing';
import MyNavBar from './MyNavBar';
import Login from './Login';
import SignUp from './Signup';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import { cookieLoginActionCreator } from './reducres/userReducer';
import Toast from './Toast';
import { Button } from 'react-bootstrap';
import Loader from './Loader';
import CreatePost from './Createpost/index';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(cookieLoginActionCreator());
  }, [])

  const order = [
    {
      "order_id": "ORD001",
      "customer_name": "John Doe",
      "product": "Laptop",
      "quantity": 1,
      "price": 1200.50,
      "status": "Delivered"
    },
    {
      "order_id": "ORD002",
      "customer_name": "Jane Smith",
      "product": "Smartphone",
      "quantity": 2,
      "price": 800.00,
      "status": "Shipped"
    },
    {
      "order_id": "ORD003",
      "customer_name": "Bob Johnson",
      "product": "Headphones",
      "quantity": 1,
      "price": 75.99,
      "status": "Pending"
    }];
  const name = "Krishna";

  const [count, setCount] = useState(0)

  const clickFun = () => {
    setCount(count + 1)
  }

  const incrementCount = () => {
    console.log("Hit+++++++" + 8 + 9);
  };
  // console.log(order[0].customer_name,"(99++++++++");

  // const checkData=()=>{
  //   console.log("++++KKKKKKKKKKK");
  //   order.forEach = (item => {
  // console.log(item.customer_name)
  // });
  // }
  const checkData = () => {
    console.log("++++KKKKKKKKKKK");
    order.map(item => {
      console.log(item.customer_name);
    });
  };


  return (
    <>
            {/* {mydata.length>0?<h2>Hello There {mydata[0].name}</h2>:null} */}

      <BrowserRouter>

        <MyNavBar />
        <Toast/>
        <Loader/>
        {/* Demo Navbar to check routing Proper Working*/}
        <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Link to=''>Home</Link><br />
          <Link to='comp'>Component</Link><br />
          <Link to='fcusercomp'>FC_Users</Link><br />
          <Link to='paramcheck'>Param Check</Link><br />

          <Link to='parent/child-route1'>Parent Child Route1</Link><br />
          <Link to='parent/randomimg'>Parent Child Route2 (Random Image)</Link><br />
          <Link target="_blank" to="https://insights.workwave.com/" >Test</Link>

        </section>

        <Routes>
          <Route path='/' element={<TestDummyAPIUsers />} />
          <Route path='/comp' element={<Component />} />
          <Route path='/fcusercomp' element={<FC_Users />} />
          <Route path='/paramcheck' element={<Routing />} />
          <Route path='/parent'>
            <Route path='child-route1' element={<Component />} />
            <Route path='randomimg' element={<RandomImage />} />
          </Route>
          <Route path="/counter" element={<Counter />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post' element={<CreatePost />} />
          <Route path="/*" element={<TestDummyAPIUsers />} />

          {/* <div className="App"> */}
          {/* <header className="App-header"> </header> */}
          {/* <p> Total count : {count}</p> */}
          {/* {order.map = (item => {<p>{item.customer_name}</p>})} */}
          {/* {order.map(item => (
        <>
        <p>{item.customer_name}{item.price}</p>
        </>
))} */}

          {/* <button onClick={checkData}>CheckDATA</button> */}
          {/* <ComponentA data={name} clickFun={clickFun}></ComponentA> */}
          {/* <ComponentA></ComponentA> */}
          {/* <FC_Users></FC_Users> */}
          {/* <TestDummyAPIUsers></TestDummyAPIUsers> */}

          {/* </div> */}
        </Routes>
      </BrowserRouter>

      {/* <RandomImage/> */}

      {/* {mydata.length>0? mydata.map(item => (
                <div>
            <span><i>{item.firstName}</i></span>
            <img src={item.picture} alt="User Profile" className="" />
            </div>
            )):null}  */}
    </>
  );
}

export default App;
