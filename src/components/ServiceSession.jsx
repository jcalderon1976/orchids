import { useEffect, useRef } from "react";
import AiSvg from "./AiSvg.jsx";
import WorkflowAutomationSvg from "./WorkflowAutomation.jsx";
import EnterpriseSolutionSvg from "./EnterpriseSolution.jsx";
import ModernizationSvg from "./Modernization.jsx";

export default function ServiceSession() {
    const initializedRef = useRef(false);

    useEffect(() => {
        // Prevenir ejecución múltiple (especialmente con React StrictMode)
        if (initializedRef.current) {
            return;
        }

        // Activar el tab AI cuando se monte el componente
        const activateAITab = () => {
            const aiTab = document.getElementById('v-pills-ai-tab');
            const aiPane = document.getElementById('v-pills-ai');
            
            if (aiTab && aiPane) {
                // Remover 'active' de todos los tabs
                document.querySelectorAll('.service-nav-item').forEach(tab => {
                    tab.classList.remove('active');
                    tab.setAttribute('aria-selected', 'false');
                });

                // Remover 'show active' de todos los panes
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('show', 'active');
                });

                // Activar el tab AI
                aiTab.classList.add('active');
                aiTab.setAttribute('aria-selected', 'true');
                
                // Activar el pane AI
                aiPane.classList.add('show', 'active');
            }
        };

        // Esperar a que el DOM esté listo y Bootstrap esté cargado
        const timer = setTimeout(() => {
            activateAITab();
            initializedRef.current = true;
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="service-section " >
      {/* <!-- Background Shape --> */}
      <div className="bg-shape">
         <img src="src/assets/img/core-img/shape2.png" alt=""/>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
         <div className="row align-items-end g-4 g-xl-5">
            <div className="col-12 col-md-6">
               <div className="section-heading">
                  <span className="sub-title">Premium Services</span>
                  <h2 className="mb-0">Our Clients Receive the Highest Quality Service</h2>
               </div>
            </div>

            <div className="col-12 col-md-5 offset-md-1">
               <div className="section-heading">
                  <p className="mb-0">We can help you transform your operations through the strategic use of technology from 
                    artificial intelligence and machine learning to process automation and full-stack development, here you'll 
                    find everything related to my background and capabilities.</p>
               </div>
            </div>
         </div>

         <div className="divider-sm"></div>

         <div className="row g-4 g-xl-5">
          {/*   <!-- Service Nav --> */}
            <div className="col-12 col-md-5 col-lg-4">
               <div className="service-nav nav flex-column" id="v-pills-tab" role="tablist" 
               aria-orientation="vertical">
                  <AiSvg />
                  <WorkflowAutomationSvg />
                  <EnterpriseSolutionSvg />
                  <ModernizationSvg/>
               </div>
            </div>

           {/*  <!-- Service Tab Content --> */}
            <div className="col-12 col-md-7 col-lg-8">
               <div className="tab-content ps-lg-4" id="v-pills-tabContent">
                 {/*  <!-- Service Tab --> */}
                  <div className="tab-pane fade" id="v-pills-ai" role="tabpanel" aria-labelledby="v-pills-ai-tab">
                     {/* <!-- Service Tab Content --> */}
                     <div className="service-tab-content">
                        <img src="src/assets/img/bg-img/27.jpg" alt=""/>

                       {/*  <!-- Service Tab Card --> */}
                        <div className="service-tab-card">
                           <h4 className="mb-2">Artificial Intelligence & LLM Integration</h4>
                           <p>Embedding LLMs within existing AI systems or applications to enhance their capabilities or automate tasks. This integration leverages the advanced language
                               processing abilities of LLMs to improve user experience, increase efficiency, and unlock new functionalities, 
                               forming the foundation for AI and Generative AI tools</p>
                           <ul className="d-flex flex-column gap-2 list-unstyled mt-4">
                              <li><i className="ti ti-circle-check"></i> AI-Powered Automation</li>
                              <li><i className="ti ti-circle-check"></i> AI Strategy & Consulting</li>
                              <li><i className="ti ti-circle-check"></i> Machine Learning Development</li>
                           </ul>
                           <a className="btn btn-primary" href="#">Read More <i className="ti ti-arrow-up-right"></i></a>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Service Tab --> */}
                  <div className="tab-pane fade" id="v-pills-automation" role="tabpanel" aria-labelledby="v-pills-automation-tab">
                    {/*  <!-- Service Tab Content --> */}
                     <div className="service-tab-content">
                        <img src="src/assets/img/bg-img/27_2.jpg" alt=""/>

                       {/*  <!-- Service Tab Card --> */}
                       <div className="service-tab-card">
                           <h4 className="mb-2">Robotic Process Automation (RPA)</h4>
                           <p>Identify automation opportunities with Process Discovery and Assessment, followed by RPA Solution Design and Implementation 
                              for streamlined processes. Our expertise in Intelligent Automation with AI Integration enhances efficiency by combining 
                              RPA with AI capabilities. Additionally, we offer Monitoring and Performance Optimization to ensure sustained improvements and operational excellence.</p>
                           <ul className="d-flex flex-column gap-2 list-unstyled mt-4">
                              <li><i className="ti ti-circle-check"></i> Emulates human actions </li>
                              <li><i className="ti ti-circle-check"></i> Rule-based tasks</li>
                              <li><i className="ti ti-circle-check"></i> Integrates systems</li>
                           </ul>
                           <a className="btn btn-primary" href="#">Read More <i className="ti ti-arrow-up-right"></i></a>
                        </div>
                     </div>
                  </div>

                 {/*  <!-- Service Tab --> */}
                  <div className="tab-pane fade" id="v-pills-solution" role="tabpanel" aria-labelledby="v-pills-solution-tab">
                    {/*  <!-- Service Tab Content --> */}
                     <div className="service-tab-content">
                        <img src="src/assets/img/bg-img/27_3.jpg" alt=""/>

                       {/*  <!-- Service Tab Card --> */}
                       <div className="service-tab-card">
                           <h4 className="mb-2">ERP Implementation</h4>
                           <p>We assist organizations in the seamless integration of a new Enterprise Resource Planning (ERP) 
                              system, enabling the centralization and optimization of their core business processes.</p>
                           <ul className="d-flex flex-column gap-2 list-unstyled mt-4">
                              <li><i className="ti ti-circle-check"></i> Multi-phase project involves planning</li>
                              <li><i className="ti ti-circle-check"></i> Configuring the software,</li>
                              <li><i className="ti ti-circle-check"></i> Migrating data and deploying the system</li>
                           </ul>
                           <a className="btn btn-primary" href="#">Read More <i className="ti ti-arrow-up-right"></i></a>
                        </div>
                     </div>
                  </div>

                  {/*  <!-- Service Tab --> */}
                  <div className="tab-pane fade" id="v-pills-modernization" role="tabpanel" aria-labelledby="v-pills-modernization-tab">
                    {/*  <!-- Service Tab Content --> */}
                     <div className="service-tab-content">
                        <img src="src/assets/img/bg-img/27_4.jpg" alt=""/>

                       {/*  <!-- Service Tab Card --> */}
                        <div className="service-tab-card">
                           <h4 className="mb-2">Digital Transformation </h4>
                           <p>We help organizations transform their operations by leveraging technology to enhance efficiency, productivity, and customer experience. 
                              This includes implementing digital tools, automating processes, and adopting new business models to stay competitive in the digital age.</p>
                           <ul className="d-flex flex-column gap-2 list-unstyled mt-4">
                              <li><i className="ti ti-circle-check"></i> Digital Strategy Development</li>
                              <li><i className="ti ti-circle-check"></i> Cloud Migration & Implementation</li>
                              <li><i className="ti ti-circle-check"></i> Data Analytics & Insights</li>
                           </ul>
                           <a className="btn btn-primary" href="#">Read More <i className="ti ti-arrow-up-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

     {/*  <!-- Divider(s) --> */}
      <div className="divider"></div>
      <div className="divider"></div>
   </section>
    );
  }