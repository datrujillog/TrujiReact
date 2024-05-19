import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";

import router from './routes';
import TabsExample from './components/nav.tsx'
// import App from './App.tsx'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TabsExample />
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
