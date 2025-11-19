// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import NasaApod from './components/NasaApod'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white stars">
        <MenuBar />
        <main className="pt-20">   {/* ← This pushes content below the nav */}
          <Routes>
            <Route path="/" element={<NasaApod />} />
            <Route path="/apod" element={<NasaApod />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}