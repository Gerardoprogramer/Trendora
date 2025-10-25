import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrendroraApp } from './TrendroraApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrendroraApp/>
  </StrictMode>,
)
