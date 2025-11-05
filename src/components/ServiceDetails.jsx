import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useCallback } from "react";
import DTservices from "./DTservices";
import AIServices from "./AIServices";
import RPAServices from "./RPAServices";
import ADMServices from "./ADMServices";

export default function ServiceDetails() {

    const [searchParams] = useSearchParams();
    const initializedRef = useRef(false);

    // Función para activar un tab específico
    const activateTab = useCallback((tabId) => {
        const tab = document.getElementById(tabId + '-tab');
        const pane = document.getElementById(tabId);
        const wrapper = document.querySelector('.service-details-tab-content-wrapper');

        if (tab && pane) {
            // Remover 'active' de todos los tabs
            document.querySelectorAll('.service-nav-item').forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            // Remover 'show active' de todos los panes
            document.querySelectorAll('.tab-pane').forEach(p => {
                p.classList.remove('show', 'active');
            });

            // Activar el tab seleccionado
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            // Activar el pane seleccionado
            pane.classList.add('show', 'active');

            // Ajustar la altura del wrapper basándose en el contenido activo
            if (wrapper) {
                // Pequeño delay para asegurar que el contenido se haya renderizado
                setTimeout(() => {
                    const paneHeight = pane.scrollHeight;
                    wrapper.style.height = `${paneHeight}px`;
                }, 50);
            }
        }
    }, []);

    useEffect(() => {
        // Obtener el parámetro 'tab' de la URL
        const tabParam = searchParams.get('tab');
        
        // Mapear los valores del parámetro a los IDs de los tabs
        const tabMap = {
            'ai': 'v-pills-ai',
            'rpa': 'v-pills-rpa',
            'adm': 'v-pills-adm',
            'digital-transformation': 'v-pills-digital-transformation'
        };

        // Determinar qué tab activar (por defecto: digital-transformation)
        const tabToActivate = tabMap[tabParam] || 'v-pills-digital-transformation';

        // Activar el tab seleccionado cuando se monte el componente o cambie el parámetro
        const timer = setTimeout(() => {
            activateTab(tabToActivate);
            initializedRef.current = true;
            
            // Asegurar que la altura del wrapper se ajuste después de la activación
            const wrapper = document.querySelector('.service-details-tab-content-wrapper');
            const activePane = document.querySelector('.service-details-tab-content-wrapper .tab-pane.show.active');
            if (wrapper && activePane) {
                setTimeout(() => {
                    wrapper.style.height = `${activePane.scrollHeight}px`;
                }, 150);
            }
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [activateTab, searchParams]);


    return (
      <div>
            
            {/* <!-- Breadcrumb Section -->*/}
            <div className="breadcrumb-section bg-img" style={{backgroundImage: "url('/img/core-img/grid.jpg')"}}>
                <div className="container">
                    {/* <!-- Breadcrumb Content -->*/}
                    <div className="breadcrumb-content">
                        <div className="divider"></div>
                        <h2>Service Details</h2>
                        <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li>Service Details</li>
                        </ul>
                    </div>
                </div>

                    {/* <!-- Divider -->*/}
                <div className="divider"></div>
            </div>

            {/* <!-- Service Details Section -->*/}
            <div className="service-details-section">
                {/* <!-- Divider -->*/}
                <div className="divider"></div>

                <div className="container">
                    <div className="row g-5 g-lg-4 g-xxl-5">
                        <div className="col-12 col-lg-8">
                            <div id="v-pills-tabContent" className="service-details-tab-content-wrapper">
                                <div className="service-details-content tab-pane fade" id="v-pills-digital-transformation" role="tabpanel" aria-labelledby="v-pills-digital-transformation-tab">
                                    <DTservices />
                                </div>
                                <div className="service-details-content tab-pane fade" id="v-pills-ai" role="tabpanel" aria-labelledby="v-pills-ai-tab">
                                    <AIServices />
                                </div>
                                <div className="service-details-content tab-pane fade" id="v-pills-rpa" role="tabpanel" aria-labelledby="v-pills-rpa-tab">
                                   <RPAServices/>
                                </div>
                                <div className="service-details-content tab-pane fade" id="v-pills-adm" role="tabpanel" aria-labelledby="v-pills-adm-tab">
                                   <ADMServices/>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                        <div className="service-sidebar">
                            {/* <!-- All Service -->*/}
                            <div className="all-service-card" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <ul className="p-0 list-unstyled">
                                    <li>
                                       <div 
                                            className="service-nav-item"        
                                            id="v-pills-digital-transformation-tab"                                                                             
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-digital-transformation"                                                                    
                                            role="tab"
                                            aria-controls="v-pills-digital-transformation"                                                                      
                                            aria-selected="true"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                activateTab('v-pills-digital-transformation');
                                            }}
                                        >
                                           <Link 
                                                to="/service-details" 
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span>DIGITAL TRANSFORMATION</span> <i className="ti ti-chevron-right"></i>
                                            </Link>       
                                        </div>
                                    </li>
                                    <li>
                                        <div 
                                            className="service-nav-item"       
                                            id="v-pills-ai-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-ai"        
                                            role="tab"
                                            aria-controls="v-pills-ai"
                                            aria-selected="false"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                activateTab('v-pills-ai');
                                            }}
                                        >
                                           <Link 
                                                to="/service-details" 
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span>TECHNOLOGY AND ARTIFICIAL INTELLIGENCE (AI)</span> <i className="ti ti-chevron-right"></i>
                                            </Link>                                                                  
                                        </div>
                                    </li>
                                    <li>
                                        <div 
                                            className="service-nav-item"       
                                            id="v-pills-rpa-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-rpa"        
                                            role="tab"
                                            aria-controls="v-pills-rpa"
                                            aria-selected="false"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                activateTab('v-pills-rpa');
                                            }}
                                        >
                                           <Link 
                                                to="/service-details" 
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span>ROBOTIC PROCESS AUTOMATION (RPA)</span> <i className="ti ti-chevron-right"></i>
                                            </Link>                                                                  
                                        </div>
                                    </li>
                                    <li>
                                        <div 
                                            className="service-nav-item"       
                                            id="v-pills-adm-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-adm"        
                                            role="tab"
                                            aria-controls="v-pills-adm"
                                            aria-selected="false"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                activateTab('v-pills-adm');
                                            }}
                                        >
                                           <Link 
                                                to="/service-details" 
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span>APPLICATION DEVELOPMENT & MODERNIZATION </span> <i className="ti ti-chevron-right"></i>
                                            </Link>                                                                  
                                        </div>
                                    </li>
                                
                                  
                                </ul>
                            </div>

                            {/* <!-- Need Help -->*/}
                            <div className="need-help-card">
                                <h4 className="fw-bold">Need Any Help?</h4>
                                <p className="mb-4">Need Any Help, Call Us 24/7 For Support</p>

                                <div className="d-flex flex-column gap-4">
                                    {/* <!-- Help Item -->*/}
                                    <div className="help-item d-flex align-items-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                                                fill="#222222" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1">Call Us</p>
                                        <h5 className="mb-0">+787 429.7834</h5>
                                    </div>
                                    </div>

                                    {/* <!-- Help Item -->*/}
                                    <div className="help-item d-flex align-items-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#222222"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1">Mail Us</p>
                                        <h5 className="mb-0">info@orchidspr.com</h5>
                                    </div>
                                    </div>

                                    {/* <!-- Help Item -->*/}
                                    <div className="help-item d-flex align-items-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#222222"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1">Office Address</p>
                                        <h5 className="mb-0">St2 GHE Guaynabo, PR 00966</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Divider -->*/}
                <div className="divider"></div>
            </div>

           
        </div>
    );
}