import React from 'react'

const Hero = () => {
  return (
    <>
  <div id="hero" class="hero d-flex align-items-center section-bg">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Ride with us<br/> @flat ₹599/-</h2>
          <p class="hero-para" data-aos="fade-up" data-aos-delay="100">Explore Guwahati Hassle-Free – Our Cabs Are Everywhere!</p>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="https://wa.me/9706393924" class="btn-book-a-table"><i class="bi bi-whatsapp me-2"></i> Book Now Via Whatsapp</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
          <img src="assets/img/hero__car.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Hero