import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import {createGlobalStyle} from 'styled-components';
import Main from './components/map/Main';
import {DraggedProvider } from './context/DraggedElement';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <DraggedProvider>
        <Sidebar />
        <Main/>
      </DraggedProvider>
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
