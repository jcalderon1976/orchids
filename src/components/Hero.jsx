export default function Hero() {
    return (
        <section id="home" className="hero-section" style={{backgroundImage: "url('./src/assets/img/core-img/grid3.png')"}}>
        {/* <!-- Divider --> */}
        <div className="divider"></div>
  
        <div className="container">
           {/* <!-- Hero Content --> */}
           <div className="hero-content">
              <div className="row g-5">
                 <div className="col-12 col-md-6">
                    <h2 className="mb-0 wow fadeInUp text-white" data-wow-duration="1000ms" data-wow-delay="400ms"> 
                    Innovating <span>Business</span> Through Intelligent Software
                     
                    </h2>
                 </div>
  
                 <div className="col-12 col-md-6 col-xl-5 offset-xl-1 col-xxl-4 offset-xxl-1">
                    <p className="text-white wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                   At Orchid Technology,  we build scalable, flexible, secure, and AI-driven solutions that empower enterprises to grow faster and smarter.
                   We are dedicated transforming your digital aspirations into reality. With a passion for innovation and a commitment to excellence.
                    </p>
                    <a className="btn border-2 btn-outline-light wow fadeInUp" data-wow-duration="1000ms"
                       data-wow-delay="800ms" href="/services">Our Services <i className="ti ti-arrow-up-right"></i></a>
                 </div>
              </div>
           </div>
        </div>
  
     {/*    <!-- Divider --> */}
        <div className="divider"></div>
     </section>
    );
  }