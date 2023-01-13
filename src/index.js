import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ThemeProvider from '@context/ThemeProvider'


import store from '@store/store'
import App from '@containers/App'
import '@styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
