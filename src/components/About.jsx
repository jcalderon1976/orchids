export default function About() {
      return (
        <div>
        <section id="about" className="about-section ">
                {/*   <!-- Right Shape --> */}
                <div  className="right-shape">
                    <img  src="./src/assets/img/core-img/shape.png" alt=""/>
                </div>

                {/*  <!-- Divider --> */}
                <div className="divider"></div>

                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-lg-6">
                        {/* <!-- About Content --> */}
                        <div className="about-content ps-md-4">
                            <div className="section-heading">
                                <span className="sub-title">About Us</span>
                                <h2 className="mb-4">Every great design begin with an even better story</h2>
                                <p className="mb-5">Orchids Technology is a software engineering company focused on transforming business operations through automation, artificial intelligence, and secure cloud infrastructure.
                                Our team of engineers specializes in delivering solutions that drive efficiency, scalability, and innovation</p>

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

                                 {/* <!-- Button --> */}
                                 <a className="btn btn-primary" href="/about">Read More About Us<i className="ti ti-arrow-up-right"></i></a>
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

                {/* <!-- Divider --> */}
                <div className="divider"></div>
        </section>
        </div>
    );
  }