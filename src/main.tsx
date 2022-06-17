import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { AnimalContextProvider } from './contexts/AnimalContext'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimalContextProvider>
      <App />
    </AnimalContextProvider>
  </React.StrictMode>
)
