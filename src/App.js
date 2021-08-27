import React from 'react';
import add from './services/fireStore';
import './App.css';

function App() {
  add();
  return <div className="App">deneme yazısı</div>;
}

export default App;
