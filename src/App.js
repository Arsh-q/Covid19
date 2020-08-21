import React from 'react';
import Global from './components/Global';
import { useState } from 'react';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import styled from 'styled-components';
import Country from './components/Country';
import Stats from './components/Stats';
import Chart from './components/Chart';


const App = () => {
  const [globalDeath, setGlobalDeath] = useState();
  const [globalRecover, setGlobalRecover] = useState();
  const [globalCase, setGlobalCase] = useState();
  const [date, setDate] = useState();
  const [active, setActive] = useState();
  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [tests, setTests] = useState();
  const [country, setCountry] = useState();
  const [critical, setCritical] = useState();
  const [error, setError] = useState(false);
  const [mess, setMess] = useState();

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
    .then(resp => resp.json())
    .then(resp => {
      // console.log(resp);
      const a = resp.lastUpdate;
      const lastdate = new Date(a).toLocaleString();
      setDate(lastdate);
      setGlobalDeath(resp.deaths.value);
      setGlobalRecover(resp.recovered.value);
      setGlobalCase(resp.confirmed.value);
    });
    
  },[]);

const search = (query) => {
  fetch(`https://corona.lmao.ninja/v2/countries/${query}?yesterday=true&strict=true&query`)
  .then(resp => resp.json())
  .then(resp => {
    if(resp.message){
      setError(true);
      setMess(resp.message);
    console.log(resp.message);
    } else {
        setActive(resp.active);
        setCases(resp.cases);
        setTests(resp.testsPerOneMillion);
        setCritical(resp.critical);
        setDeaths(resp.deaths);
        setCountry(resp.country);
        setRecovered(resp.recovered);
    console.log(resp);
    setError(false);
    setMess('');
    }
});
}
  return(<>
    <Header />
    <div className='main'> 
    <h1 className='text-center'>Global Status</h1>
    <div className="row mx-auto pt-3 container-fluid">
         <Global color='#17a2b8' title='Confirmed' date={date} case={globalCase} />
         <Global color='#28a745' title='Recovered' date={date} case={globalRecover} />
         <Global color='#dc3545' title='Deaths' date={date} case={globalDeath} />
    </div>
  </div>
  <Country search={search}/>
  {error ? <div className='error'> 
    {mess}
  </div> : <div>
    <Stats active={active} 
          cases={cases}
          deaths={deaths}
          recovered={recovered}
          testsPerOneMillion={tests}
          critical={critical}
          name={country} />
      <Chart cases={cases}
             deaths={deaths}
             recovered={recovered} />
  </div>}
  </>);

}
export default App;
