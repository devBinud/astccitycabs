import React from 'react';
import blog__imgOne from "../../assets/Featured-Image-768x768.jpg";
import blog__imgTwo from "../../assets/featured-image1-768x768.jpg";
import blog__imgThree from "../../assets/featured-image-1-768x768.jpg";

const Blog = () => {
  return (
    <>
    <section id="recent-blog-posts" class="recent-blog-posts">

      <div class="container" data-aos="fade-up">

        {/* <div class="section-header">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </div> */}

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="post-box">
              <div class="post-img"><img src={blog__imgOne} class="img-fluid" alt=""/></div>
              <div class="meta">
                <span class="post-date">Tue, December 12</span>
                <span class="post-author"> / Jupitara Bhuyan</span>
              </div>
              <h3 class="post-title">Breathtaking Bhutan: Discovering the Serenity of the Land of Happiness</h3>
              <p>In the heart of the Eastern Himalayas lies a kingdom unlike any other — Bhutan, the Land of Happiness. Nestled between China and India ...</p>
              <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div class="post-box">
              <div class="post-img"><img src={blog__imgTwo} class="img-fluid" alt=""/></div>
              <div class="meta">
                <span class="post-date">Fri, September 05</span>
                <span class="post-author"> / Arjun Khan</span>
              </div>
              <h3 class="post-title">Breathtaking Bhutan: Discovering the Serenity of the Land of Happiness</h3>
              <p>In the heart of the Eastern Himalayas lies a kingdom unlike any other — Bhutan, the Land of Happiness. Nestled between China and India ...</p>
              <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="600">
            <div class="post-box">
              <div class="post-img"><img src={blog__imgThree} class="img-fluid" alt=""/></div>
              <div class="meta">
                <span class="post-date">Tue, July 27</span>
                <span class="post-author"> / Lisa Goswami</span>
              </div>
              <h3 class="post-title">Breathtaking Bhutan: Discovering the Serenity of the Land of Happiness</h3>
              <p>In the heart of the Eastern Himalayas lies a kingdom unlike any other — Bhutan, the Land of Happiness. Nestled between China and India ...</p>
              <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- End Recent Blog Posts Section --> */}

    </>
  )
}

export default Blog