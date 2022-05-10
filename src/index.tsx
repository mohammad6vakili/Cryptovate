import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css'

function getLibrary(provider: any) {
  return new Web3(provider)
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <ToastContainer rtl autoClose={6000} pauseOnFocusLoss={false}/>
        <App />
      </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
