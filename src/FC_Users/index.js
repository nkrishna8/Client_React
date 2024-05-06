import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function FC_Users() {

    const baseURL = "https://jsonplaceholder.typicode.com/users/";
    const [rest, setRest] = useState(null);
    const [id, setId] = useState(2);
    const [userData, setUserData] = useState([])


    useEffect(() => {
        const fetchAllUser = async () => {
            const { data } = await axios.get(baseURL);
            // console.log("Data++++",data);
            setUserData(data);
        }
        fetchAllUser();
    }, []);

    useEffect(() => {
        let newURL = baseURL + id;
        const fetchData = async () => {
            // const  dataApi = await axios.get(newURL);
            // console.log(dataApi.data);

            const { data } = await axios.get(newURL);
            // console.log(data);
            setRest(data);

        }
        fetchData();
    }, [id]);
    // console.log("userData State=>>>",userData);
    const clickMe = () => {
        console.log("PPPPPPP>>>>>");
    }
    return (
        <>
              <p>Fetch User name by Id increment or Decrement </p>
            <h1>Updated Name Here: {rest == null ? "DATA HERE" : rest.name}</h1>

            <input style={{
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                fontSize: '16px',
                transition: '0.3s',
                outline: 'none',
            }}
                placeholder="Enter your text" type="number" max={10} min={1} value={id} onChange={e => setId(e.target.value)} />


            {/* <h3>{userData[0]?.name}</h3> */}


            {/* Print All User Data */}
            <h2>Users Are</h2>
            {userData.length > 0 ? userData.map(item => (<p>{item.id}  {item.name}   {item.phone}</p>)) : null}

      
         

            <button
                style={{
                    backgroundColor: '#f44336', /* Red */
                    border: 'none',
                    color: 'white',
                    padding: '12px 24px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '14px',
                    margin: '8px 4px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
                    transition: '0.3s',
                    marginBottom: '40px',
                }}
                onClick={clickMe}
            >
                Click Me
            </button>
        </>
    )
}
