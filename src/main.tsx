import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routers/Routers/routers';
import { RouterProvider } from 'react-router-dom';
import Providers from './providers/Providers';

import './index.css';
import RequestStatus from './components/Messages/RequestStatus';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <RequestStatus/>
    </Providers>
  </React.StrictMode>,
)
