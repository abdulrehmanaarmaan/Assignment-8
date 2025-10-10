import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppChart = ({ratings}) => {

  console.log(ratings)

  // const extractedNames = ratings.map(rating => rating.name);
  // const extractedCounts = ratings.map(rating => rating.count)
// 
  // console.log(extractedNames)
  // console.log(extractedCounts)
   
    return (
        <div className='h-80'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={ratings}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="count" fill="#FF8811" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default AppChart;