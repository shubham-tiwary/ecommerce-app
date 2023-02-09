import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (<>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
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
              <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>BEST SALE</h4>
                <h5>Laptops Max</h5>
                <p>From ₹59999.00 <br />or ₹5999/mo. </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy iPad Air</h5>
                <p>From ₹59999.00 <br />or ₹5999/mo. </p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>15% OFF</h4>
                <h5>Smartwatch 7</h5>
                <p>Shop the latest band<br />styles & colors.</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main banner" />
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
  </>
  )
}

export default Home