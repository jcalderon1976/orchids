export default function AboutDetails() {
      return (
        <div>
             {/* <!-- Breadcrumb Section -->*/}
             <div className="breadcrumb-section bg-img" style={{backgroundImage: "url('src/assets/img/core-img/grid.jpg')"}}>
                <div className="container">
                    {/* <!-- Breadcrumb Content -->*/}
                    <div className="breadcrumb-content">
                        <div className="divider"></div>
                        <h2>Every great design begin with an even better story</h2>
                        <ul className="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        
                        </ul>
                    </div>
                </div>

                    {/* <!-- Divider -->*/}
                <div className="divider"></div>
            </div>
            <section id="about" className="about-section ">
                <br/>
                    {/*   <!-- Right Shape --> */}
                    <div  className="right-shape">
                        <img  src="./src/assets/img/core-img/shape.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-12 col-lg-6">
                            {/* <!-- About Content --> */}
                            <div className="about-content ps-md-4">
                                <div className="section-heading">
                                    <span className="sub-title">About Us</span>
                                    <h2 className="mb-4">We are your trusted solution in your transformation.</h2>
                                    <p className="mb-5">Regardless of your industry, we empower your organization to accelerate growth and prepare teams for the future. 
                                        Our expertise helps you streamline key operations, enhance agility, and adopt innovative technologies—unlocking greater value and maximizing 
                                        your return on investment.</p>
                                    <p className="mb-5">We are a team driven by a passion for technology, with a strong foundation in Software Engineering, Database Administration, and Systems Analysis.
We specialize in designing and developing scalable, reliable solutions using agile methodologies and modern tools.
Throughout our experience, we have led complex projects across diverse corporate environments, consistently ensuring quality, innovation, and measurable outcomes.
Fully bilingual in Spanish and English, we believe that technology is a powerful catalyst for transformation and efficiency across all industries.</p>

                                    {/*  <!-- About List --> */}
                                    <ul className="about-list ps-0 d-flex flex-column gap-3 list-unstyled mb-5">
                                        <li className="d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="ti ti-arrow-right"></i>
                                        </div>
                                        <h5 className="mb-0">25+ Years Experience</h5>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="ti ti-arrow-right"></i>
                                        </div>
                                        <h5 className="mb-0">50+ Projects Delivered</h5>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="ti ti-arrow-right"></i>
                                        </div>
                                        <h5 className="mb-0">10+ Enterprise Clients</h5>
                                        </li>
                                    </ul>

                                    {/* <!-- Button --> 
                                    <a className="btn btn-primary" href="about-us.html">Read More About Us<i className="ti ti-arrow-up-right"></i></a>
                                    */}
                                </div>
                            </div>
                            </div>

                            <div className="col-12 col-lg-6">
                            {/*   <!-- About Video --> */}
                            <div className="about-video-content wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                <img src="./src/assets/img/bg-img/25.jpg" alt=""/>

                                {/* {/* <!-- Play Video --> 
                                <div className="play-video-btn video-btn" data-video="https://youtu.be/4GUFkrHvZdE">
                                    <div className="icon">
                                        <i className="ti ti-player-play-filled"></i>
                                    </div>
                                </div> */}
                            </div>

                            {/*   <!-- About Images --> */}
                            <div className="about-images d-flex px-5 mt-5 wow fadeInUp" data-wow-duration="1000ms"
                                data-wow-delay="800ms">
                                <div>
                                    <img className="w-100" src="./src/assets/img/bg-img/26.jpg" alt=""/>
                                </div>
                                <div>
                                    <svg className="rotatingImage" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                        viewBox="0 0 70 70" fill="none">
                                        <path
                                        d="M35 0L46.1369 23.8631L70 35L46.1369 46.1369L35 70L23.8631 46.1369L0 35L23.8631 23.8631L35 0Z"
                                        fill="#222222" />
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

             
            </section>
            {/* <!-- Team Members Section --> */}
            <section className="team-section">
              

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {/* <!-- Section Heading --> */}
                        <div className="col-12 col-md-7">
                        <div className="section-heading text-center">
                            <span className="sub-title">Our Team</span>
                            <h2 className="mb-0">Our Expert Team is Always Ready to Help you</h2>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="divider-sm"></div>

                <div className="container">
                    <div className="row g-4 g-lg-5 justify-content-center">
                        {/* <!-- Team Card --> */}
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-two-card">
                            {/* <!-- Team Thumbnail --> */}
                            <div className="team-thumbnail">
                                <img src="src/assets/img/bg-img/83.jpg" alt=""/>
                            </div>
                            {/* <!-- Team Member Info --> */}
                            <div className="team-member-info">
                                <h4 className="mb-1">Jose Javier Calderon</h4>
                                <p className="mb-0">Founder & Software Engineer</p>
                            </div>
                        </div>
                        </div>

                        {/* <!-- Team Card --> */}
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-two-card">
                            {/* <!-- Team Thumbnail --> */}
                            <div className="team-thumbnail">
                                <img src="src/assets/img/bg-img/84.jpg" alt=""/>
                                
                            </div>
                            {/* <!-- Team Member Info --> */}
                            <div className="team-member-info">
                                <h4 className="mb-1">Edward Camacho</h4>
                                <p className="mb-0">Manager & Software Engineer</p>
                            </div>
                        </div>
                        </div>

                        {/* <!-- Team Card --> */}
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-two-card">
                            {/* <!-- Team Thumbnail --> */}
                            <div className="team-thumbnail">
                                <img src="src/assets/img/bg-img/85.jpg" alt=""/>
                               
                            </div>
                            {/* <!-- Team Member Info --> */}
                            <div className="team-member-info">
                                <h4 className="mb-1">Carlos Espinal</h4>
                                <p className="mb-0">Software Engineer</p>
                            </div>
                        </div>
                        </div>

                        {/* <!-- Team Card --> */}
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-two-card">
                            {/* <!-- Team Thumbnail --> */}
                            <div className="team-thumbnail">
                                <img src="src/assets/img/bg-img/86.jpg" alt=""/>
                                
                            </div>
                            {/* <!-- Team Member Info --> */}
                            <div className="team-member-info">
                                <h4 className="mb-1">Denise Ortiz</h4>
                                <p className="mb-0">Project Manager</p>
                            </div>
                        </div>
                        </div>

                        

                    </div>
                </div>

                {/* <!-- Divider --> */}
                <div className="divider"></div>
            </section>

        </div>
    );
  }