import React from 'react';
import GlobalStyle from './global-style';
import TestPage from './pages/TestPage';

function App() {
  return (
    <React.Fragment>
      <TestPage />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
