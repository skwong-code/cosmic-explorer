import { useState, useEffect } from 'react';
import { fetchNasaData } from '../utils/nasa';   // ← This now works!

interface Asteroid {
  id: string;
  name: string;
  estimated_diameter: { meters: { estimated_diameter_min: number; estimated_diameter_max: number } };
  is_potentially_hazardous_asteroid: boolean;
}

const Asteroids: React.FC = () => {
  const [data, setData] = useState<Asteroid[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchNasaData('neo/rest/v1/feed?start_date=2025-11-12&end_date=2025-11-19'); // Adjust dates
        const nearEarthObjects: { [key: string]: Asteroid[] } = result.near_earth_objects;
        const allAsteroids = Object.values(nearEarthObjects).flat();
        setData(allAsteroids.slice(0, 10)); // Limit to 10 for demo
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64">Loading asteroids...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Near-Earth Asteroids</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Diameter (m)</th>
              <th className="px-4 py-2 text-left">Hazardous?</th>
            </tr>
          </thead>
          <tbody>
            {data.map((asteroid) => (
              <tr key={asteroid.id} className="border-t border-gray-700">
                <td className="px-4 py-2">{asteroid.name}</td>
                <td className="px-4 py-2">
                  {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(0)} - {asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(0)}
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${asteroid.is_potentially_hazardous_asteroid ? 'bg-red-600' : 'bg-green-600'}`}>
                    {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Asteroids;