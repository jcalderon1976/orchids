import { Link ,NavLink} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {

    return (

      <div> 
         <header className="header-area style-two">
            <div className="header-top">
                  <div className="container h-100 d-flex align-items-center justify-content-between">
                     {/* <!-- Left Side --> */}
                     <div className="left-side d-flex align-items-center gap-4 gap-lg-5">
                        <div className="d-flex align-items-center gap-2 text-white">
                        <i className="ti ti-mail-filled"></i>
                        <span className="d-none d-lg-block">info@orchidspr.com</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 text-white">
                        <i className="ti ti-map-pin-filled"></i>
                        <span className="d-none d-lg-block">
                           Str 2 #27 GHE Guaynabo, PR 00966
                        </span>
                        </div>
                        <div className="d-flex align-items-center gap-2 text-white">
                        <i className="ti ti-phone"></i>
                        <span className="d-none d-lg-block">(787) 429.7834</span>
                        </div>
                     </div>

                     {/* <!-- Right Side --> */}
                     <div className="right-side">
                        <div className="social-nav d-flex align-items-center gap-3">
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
            </div>

            <nav className="navbar navbar-expand-lg section-heading style-two">
               <div className="container header-div-container">
                  {/*  <!-- Navbar Brand --> */}
                  <Link className="navbar-brand" to="/">
                     <img src="src/assets/img/core-img/logo.png" alt="" />
                  </Link>

                  {/*  <!-- Navbar Toggler --> */}
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#softoraNav"
                     aria-controls="softoraNav"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <i className="ti ti-category"></i>
                  </button>

                  {/*   <!-- Navbar Nav --> */}
                  <div
                     className="collapse navbar-collapse justify-content-between"
                     id="softoraNav"
                  >
                     <ul className="navbar-nav navbar-nav-scroll">
                     <li className="softora-dd">
                        {" "}
                        <Link to="/"> Home </Link>{" "}
                     </li>
                     <li className="softora-dd">
                        {" "}
                        <Link to="/about"> About Us </Link>
                     </li>
                     <li className="softora-dd">
                        {" "}
                        <Link to="/services"> Services</Link>{" "}
                     </li>
                     <li className="softora-dd">
                        {" "}
                        <Link to="/contact"> Contact </Link>{" "}
                     </li>
                     </ul>

                     <div className="d-flex align-items-center mt-4 mt-lg-0">
                     {/*  <!-- Button --> */}
                     <Link to="/contact" className="btn btn-primary">
                        Get in Touch <i className="ti ti-arrow-up-right"></i>
                     </Link>
                     </div>
                  </div>
               </div>
            </nav>
         </header>
      </div>


       
    );
  }