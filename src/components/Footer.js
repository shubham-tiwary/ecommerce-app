import React from 'react'
import {Link} from "react-router-dom";
const Footer = () => {
  return (<>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className="mb-0 text-white">Sign Up for our Newsletters</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
              <input
              type="text"
              className="form-control py-1"
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
        </div>
    </footer>
    
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                161 Downing Street, <br /> Mumbai, Maharashtra <br />
                Pin - 4000001
              </address>
              <a href="tel:+91 9876543210" className="mt-4 d-block mb-2 text-white">
                +91 9876543210
              </a>
              <a href="mailto:shubham-tiwary@outlook.com" className="mt-4 d-block mb-2 text-white">
                shubham-tiwary@outlook.com
              </a>
              <div className="social-icons">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-link d-flex flex-column">
              <Link to="/" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/" className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to="/" className="text-white py-2 mb-1">Terms & Conditions</Link>
              <Link to="/" className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-link d-flex flex-column">
              <Link to="/" className="text-white py-2 mb-1">Search</Link>
              <Link to="/" className="text-white py-2 mb-1">About Us</Link>
              <Link to="/" className="text-white py-2 mb-1">FAQ</Link>
              <Link to="/" className="text-white py-2 mb-1">Contact</Link>
              <Link to="/" className="text-white py-2 mb-1">Size Chart</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-link d-flex flex-column">
              <Link to="/" className="text-white py-2 mb-1">Accessories</Link>
              <Link to="/" className="text-white py-2 mb-1">Laptops</Link>
              <Link to="/" className="text-white py-2 mb-1">Headphones</Link>
              <Link to="/" className="text-white py-2 mb-1">Smart Watches</Link>
              <Link to="/" className="text-white py-2 mb-1">Tablets</Link>
            </div>
          </div>
        </div>
     </div>
    </footer>
    
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}: Developed by Shubham
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer