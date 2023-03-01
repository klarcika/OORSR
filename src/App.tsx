import React from 'react';
import './App.css';
import Main from './Components/Telo/Telo';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div className="App">
      <Header> To je header</Header>
        <Main> to je Main</Main>
        <Footer> to je footer</Footer>
      </div>
    </div>
  );
}

export default App;



/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */