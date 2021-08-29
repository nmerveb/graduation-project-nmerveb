import React from 'react';
import './App.css';
import RouterConfig from './navigation/RouterConfig';
import FormInfoProvider from './context/FormInfoContext';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <FormInfoProvider>
        <div className="App">
          <RouterConfig />
        </div>
      </FormInfoProvider>
    </AuthProvider>
  );
}

export default App;
