import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
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
import Loader from '../../reusable-components/Loader';



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





export function Graph() {
  const [revenueData, setRevenuData] = useState();
  const [orderData, setOrderData] = useState();

  const accountController = useSelector((state)=>state.account);

  console.log(accountController.restaurantInformation.monthlyRevenus)
  useEffect(()=>{
    if(accountController.restaurantInformation.monthlyOrders){
     
       setOrderData(  accountController.restaurantInformation.monthlyOrders)
      
    }
    if(accountController.restaurantInformation.monthlyRevenus){
      setRevenuData(accountController.restaurantInformation.monthlyRevenus)
    }
    
  })
 //  console.log(accountController.restaurantInformation.monthlyOrders);
    const graphData ={
    
        labels: labels,
        datasets: [
          {
            id: 1,
            label: '',
            data: revenueData ? [revenueData.january,revenueData.february , revenueData.march,revenueData.april,revenueData.may,revenueData.june,revenueData.july,revenueData.august,revenueData.september,revenueData.october,revenueData.november,revenueData.december] :[0,0,0,0,0,0,0,0,0,0,0,0,],
            borderColor: '#7B3EFD',
            backgroundColor: '#7B3EFD',
            lineTension: 0.4,
            borderWidth:4,  
            
          },
         
          {
            id: 2,
            label: '',
            data: orderData ? [orderData.january,orderData.february , orderData.march,orderData.april,orderData.may,orderData.june,orderData.july,orderData.august,orderData.september,orderData.october,orderData.november,orderData.december] :[0,0,0,0,0,0,0,0,0,0,0,0,],
            borderColor: ' #FECB16',
            backgroundColor: ' #FECB16',
            lineTension: 0.4,  
            borderWidth:4,  
          },
        ],
      
}

  return (
      <Line options={options} data={graphData}/>
  )
   
  ;
}
