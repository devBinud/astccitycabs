import React from 'react'


const WhyUs = () => {
  return (
    <>
    <section id="why-us" class="why-us section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="why-box">
              <h3>Why Choose ASTC City Cabs?</h3>
              <p>
                ASTC City Cabs prides itself on unwavering reliability. Count on us for <span class="fw-bold">punctual pickups</span>, <span class="fw-bold"> dependable drivers</span> , and a commitment to getting you to your destination <span class="fw-bold">on time</span> , <span class="fw-bold"> every time</span>.
              </p>
            </div>
          </div>
          {/* <!-- End Why Box --> */}

          <div class="col-lg-8 d-flex align-items-center">
            <div class="row gy-4">

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-clipboard-data"></i>
                  <h4>No Cancellation Fees</h4>
                  <p>Fee-Free Cancellations: Reliable service without extra charges awaits you.</p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-gear"></i>
                  <h4>Outstanding Service</h4>
                  <p>Exceeding expectations with exceptional care, our service defines outstanding reliability.</p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-gem"></i>
                  <h4>Fixed Fare Policy</h4>
                  <p>Reliable pricing, fixed fares – your journey with predictable costs assured.</p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}

            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}
    </>
  )
}

export default WhyUs