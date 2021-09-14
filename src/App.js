import React from 'react';
import './App.css';
import ContextProvider from './context/ContextProvider';

class App extends React.Component {
  render() {
    return (<ContextProvider />)
  }
}

export default App;
