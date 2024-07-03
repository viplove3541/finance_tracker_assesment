import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #56ccf2, #2f80ed); /* Updated gradient colors */
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 2rem auto;
  color: #fff;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ced4da;
  border-radius: 6px;
  background: #fff;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.active ? '#ff4500' : '#6ab04c')}; /* Conditional background color based on props */
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  margin-right: 10px; /* Add margin between buttons */

  &:hover {
    background-color: ${(props) => (props.active ? '#ff6347' : '#7bc472')}; /* Hover effect based on active prop */
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ced4da;
  border-radius: 6px;
  background: #fff;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const AddTransaction = ({ onAddTransaction }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ type, amount: parseFloat(amount), category, date });
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </Select>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <Input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <div>
        <Button type="submit" active={type === 'income'}>
          Add Income
        </Button>
        <Button type="submit" active={type === 'expense'}>
          Add Expense
        </Button>
      </div>
    </Form>
  );
};

export default AddTransaction;

