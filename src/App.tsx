import React from 'react';
import GlobalStyle from './styles/global';
import Login from './components/login';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
};

export default App;
