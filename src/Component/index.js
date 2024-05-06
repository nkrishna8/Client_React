import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Component() {

    // let axios=require(`axios`);

    const [name, setName] = useState('KRISHNA');
    const [id, setId] = useState(2);
    const [rest, setRest] = useState(null);

    // console.log("IDDDDD++++",id);
    let response = "";
    const baseURL = "https://jsonplaceholder.typicode.com/users/";

    useEffect(() => {
        axios.get(baseURL)
            .then(res => {
                console.log("Response++++", res.data);
            })
    }, []);

    useEffect(() => {
        let newURL = baseURL + id;
        console.log(newURL);
        // axios.get(baseURL+id)
        // axios.get(newURL)
        // .then(res => {
        //   console.log("Response++++",res.data);
        // })

        // const fetchData = async () => {
        //     // const  dataApi = await axios.get(newURL);
        //     // console.log(dataApi.data);

        //     const  {data}  = await axios.get(newURL);
        //     console.log(data);
        //     setRest(data);

        // }
        // fetchData();

    }, [id]);

    const hitButton = () => {
        console.log("Retrieve All User===>>>");
        setName("Madhab");
        response = axios.get(`https://jsonplaceholder.typicode.com/users`);
        response.then(val => {
            console.log(val.data)
        });
    }


    return (
        <>
            <h1>Name : {name}</h1>
            {/* <h1>Response Name : {rest==null ? "Running" : rest.name}</h1> */}
            {/* <input type="number" max={10} min={1} value={id} onChange={e => setId(e.target.value)} /> */}
            <br></br>
            <button style={{
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '8px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
      }} onClick={hitButton}>Retrieve All User</button>
        </>
    )
}
