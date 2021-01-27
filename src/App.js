import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import {createGlobalStyle} from 'styled-components';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default App;
