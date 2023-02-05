import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over ₹1000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+919874563210">
                  (+91) 98765-43210
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">Dev</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
              <input type="text" className="form-control" 
              placeholder="Search Product Here..." 
              aria-label="Search Product Here..." 
              aria-describedby="basic-addon2" />
              <span className="input-group-text p-3" id="basic-addon2">
                {/* p-3 -> padding 3 */}
                <BsSearch className="fs-6"></BsSearch>
                {/* fs-6 -> font size 6 */}
              </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/">
                  <img src = "images/compare.svg" alt="compare" />
                  <p>
                    Compare <br /> Products
                  </p>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                  <img src = "images/wishlist.svg" alt="wishlist" />
                  <p>
                    Favourite <br /> Wishlist
                  </p>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                  <img src = "images/user.svg" alt="wishlist" />
                  <p>
                    Login <br /> My Account
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header