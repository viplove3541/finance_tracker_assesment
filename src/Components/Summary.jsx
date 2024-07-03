import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.5rem;
  background: linear-gradient(135deg, #56ccf2, #2f80ed); /* Updated gradient colors */
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 1.5rem auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <Container>
      <Title>Summary</Title>
      <Paragraph>Total Income: ${totalIncome.toFixed(2)}</Paragraph>
      <Paragraph>Total Expenses: ${totalExpenses.toFixed(2)}</Paragraph>
      <Paragraph>Balance: ${balance.toFixed(2)}</Paragraph>
    </Container>
  );
};

export default Summary;
