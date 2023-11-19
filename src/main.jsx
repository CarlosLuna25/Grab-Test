import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App.jsx'
import  './components/app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const components = {
  // Otros componentes
  ...
  FontAwesomeIcon,
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
export default components
