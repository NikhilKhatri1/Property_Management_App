import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// import App from './App.jsx'
// import './index.css'
// import LandingPage from './components/LandingPage.jsx';
import App from './App.jsx';
// import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
