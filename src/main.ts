import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { App } from './App'
import { ErrorBoundary } from './ErrorBoundary'

const rootElement = document.getElementById('app')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    React.createElement(
      React.StrictMode,
      null,
      React.createElement(ErrorBoundary, null, React.createElement(App)),
    ),
  )
}
