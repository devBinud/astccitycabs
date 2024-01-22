import React from "react";
import aboutImg from "../../assets/about_us.png"

const About = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>About Us</h2>
            <p>
              Know More <span>About Us</span>
            </p>
          </div>

          <div class="row gy-4">
            <div
              className="col-lg-7"
              // style={{
              //   backgroundImage:
              //     "url(assets/img/car-rental-responsive-design.png)",
              //   backgroundRepeat: "no-repeat",
              // }}
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <img src={aboutImg} className="img-fluid" alt="about-us"  />
            </div>
            <div
              class="col-lg-5 d-flex align-items-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="content ps-0 ps-lg-5">
                <p class="fw-bold" style={{ color: "#485664" }}>
                  Streamline your journey with our innovative car booking
                  system. Experience the future of transportation as you
                  effortlessly book rides with a{" "}
                  <span class="text-danger">Simple WhatsApp message</span>.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-car-front me-2"></i> Your time matters. With
                    our system, get real-time responses and confirmations,
                    ensuring your ride is on its way at the speed of a message.
                  </li>
                  <li>
                    <i class="bi bi-car-front me-2"></i> Take charge of your
                    travel plans. Request a cab when you need it, where you need
                    it. Enjoy the flexibility of setting your schedule without
                    any hassle.
                  </li>
                  <li>
                    <i class="bi bi-car-front me-2"></i> Bypass complex apps;
                    connect directly via WhatsApp for a streamlined,
                    personalized, and hassle-free experience .
                  </li>
                </ul>

                <div class="position-relative mt-4">
                  <img
                    src="assets/img/about_us_cabs.jpg"
                    class="img-fluid"
                    alt=""
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
