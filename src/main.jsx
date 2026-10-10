import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

// Old links used hash routing (/#/baja). Rewrite them to real paths so they keep working.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', basename + window.location.hash.slice(1))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
