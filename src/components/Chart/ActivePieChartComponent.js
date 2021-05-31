import React, { useState, useCallback } from "react";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: 'Group A', value: 400, color: '#f2b431' },
    { name: 'Group B', value: 300, color: '#64518a' },
    { name: 'Group C', value: 300, color: '#e98a2e' },
    { name: 'Group D', value: 478, color: '#20a5de' },
    { name: 'Group E', value: 189, color: '#00ff3a' },
  ];

const renderActiveShape = props => {
  debugger;
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    midAngle,
    color
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 140) * cos;
  const sy = cy + (outerRadius - 140) * sin;
  return (
    <Sector
      cx={sx}
      cy={sy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={color}
    />
  );
};  

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const onMouseOver = useCallback((data, index) => {
    setActiveIndex(index);
  }, []);
  const onMouseLeave = useCallback((data, index) => {
    setActiveIndex(null);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart height={400}>
        <Pie
          activeIndex={activeIndex}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={160}
         // fill="#8884d8"
          fill="#0395d3"
          activeShape={renderActiveShape}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
            {
            data.map((data, index) => (
              <Cell key={`cell-${index}`} fill={data.color}/>
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
