import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
   LinearScale,
   BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
    plugins: {
    legend: {
      position: 'top',   // lable position left/right/top/bottom
      labels: {
        boxWidth: 0,   
         pointStyle:'circle'
      }
    },
  },
  elements: {
    point: {
      radius: 1
    }
  },
  scales: {
    x: {
      display: true,        // show/ hide x-axis
      grid: {
        display: false      // show/hide grid line in x-axis
      },
    },
    y: {
      display: false,      // same as x-axis
      grid: {
        display: false
      }
    }
  }
};

const labels = ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12"];

export const data ={
    
    labels: labels,
    datasets: [
      
        
     
      {
        id: 2,
        label: '',
        data: [20, 50, 80,200,250,200,100,100,200,300,300,100],
        borderColor: ' #FECB16',
        backgroundColor: ' #FECB16',
        barThickness: 6,  
      },
    ],
  
}


export  function BarGraph() {
  return (
    <div>
      <Bar
        data={data}
        options={options}
        width={'500px'}
        height={'180px'}
      />
    </div>
  );
}