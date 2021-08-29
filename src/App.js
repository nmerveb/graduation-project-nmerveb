import React from 'react';
import './App.css';
import RouterConfig from './navigation/RouterConfig';
import FormInfoProvider from './context/FormInfoContext';

function App() {
  return (
    <FormInfoProvider>
      <div className="App">
        <RouterConfig />
      </div>
    </FormInfoProvider>
  );
}

export default App;
