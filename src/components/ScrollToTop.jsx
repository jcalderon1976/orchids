import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        // Hacer scroll al inicio cuando cambie la ruta o los parámetros de búsqueda
        // Usar múltiples métodos para máxima compatibilidad
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname, search]);

    return (
        <button id="scrollTopButton" className="softora-scrolltop scrolltop-hide">                                                                              
           <i className="ti ti-chevron-up"></i>
        </button>
    );
  }