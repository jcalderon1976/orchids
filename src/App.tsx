// App.tsx (layout principal)
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CTAWrapper from "./components/CTAWrapper";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useRef } from "react";

// Variable global para rastrear scripts cargados (persiste entre re-renders y StrictMode)
const loadedScripts = new Set<string>();

export default function App() {
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    // Prevenir carga doble incluso en React StrictMode
    if (scriptsLoadedRef.current) {
      return;
    }

    // Cargar scripts externos una vez
    const scripts = [
      "/js/bootstrap.bundle.min.js",
      "/js/wow.min.js",
      "/js/swiper-bundle.min.js",
      "/js/cookiealert.js",
      "/js/imagesloaded.pkgd.min.js",
      "/js/isotope.pkgd.min.js",
      "/js/jarallax.min.js",
      "/js/slideToggle.min.js",
      "/js/index.js",
      "/js/active.js",
    ];

    scripts.forEach((src) => {
      // Verificar si el script ya existe o ya fue cargado
      if (loadedScripts.has(src)) {
        return; // Ya fue cargado, no cargar de nuevo
      }

      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        loadedScripts.add(src);
        return; // Ya existe en el DOM, no cargar de nuevo
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      loadedScripts.add(src);
      document.body.appendChild(script);
    });

    scriptsLoadedRef.current = true;
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <CTAWrapper />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
