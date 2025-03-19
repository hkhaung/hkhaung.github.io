import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import WorkExp from './components/WorkExp.jsx';
import Project from './components/Project.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />

        <Route path="/work/:slug" element={<WorkExp />} />
        <Route path="/projects/:slug" element={<Project />} />
        
      </Routes>
    </HashRouter>
  </StrictMode>
)
