import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400, color: '#f2b431' },
  { name: 'Group B', value: 300, color: '#64518a' },
  { name: 'Group C', value: 300, color: '#e98a2e' },
  { name: 'Group D', value: 478, color: '#20a5de' },
  { name: 'Group E', value: 189, color: '#00ff3a' },
];

export default class PieChartComponents extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={180}
          >
          {
            data01.map((data, index) => (
              <Cell key={`cell-${index}`} fill={data.color}/>
            ))
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
