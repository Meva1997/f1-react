 // filepath: /Users/alexmedina/Desktop/f1-react/src/views/ChampionshipPage.tsx
import { useState } from "react";
import { mockStandings } from "../data/db2";

export default function Championship() {
  const [search, setSearch] = useState("");

  const filteredStandings = mockStandings.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen px-4 py-10 text-white bg-zinc-950 md:px-12">
      <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
        🏆 2025 Driver Championship
      </h2>

      {/* Barra de búsqueda */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search driver..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 text-white border rounded-md outline-none bg-zinc-800 border-zinc-700 focus:border-red-500"
        />
      </div>

      {/* Tabla o mensaje de retroalimentación */}
      <div className="overflow-x-auto">
        {filteredStandings.length > 0 ? (
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead className="text-lg text-red-400 border-b border-red-800">
              <tr>
                <th className="px-4">Pos</th>
                <th className="px-4">Driver</th>
                <th className="px-4">Team</th>
                <th className="px-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {filteredStandings.map((driver) => (
                <tr
                  key={driver.position}
                  className="transition rounded-lg cursor-pointer bg-zinc-900 hover:bg-zinc-800"
                >
                  <td className="px-4 py-3">{driver.position}</td>
                  <td className="px-4 py-3 font-semibold">{driver.name}</td>
                  <td className="px-4 py-3">{driver.team}</td>
                  <td className="px-4 py-3">{driver.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="font-semibold text-center text-red-500">
            No drivers found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}