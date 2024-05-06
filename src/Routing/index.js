import React from 'react'

import { BrowserRouter, Link, Route, Routes,useSearchParams } from 'react-router-dom';

export default function Routing() {

    const [searchParams,setSearchParams] = useSearchParams();

  return (
    <>
    {/* http://localhost:3000/paramcheck?search=1kj */}
    <h2>Search Param = {searchParams.get('search')}</h2>
    <input placeholder='Set Param Value' onChange={e => setSearchParams({search : e.target.value})}/>
    </>
  )
}
