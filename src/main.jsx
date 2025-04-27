import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

console.log("Main.jsx is executing")

const rootElement = document.getElementById('root')
console.log("Root element:", rootElement)

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error("Could not find root element")
}
