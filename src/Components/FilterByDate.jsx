import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #7b68ee, #00bfff); /* Updated gradient colors */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adjusted box shadow */
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
  background-color: #ff4500;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347;
  }
`;

const FilterByDate = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilter({ startDate, endDate });
  };

  return (
    <FilterContainer>
      <Input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Button onClick={handleFilter}>Filter</Button>
    </FilterContainer>
  );
};

export default FilterByDate;

