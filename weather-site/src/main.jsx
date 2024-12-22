import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherApp from './weatherApp.jsx';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <WeatherApp />
  </StrictMode>,
)
