import NasaApod from './components/NasaApod'

export default function App() {
  return (
    <div className="min-h-screen bg-cosmic-900 text-white relative overflow-hidden">
      {/* Starfield background */}
      <div className="stars absolute inset-0 opacity-60" />
      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 px-4">
        <h1 className="text-center text-6xl font-bold tracking-tighter md:text-8xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Cosmic Explorer
        </h1>
        <NasaApod />
        <p className="text-cosmic-400 text-lg">
          Powered by Tailwind v4 • Vite • React + TypeScript
        </p>
      </div>
    </div>
  )
}