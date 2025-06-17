import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Layout from "./layouts/Layout";
import LandingPage from "./LandingPage";
import HomePage from "./views/HomePage";
import Championship from "./views/ChampionshipPage";
import StorePage from "./views/StorePage";
import ContactPage from "./views/ContactPage";

export default function Router() {
  const location = useLocation(); // Necesario para detectar cambios de ruta

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="championship" element={<PageWrapper><Championship /></PageWrapper>} />
          <Route path="store" element={<PageWrapper><StorePage /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
    <ToastContainer />
    </>
  );
}

// Wrapper para animar las páginas
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}