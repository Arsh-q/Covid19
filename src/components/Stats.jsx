import React from 'react';
import bag from '../Logos/doctors-bag.png';
import cemetery from '../Logos/cemetery.png';
import coronavirus from '../Logos/coronavirus.png';
import recovery from '../Logos/recovery.png';
import hospital from '../Logos/hospital-bed.png';
import group from '../Logos/group.png';



const Stats = (props) => {
    return (<>
    <div className="stats">
        <div className="container pb-5">
            <h1 className='text-center'>{props.name}</h1>
            <div className="row mx-auto text-center">
                <div className="col-2 py-4 col-md-2"><img src={bag} /></div>
                <div className="col-10 col-md-4 py-4">Total cases
                <h2>{props.cases}</h2></div>
                <div className="col-2 py-4 col-md-2"><img src={coronavirus} /></div>
                <div className="col-10 col-md-4 py-4">Total active
                <h2>{props.active}</h2></div>
            </div>
            <div className="row mx-auto text-center">
            <div className="col-2 py-4 col-md-2"><img src={cemetery} /></div>
                <div className="col-10 col-md-4 py-4">Total deaths
                <h2>{props.deaths}</h2></div>
                <div className="col-2 py-4 col-md-2"><img src={recovery} /></div>
                <div className="col-10 col-md-4 py-4">Total recovered
                <h2>{props.recovered}</h2></div>
            </div>
            <div className="row mx-auto text-center">
                <div className="col-2 py-4 col-md-2"><img src={hospital} /></div>
                <div className="col-10 col-md-4 py-4">Critical
                <h2>{props.critical}</h2></div>
                <div className="col-2 py-4 col-md-2"><img src={group} /></div>
                <div className="col-10 col-md-4 py-4">Tests per million
                <h2>{props.testsPerOneMillion}</h2></div>
            </div>
        </div>
        </div>
    </>);
}

export default Stats;