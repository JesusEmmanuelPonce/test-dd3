import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider }    from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'

import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Loader = () => <h2>Cargando</h2>
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
