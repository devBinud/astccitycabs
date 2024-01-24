import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Testimonials</h2>
            <p>
              What Are They <span>Saying About Us</span>
            </p>
          </div>

          <div class="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row gy-4 justify-content-center">
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          AstcCityCabs has truly transformed my daily commute
                          into a stress-free and enjoyable experience. The
                          reliability and efficiency of their service are
                          unmatched. From the prompt response to booking to the
                          courteous drivers and the comfortable rides, I can't
                          recommend them enough. AstcCityCabs is the go-to
                          choice for anyone seeking a seamless and pleasant
                          transportation solution
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Abhisekh Phukan</h3>
                        <h4>Jalukbari , Guwahati</h4>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          ASTC Citycabs has completely redefined my daily
                          journey, making it stress-free and enjoyable. The
                          reliability and efficiency of their service are second
                          to none. From the swift booking response to the
                          courteous drivers and comfortable rides, I
                          wholeheartedly endorse them. ASTC Citycabs is the
                          ultimate choice for those in search of a smooth and
                          pleasant transportation solution.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Manash Baruah</h3>
                        <h4>Jyotikuchi , Guwahati</h4>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          AstcCityCabs has completely changed my daily commute,
                          making it stress-free and enjoyable. The reliability
                          and efficiency of their service stand out. From the
                          prompt response when booking to the courteous drivers
                          and comfortable rides, I can't speak highly enough of
                          them. AstcCityCabs is the preferred option for
                          anyone looking for a seamless and pleasant
                          transportation solution.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Pritam Jyoti Das</h3>
                        <h4>Bonda , Guwahati</h4>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          The service of ASTC Citycabs has revolutionized my
                          daily travels, turning them into a hassle-free and
                          delightful journey. Their service's reliability and
                          efficiency are unparalleled. From the quick booking
                          response to the courteous drivers and comfortable
                          rides.ASTC Citycabs is the
                          ultimate choice for those seeking a smooth and
                          enjoyable transportation solution.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Amarjeet Sonowal</h3>
                        <h4>Sixmile , Guwahati</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </>
  );
};

export default Testimonial;
