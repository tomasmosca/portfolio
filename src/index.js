import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ChakraWrapper from './ChakraWrapper';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraWrapper>
        <App />
      </ChakraWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
