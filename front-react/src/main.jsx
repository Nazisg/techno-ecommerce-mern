import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'tw-elements';
import App from './App.jsx';
import { store } from './redux/store.js';
import './styles/index.scss';
import './styles/slider.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </StrictMode>,
)
