import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Country = (props) => {

    useEffect(() => {
        props.search(query);
        // setQuery('');
    },[]);
  const [query, setQuery] = useState('India');
    const handleSearch= (e) => {
        e.preventDefault();
        props.search(query);
        setQuery('');
    }
    return (<>
        <div className='country' style={{minHeight:'30vh'}}>
            <h1>Country Status</h1>
            <div className="search">
                <input value={query} onChange={(e) => {setQuery(e.target.value);}}  type="text" placeholder='Search a Country' />
                <button className='btn btn-outline-primary' onClick={handleSearch}>SEARCH</button>
            </div>
        </div>
    </>);
}

export default Country;

// const HeaderDiv = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content:center;
//     align-items:center;
//     text-align: center;
//     background: royalblue;
//     min-height: 8vh;
//     color: gainsboro;
// `;