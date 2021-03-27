import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';
import './bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ServiceAdd />
      <ServiceList />
    </Provider>
  );
}

export default App;
