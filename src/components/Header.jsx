import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (<>
        <HeaderDiv>
            <h1>Covid-19 Tracker</h1>
        </HeaderDiv>
    </>);
}

export default Header;

const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    text-align: center;
    background: royalblue;
    min-height: 8vh;
    color: gainsboro;
`;