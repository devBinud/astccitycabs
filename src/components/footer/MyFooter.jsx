import React from 'react'

const Footer = () => {
  return (
    <>
  <div id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <div class="footer-logo">
               <img src="assets/img/logo/citycabslogo.webp" class="img-fluid" alt=""/>
            </div>
            <p>
              ASTC Paltan Bazar <br/>
              Guwahati, PIN - 781008<br/>
              Assam, India <br/><br/>
              <strong>Phone:</strong>  0361 7961144<br/>
              <strong>Email:</strong>  support@astccitycabs.com<br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#!">Ride With Us</a></li>
              <li><a href="#!">Charging Partners</a></li>
              <li><a href="#!">Terms of service</a></li>
              <li><a href="#!">ASTC Support</a></li>
              <li><a href="#!">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#!">City Ride</a></li>
              <li><a href="#!">Northeast Trip</a></li>
              <li><a href="#!">Hotel Drop</a></li>
              <li><a href="#!">Book Hotels</a></li>
              <li><a href="#!">Airport Trip</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p class="social-links-para">Stay connected! Follow us on social media for updates, promotions, and exciting travel content. Your journey, our stories – together on social.</p>
            <div class="social-links mt-3">
              <a href="#!" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#!" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#!" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#!" class="google-plus"><i class="bi bi-pinterest"></i></a>
              <a href="#!" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="copyright">
        &copy;2024 Copyright <strong><span>Assam State Transport Corporation City Cabs</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed & Developed by <a class="fw-bold" href="https://codepilot.in/">Codepilot Technologies</a>
      </div>
    </div>
  </div>
  {/* <!-- End Footer --> */}

    </>
  )
}

export default Footer