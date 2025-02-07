import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${
  "" /* html{
  font-size:100%;
} */
}
body {
  font-family: "Poppins", serif;
  background: #0c0914;
  color: #ffffff;
}
button {
    font-family: 'Poppins', serif;
    font-weight: 500;
    padding: .4rem 1.2rem;
    background-color: #0303CE;
    color: #ffffff;
    border-radius: 50rem; 
    border: transparent;
    cursor: pointer;
    transition: 0.25s;
 }
button:hover{
  background-color: #000094;
}

/* Container styling */
.table-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Table styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

/* Header styling */
th {
  background-color: #007bff;
  color: white;
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

/* Row styling */
td {
  padding: 10px;
  border: 1px solid #ddd;
}

/* Alternating row colors */
tr:nth-child(even) {
}

/* Hover effect */
tr:hover {
  transition: 0.3s;
}

`;

export default GlobalStyle;
