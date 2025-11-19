// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MenuBar from './components/MenuBar'
import NasaApod from './components/NasaApod'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cosmic-900 text-white stars">
        <MenuBar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />           {/* ← Home is now its own thing */}
            <Route path="/apod" element={<NasaApod />} />
            <Route path="/asteroids" element={<div className="text-center pt-32 text-5xl text-cyan-400">Asteroids loading…</div>} />
            {/* other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}