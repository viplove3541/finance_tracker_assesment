import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #e9ecef;
  }

  h1, h3 {
    margin: 0;
  }

  input, select, button {
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    background: #343a40;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #495057;
  }

  @media (max-width: 768px) {
    body {
      padding: 1rem;
    }

    input, select, button {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
