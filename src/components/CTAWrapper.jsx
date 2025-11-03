export default function CTAWrapper() {
    return (
        <div className="cta-wrapper bg-img" style={{backgroundImage: "url(src/assets/img/core-img/grid.jpg)"}}>
        {/*  <!-- Divider --> */}
         <div className="divider"></div>
   
         <div className="container">
            <div className="row g-4 g-xl-5 align-items-center">
               <div className="col-12 col-lg-6 col-xl-7">
                  <h2 className="mb-0 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">Start Building Your
                     Business Now</h2>
               </div>
   
               <div className="col-12 col-lg-6 col-xl-5">
                  <p className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">Communicate your pricing
                     clearly and transparently to build trust with your customers. Hidden fees or
                     unclear pricing structures can lead to dissatisfaction.</p>
                  <a href="/contact" className="btn btn-primary btn-hover-border wow fadeInUp" data-wow-duration="1000ms"
                     data-wow-delay="800ms">Get Started <i className="ti ti-arrow-up-right"></i></a>
               </div>
            </div>
         </div>
   
       {/*   <!-- Divider --> */}
         <div className="divider"></div>
      </div>



    );
  }