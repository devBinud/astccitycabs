import React from 'react'

const CTA = () => {
  return (
    <>
        <section id="cta" class="cta">
          <div class="container" data-aos="zoom-out">
    
            <div class="row g-5">
    
              <div class="col-lg-6 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                <h3>Discover convenience with <em>ASTC City Cabs</em>  Book now for reliable rides </h3>
                <a class="cta-btn align-self-start" href="https://wa.me/919706393924"><i class="bi bi-whatsapp me-1"></i> Book Now Via Whatsapp</a>
              </div>
    
              <div class="col-lg-6 col-md-6 order-first order-md-last d-flex align-items-center">
                <div class="img">
                  <img src="assets/img/about_us_cabs.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}

    </>
  )
}

export default CTA