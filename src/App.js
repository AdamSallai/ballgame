import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import {createGlobalStyle} from 'styled-components';
import Main from './components/map/Main';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar />
      <Main/>
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
