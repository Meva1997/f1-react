import { Link, NavLink, Outlet } from "react-router-dom"
import { SiF1 } from "react-icons/si";

export default function Layout() {

  const getActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-black font-bold underline text-xl" : "text-white hover:underline text-xl";

  return (
    <>
      <header>
      <div className="flex flex-col">
        <nav className="bg-red-600 px-6 py-2 shadow-md flex justify-evenly items-center">
          <Link to="/"><SiF1 className="text-8xl" /></Link>
          <div className="flex gap-6">
            <NavLink to="/home" className={getActive} >Home</NavLink>
            <NavLink to="/championship" className={getActive} >Championship</NavLink>
            <NavLink to="/store" className={getActive} >Store</NavLink>
            <NavLink to="/contact" className={getActive} >Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>

      {/* Aquí se renderizan las páginas secundarias */}
      <Outlet />
    </>
  );
}