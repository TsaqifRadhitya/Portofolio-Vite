import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './Pages/App.jsx'
import NotFound from './Pages/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element = {<App/>}/>
      <Route path="*" element = {<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)
