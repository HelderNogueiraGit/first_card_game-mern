import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './core/components/App';
import reportWebVitals from './reportWebVitals';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserRegisterPage } from './player/components/UserRegisterPage';
import { MainPage } from './game/components/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/error",
    element: <h1>Something went wrong!</h1>
  },
  {
    path: "/register",
    element: <UserRegisterPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme>
      <App>
        <RouterProvider router={router} />
      </App>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
