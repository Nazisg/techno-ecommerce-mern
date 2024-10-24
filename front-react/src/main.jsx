import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'tw-elements';
import App from './App.jsx';
import './styles/index.scss';
import './styles/slider.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
