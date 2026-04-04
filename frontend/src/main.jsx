import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <GoogleOAuthProvider clientId="62471726684-dns9ssnnbqi81q5l031m78nct7d9mq4i.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
