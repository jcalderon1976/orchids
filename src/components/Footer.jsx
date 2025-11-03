
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  console.log('[Footer] Component rendering');
  return (
    <footer className="footer-wrapper" style={{ position: 'relative', zIndex: 1 }}>
    {/*   <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
         <div className="row g-5">
           {/*  <!-- Footer Card --> */}
            <div className="col-12 col-sm-6 col-lg-4">
               <div className="footer-card pe-lg-5">
                  <a href="#" className="d-block mb-4">
                     <img src="src/assets/img/core-img/logo.png" alt=""/>
                  </a>
                  <p className="mb-0">We can transform your ideas into robust and scalable digital realities. Experience and innovation in software development.
                  </p>

                  {/* <!-- Social Nav --> */}
                  <div className="social-nav">
                                         
                     <a href="https://www.facebook.com/?sk=welcome">
                         <i className="ti ti-brand-facebook"></i>
                     </a>
                      <a href="https://www.linkedin.com/in/jose-javier-calderon-guzman-9564a2364/">
                        <i className="ti ti-brand-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/jcal.deron1976/">
                        <i className="ti ti-brand-instagram"></i>
                      </a>
                  </div>
               </div>
            </div>

           {/*  <!-- Footer Card --> */}
            <div className="col-12 col-sm-6 col-lg">
               <div className="footer-card">
                  <h5 className="mb-4">Quick Links</h5>

                 {/*  <!-- Footer Nav --> */}
                  <ul className="footer-nav">
                     <li><HashLink smooth to="/about">About Us</HashLink></li>
                     <li><Link to="/services">Services</Link></li>
                     <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
               </div>
            </div>

           {/*  <!-- Footer Card --> */}
            <div className="col-12 col-sm-6 col-lg">
               <div className="footer-card">
                  <h5 className="mb-4">Services</h5>

                 {/*  <!-- Footer Nav --> */}
                  <ul className="footer-nav">
                     <li><a href="#">Artificial Intelligence & LLM </a></li>
                     <li><a href="#">App Development</a></li>
                     <li><a href="#">Process & Workflow Automation</a></li>
                     <li><a href="#">UI/UX Design</a></li>
                     <li><a href="#">Digital Transformation</a></li>
                  </ul>
               </div>
            </div>

        
          
         </div>
      </div>

     {/*  <!-- Divider --> */}
      <div className="divider"></div>

     {/*  <!-- Copyright Wrapper --> */}
      <div className="copyright-wrapper">
         <div className="container">
            <div className="row align-items-center">
               {/* <!-- Copyright --> */}
               <div className="col-12 col-md-6">
                  <p className="mb-3 mb-md-0 copyright">Copyright © <span id="year">2025</span> <a href="#"> Orchid Technology</a>
                     All
                     rights
                     reserved.</p>
               </div>
            </div>
         </div>
      </div>
   </footer>
  );
}