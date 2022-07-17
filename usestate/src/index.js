import React from 'react';
import ReactDOM from 'react-dom/client';
import FetchApiPractice from './FetchApi';
import './index.css';
import FetchApi from './UseEffectFetchAPI';
import Hook from './UseEffectHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Hook/>
  <FetchApi/>
  <FetchApiPractice/>
  </>
);
