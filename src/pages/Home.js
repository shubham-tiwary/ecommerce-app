import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (<>
  
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className="img-fluid rounded-4" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From ₹59999.00 or ₹5999/mo. </p>
                <Link to="/" className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-relative">
              <img src="images/catbanner-01.jpg" className="img-fluid rounded-4" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>BEST SALE</h4>
                <h5>Laptops Max</h5>
                <p>From ₹59999.00 <br />or ₹5999/mo. </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-02.jpg" className="img-fluid rounded-4" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy iPad Air</h5>
                <p>From ₹59999.00 <br />or ₹5999/mo. </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-03.jpg" className="img-fluid rounded-4" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>15% OFF</h4>
                <h5>Smartwatch 7</h5>
                <p>Shop the latest band<br />styles & colors.</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className="img-fluid rounded-4" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>FREE ENGRAVING</h4>
                <h5>Airpods Max</h5>
                <p>High Fidelity playback &<br />ultra-low distortion</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                    <div>
                      <h6>Free Delivery</h6>
                      <p className="mb-0">On orders above ₹599</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                    <div>
                      <h6>Daily Surprise Offers</h6>
                      <p className="mb-0">Upto 60% off</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                    <div>
                      <h6>24x7 Support</h6>
                      <p className="mb-0">Shop with an expert</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                    <div>
                      <h6>Affordable Prices</h6>
                      <p className="mb-0">Get Factory Default Prices</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                    <div>
                      <h6>Secure Payments</h6>
                      <p className="mb-0">100% Protected Payments</p>
                    </div>
                </div>

              </div>

            </div>
          </div>
        </div>
    </section>

    <section className="home-wrappper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div classname="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Smart Wearbles</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="headphone"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv"></img>
              </div>
              <div className="gap-30 d-flex align-items-center">
                <div>
                  <h6>Smart Wearbles</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="headphone"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="marquee-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">

          </div>
          <div className="col-3">
            
          </div>
          <div className="col-3">
            
          </div>
          <div className="col-3">
            
          </div>
        </div>
      </div>
    </section>

  </>
  )
}

export default Home