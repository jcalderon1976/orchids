export default function ProcessSession() {
    return (
       
            <section className="process-section ">
            {/*  <!-- Divider --> */}
            <div className="divider"></div>

            <div className="container">
            {/*   <!-- Section Heading --> */}
                <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-7">
                    <div className="section-heading text-center">
                        <span className="sub-title">Working Process</span>
                        <h2 className="mb-0">Our Approach to Development usign CI/CD</h2>
                    </div>
                </div>
                </div>

                <div className="divider-sm"></div>

            {/*  <!-- Process Wrap --> */}
                <div className="process-wrap">
                  <div className="row g-4 g-lg-5">

                    {/*  <!-- Process Card --> */}
                    <div className="col-12 col-md-3">
                        <div className="process-card wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                            <div className="process-thumb">
                            <img src="src/assets/img/bg-img/13.jpg" alt=""/>
                            <div className="number">1</div>
                            </div>
                            <div className="process-text">
                            <h5 className="process-title mb-3">Source - Define Requirements</h5>
                            <p className="mb-0">We collaborate with stakeholders to gather and document project requirements, ensuring clear objectives and expectations are established.</p>
                            </div>
                        </div>
                    </div>

                    {/*  <!-- Process Card --> */}
                    <div className="col-12 col-md-3">
                        <div className="process-card wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <div className="process-thumb">
                            <img src="src/assets/img/bg-img/14.jpg" alt=""/>
                            <div className="number">2</div>
                            </div>
                            <div className="process-text">
                            <h5 className="process-title mb-3">Build - Desing and Development</h5>
                            <p className="mb-0">Our focus is on providing a scalable, efficient, and well-tested product ready for real-world implementation and long-term success.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Process Card --> */}
                    <div className="col-12 col-md-3">
                        <div className="process-card wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
                            <div className="process-thumb">
                            <img src="src/assets/img/bg-img/15.jpg" alt=""/>
                            <div className="number">3</div>
                            </div>
                            <div className="process-text">
                            <h5 className="process-title mb-3">Test - Quality Control and Testing</h5>
                            <p className="mb-0">We ensure that the solution meets the defined requirements and user needs by performing thorough testing and quality control measures.</p>
                            </div>
                        </div>
                    </div>

                    {/*  <!-- Process Card --> */}
                    <div className="col-12 col-md-3">
                        <div className="process-card wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
                            <div className="process-thumb">
                            <img src="src/assets/img/bg-img/15_5.jpg" alt=""/>
                            <div className="number">4</div>
                            </div>
                            <div className="process-text">
                            <h5 className="process-title mb-3">Deployment - Final Solution</h5>
                            <p className="mb-0">We deliver the final solution with precision and quality, ensuring that every component aligns with the defined requirements and user needs. </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="spaceBottom">               
            </div>
            </section>
    );
  }