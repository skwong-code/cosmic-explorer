// src/components/Home.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 mb-8 tracking-wider">
        Cosmic Explorer
      </h1>
      <p className="text-xl md:text-3xl text-gray-300 max-w-3xl leading-relaxed">
        Your portal to NASA’s universe — APOD · Near-Earth Asteroids · Mars Rovers · Earth Imagery · Natural Events
      </p>
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:bg-white/10 transition">
          <div className="text-6xl">🌌</div>
          <p className="mt-4 text-cyan-400 font-semibold">Explore the cosmos</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:bg-white/10 transition">
          <div className="text-6xl">🚀</div>
          <p className="mt-4 text-cyan-400 font-semibold">Real-time NASA data</p>
        </div>
      </div>
    </div>
  )
}