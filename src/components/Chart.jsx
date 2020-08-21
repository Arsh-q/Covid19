import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = (props) => {
    const deaths = props.deaths;
    const recovered = props.recovered;
    const cases = props.cases;
    const data = {
       labels: ['Deaths', 'Cases', 'Recovered'],
       datasets: [{
           data: [deaths, cases, recovered],
           backgroundColor: [
            '#dc3545',
            '#17a2b8',
            '#28a745'
            ],
            hoverBackgroundColor: [
            '#dc3545',
            '#17a2b8',
            '#28a745'
            ],
       }]
    }
    const options = {
        maintainAspectRatio: false,
        animationEnabled: true,
        responsive: true,
        legend: {
          position: 'top',
          labels: {
            boxWidth: 10
          }
        }
      }
    return(<>
        <div className='chart container pb-4'>
            <Pie data={data}
                options={options}
                width={250}
                height={250}
                 />
                
        </div>
    </>);
}

export default Chart;