import { useState } from "react";
import { mockStandings2025 } from "../data/db";
import { DriverModal } from "../components/DriverModal";
import type { DriverStanding } from "../types";

interface Race {
  name: string;
  date: string;
  location: string;
}

export default function Home() {
  // Datos simulados
  const [nextRace] = useState<Race>({
    name: "British GP",
    date: "2025-07-07",
    location: "Silverstone, UK",
  });

  const [selectedDriver, setSelectedDriver] = useState<DriverStanding | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (driverId: string) => {
    const driver = mockStandings2025.find((d) => d.driverId === driverId) || null;
    setSelectedDriver(driver);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedDriver(null);
    setIsModalOpen(false);
  };

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        🏁 F1 2025 - Season Overview
      </h2>

      {/* Próxima carrera */}
      <div className="bg-red-600 p-6 rounded-xl mb-10 shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Next Race</h3>
        <p className="text-lg">
          {nextRace.name} – {nextRace.location}
        </p>
        <p className="text-sm opacity-80">📅 {nextRace.date}</p>
      </div>

      {/* Top pilotos */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Top 10 Drivers</h3>
        <ul className="grid gap-4 md:grid-cols-3">
          {mockStandings2025.map((driver) => (
            <li
              key={driver.driverId}
              className="border border-red-600 rounded-lg p-4 bg-zinc-900 hover:bg-zinc-800 transition"
              onClick={() => openModal(driver.driverId)}
            >
              <h4 className="text-xl font-bold">{driver.givenName}{' '}{driver.familyName}</h4>
              <p className="text-sm">{driver.team}</p>
              <p className="text-lg font-semibold">{driver.points} pts</p>
              <img src={driver.img} className="cursor-pointer hover:scale-110 overflow-hidden transition-all ease-in-out" />
            </li>
          ))}
        </ul>
      </div>

      {/* Enlaces extra */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-lg">
        <a href="/championship" className="underline hover:text-red-400">
          Full Standings
        </a>
        <a href="/store" className="underline hover:text-red-400">
          Explore Merchandise
        </a>
        <a href="/contact" className="underline hover:text-red-400">
          Contact Us
        </a>
      </div>

      <DriverModal
        driver={selectedDriver}
        isOpen={isModalOpen}
        onClose={closeModal}
      />    
    </section>
  );
}
