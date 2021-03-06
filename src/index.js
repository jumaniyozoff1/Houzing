import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import 'antd/dist/antd.css';
import "swiper/css";
import { QueryClientProvider,QueryClient } from 'react-query';




const query = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <QueryClientProvider client={query}>
        <Root/>
      </QueryClientProvider>
    </BrowserRouter>
  </div>
);































// recommided button style
/* &:active {
			transform: translate(-5px, 0);
			} */