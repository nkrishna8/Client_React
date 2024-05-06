import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';
import { useSelector } from 'react-redux';


export default function Loader() {
    const { loading } = useSelector(state => state);

    return (
        <>
            {loading?<Spinner className="loaderStyle" animation="border" role="status">
                {/* <span className="visually-hidden">Loading...</span> */}
            </Spinner>:null}

        </>
    )
}
