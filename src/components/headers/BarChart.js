import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data for the line chart with specified values
const data = [
  { name: '2021-2022', value: 100 },
  { name: '2022-2023', value: 259 },
  { name: '2023-2024', value: 455 },
  { name: '2024-2025', value: 600 },
];

const BasicLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 'dataMax + 100']} /> {/* Set Y-axis to start from 0 */}
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BasicLineChart;
