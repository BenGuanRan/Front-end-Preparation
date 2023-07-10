import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { msg } from 'virtual:my-module'
import a from './utils/a.ts'
console.log(a);


console.log(msg);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
