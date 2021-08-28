import React from 'react';
import './App.css';
import RouterConfig from './navigation/RouterConfig';
import { AddApplication } from './services/fireStore';

function App() {
  const a = {
    name: 'testAddApplication',
    surname: 'testAddApplication',
    TC: 'testAddApplication',
    age: 'testAddApplication',
    address: 'testAddApplication',
    reason: 'testAddApplication',
  };

  console.log(AddApplication(a));
  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
}

export default App;
