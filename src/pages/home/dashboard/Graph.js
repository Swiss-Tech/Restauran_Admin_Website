import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

          title: {
      display: false,
     
    },
    },
    elements: {
      point: {
        radius: 1
      }
    },
    scales: {
         x: {
        grid: {
          display: false
        },
       
      },
      yAxes: [
      {
        
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
    }
  };


const labels = [ 'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec',];



export const graphData ={
    
        labels: labels,
        datasets: [
          {
            id: 1,
            label: '',
            data: [100,200 , 100,250,200,350,250,450,500,400,200,300],
            borderColor: '#7B3EFD',
            backgroundColor: '#7B3EFD',
            lineTension: 0.4,
            borderWidth:4,  
            
          },
         
          {
            id: 2,
            label: '',
            data: [0, 50, 80,200,250,200,100,100,200,300,300,100],
            borderColor: ' #FECB16',
            backgroundColor: ' #FECB16',
            lineTension: 0.4,  
            borderWidth:4,  
          },
        ],
      
}

export function Graph() {
  return <Line options={options} data={graphData}/>
   
  ;
}
