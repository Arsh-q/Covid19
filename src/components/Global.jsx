import React from 'react';
import styled from 'styled-components';

const Global = (props) => {
    return (<>
  <GlobalDiv className="col-10 col-md-3 mx-auto py-3">
    <div className="card" style={{backgroundColor:props.color}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.case}</p>
        <h6 className="card-subtitle mb-2">Last Updated</h6>
        <p className="card-text">{props.date}</p>
      </div>
    </div>
  </GlobalDiv>
      
    </>);
}

export default Global;

const GlobalDiv = styled.div `
  color:white;
.card-subtitle{
  color: black;
}
`;