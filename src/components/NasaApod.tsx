import { useEffect, useState } from 'react'
import axios from 'axios'


interface ApodResponse {
  title: string
  explanation: string
  url: string
  hdurl?: string
  date: string
  media_type: string
}
export default function NasaApod() {
  const [data, setData] = useState<ApodResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_KEY = import.meta.env.VITE_NASA_API_KEY

  useEffect(() => {

    if (!API_KEY || API_KEY === 'DEMO_KEY' || API_KEY.includes('your-key-here')) {
      setError('API key missing or invalid! Check your .env file → VITE_NASA_API_KEY=...')
      setLoading(false)
      return
    }
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
        setError(null)
      })
      .catch(err => {
        console.error('NASA API error:', err.response?.data || err.message)
        setError(err.response?.data?.msg || 'Failed to load picture (check API key or network)')
      })
      .finally(() => setLoading(false))
  }, [API_KEY]) // ← re-runs if api key changes


  if (loading) {
    return <div className="text-cosmic-400 text-center text-2xl">Loading astronomy picture… ✨</div>
  }

  // Error state
  if (error) {
    return (
      <div className="text-center p-8 bg-red-900/20 rounded-2xl border border-red-500">
        <p className="text-red-400 text-xl mb-4">Error</p>
        <p className="text-cosmic-300 max-w-2xl mx-auto">{error}</p>
        <p className="text-xs text-cosmic-500 mt-4">
          Current key: {API_KEY?.slice(0, 8) || 'undefined'}...
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl text-center">
      <h2 className="mb-4 text-2xl font-semibold text-cyan-400">{data!.title}</h2>
      <img
        src={data!.hdurl || data!.url}
        alt={data!.title}
        className="mx-auto rounded-2xl shadow-2xl border border-cosmic-700 max-w-full"
      />
      <p className="mt-4 text-cosmic-300 italic">{data!.explanation}</p>
      <p className="mt-2 text-sm text-cosmic-500">{data!.date}</p>
    </div>
  )
}