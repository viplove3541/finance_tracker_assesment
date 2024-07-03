import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin: 1.5rem auto;
  background: linear-gradient(135deg, #56ccf2, #2f80ed); /* Updated gradient colors */
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const COLORS = ['#FF4500', '#FF6347', '#FF7F50', '#FFD700', '#32CD32', '#1E90FF'];

const CategoryBreakdown = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === 'expense');
  const categories = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const data = Object.keys(categories).map((key, index) => ({
    name: key,
    value: categories[key],
    color: COLORS[index % COLORS.length],
  }));

  return (
    <Container>
      <Title>Category Breakdown</Title>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true} // Enable animation
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={60}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Container>
  );
};

export default CategoryBreakdown;


