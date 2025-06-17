import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <section className="relative h-screen">
      {/* Imagen de fondo desenfocada con animación */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover blur-sm brightness-75"
        style={{ backgroundImage: "url('/w-11.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Capa superior con contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Título con animación */}
        <motion.h1
          className="px-4 text-4xl font-black text-center text-white md:text-6xl"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Welcome to F1 React by Alex Medina
        </motion.h1>

        {/* Navegación con animación */}
        <motion.nav
          className="flex justify-center px-6 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="flex gap-6 text-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.6 }, // Retraso progresivo entre los hijos
              },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <NavLink
                to="/home"
                className="px-2 border-2 rounded-lg hover:bg-red-600 hover:border-red-800"
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <NavLink
                to="/championship"
                className="px-2 border-2 rounded-lg hover:bg-red-600 hover:border-red-800"
              >
                Championship
              </NavLink>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <NavLink
                to="/store"
                className="px-2 border-2 rounded-lg hover:bg-red-600 hover:border-red-800"
              >
                Store
              </NavLink>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <NavLink
                to="/contact"
                className="px-2 border-2 rounded-lg hover:bg-red-600 hover:border-red-800"
              >
                Contact
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
    </section>
  );
}