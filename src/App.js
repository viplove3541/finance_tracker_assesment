import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppProvider, useAppContext } from "./context";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import CategoryBreakdown from "./components/CategoryBreakdown";
import FilterByDate from "./components/FilterByDate";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    135deg,
    rgba(84, 58, 183, 0.9),
    rgba(0, 172, 193, 0.9)
  ); /* Gradient background */
  border-radius: 16px; /* Rounded corners for the container */
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37); /* Box shadow for depth */
  min-height: 100vh;
  color: #fff; /* Text color */
  overflow-x: hidden; /* Prevent horizontal scrolling */

  @media (min-width: 768px) {
    padding: 4rem;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;

const ChartContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const App = () => {
  const { state, dispatch } = useAppContext();
  const [filteredTransactions, setFilteredTransactions] = useState(
    state.transactions
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await axios.get("http://localhost:3001/transactions");
        dispatch({ type: "SET_TRANSACTIONS", payload: response.data });
        setFilteredTransactions(response.data);
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddTransaction = async (transaction) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/transactions",
        transaction
      );
      dispatch({
        type: "SET_TRANSACTIONS",
        payload: [...state.transactions, response.data],
      });
      setFilteredTransactions([...state.transactions, response.data]);
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
    }
  };

  const handleFilter = ({ startDate, endDate }) => {
    const filtered = state.transactions.filter((t) => {
      return t.date >= startDate && t.date <= endDate;
    });
    setFilteredTransactions(filtered);
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  }

  return (
    <AppContainer>
      <Heading>Personal Finance Tracker</Heading>
      <div style={{ maxWidth: "100%" }}>
        <FilterByDate onFilter={handleFilter} />
        <AddTransaction onAddTransaction={handleAddTransaction} />
      </div>
      <div style={{ maxWidth: "100%" }}>
        <TransactionList transactions={filteredTransactions} />
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Summary transactions={filteredTransactions} />
      </div>
      <ChartContainer>
        <CategoryBreakdown transactions={filteredTransactions} />
      </ChartContainer>
    </AppContainer>
  );
};

export default App;
