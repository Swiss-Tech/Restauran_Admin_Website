import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
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





export  function BarGraph() {

  const [customerData, setCustomerData] = useState();
  const data ={
    
    labels: labels,
    datasets: [
      
        
     
      {
        id: 2,
        label: '',
        data: customerData ? [customerData.january,customerData.february , customerData.march,customerData.april,customerData.may,customerData.june,customerData.july,customerData.august,customerData.september,customerData.october,customerData.november,customerData.december] :[0,0,0,0,0,0,0,0,0,0,0,0,],
        borderColor: ' #FECB16',
        backgroundColor: ' #FECB16',
        barThickness: 6,  
      },
    ],
  
}

  const accountController = useSelector((state)=>state.account);

  useEffect(()=>{
    if(accountController.restaurantInformation.monthlyCustomers){
     
       setCustomerData(accountController.restaurantInformation.monthlyCustomers)
      
    }
  
    
  })
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