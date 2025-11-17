import { useEffect, useState } from 'react'
import axios from 'axios'

export default function NasaApod() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => setData(res.data))
  }, [])

  if (!data) return <div className="text-cosmic-400">Loading astronomy picture…</div>

  return (
    <div className="max-w-4xl text-center">
      <h2 className="mb-4 text-2xl font-semibold text-cyan-400">{data.title}</h2>
      <img
        src={data.hdurl || data.url}
        alt={data.title}
        className="mx-auto rounded-2xl shadow-2xl border border-cosmic-700"
      />
      <p className="mt-4 text-cosmic-300 italic">{data.explanation}</p>
      <p className="mt-2 text-sm text-cosmic-500">{data.date}</p>
    </div>
  )
}