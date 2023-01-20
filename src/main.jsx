import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'tw-elements'
import './i18n/i18n';
import './assets/fonts/ThereBrat.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
