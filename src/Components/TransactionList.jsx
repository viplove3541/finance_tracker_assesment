import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  max-width: 600px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  padding: 1rem;
  background: linear-gradient(135deg, #56ccf2, #2f80ed); /* Updated gradient colors */
  color: #fff;
  margin-bottom: 1rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DateCategory = styled.div`
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const AmountType = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const TransactionList = ({ transactions }) => (
  <List>
    {transactions.map((transaction) => (
      <ListItem key={transaction.id}>
        <DateCategory>
          <strong>{transaction.date}</strong> - {transaction.category}
        </DateCategory>
        <AmountType>
          ${transaction.amount.toFixed(2)} ({transaction.type})
        </AmountType>
      </ListItem>
    ))}
  </List>
);

export default TransactionList;
