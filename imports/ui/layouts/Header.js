import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header menu_fixed">
          <div id="preloader">
            <div data-loader="circle-side" />
          </div>

          <div id="logo">
            <Link to="/">
              <img
                src="/img/logo2.png"
                width="150"
                height="36"
                data-retina="true"
                alt=""
                className="logo_normal"
              />
              <img
                src="/img/logo2.png"
                width="150"
                height="36"
                data-retina="true"
                alt=""
                className="logo_sticky"
              />
            </Link>
          </div>
          <ul id="top_menu">
            <li>
              <a href="cart-1.html" className="cart-menu-btn" title="Cart">
                <strong>4</strong>
              </a>
            </li>
            <li>
              <Link to="/login" id="sign-in" className="login" title="Sign In">
                Sign In
              </Link>
            </li>
            <li>
              <a
                href="wishlist.html"
                className="wishlist_bt_top"
                title="Your wishlist"
              >
                Your wishlist
              </a>
            </li>
          </ul>

          <a href="#menu" className="btn_mobile">
            <div className="hamburger hamburger--spin" id="hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="menu" className="main-menu">
            <ul>
              <li>
                <span>
                  <a href="#0">Home</a>
                </span>
                <ul>
                  <li>
                    <a href="index.html">Home version 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home version 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home version 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home version 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home version 5</a>
                  </li>
                  <li>
                    <a href="index-6.html">With Cookie bar (EU law)</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="#0">Tours</a>
                </span>
                <ul>
                  <li>
                    <a href="tours-grid-isotope.html">Tours grid isotope</a>
                  </li>
                  <li>
                    <a href="tours-grid-sidebar.html">Tours grid sidebar</a>
                  </li>
                  <li>
                    <a href="tours-grid-sidebar-2.html">Tours grid sidebar 2</a>
                  </li>
                  <li>
                    <a href="tours-grid.html">Tours grid simple</a>
                  </li>
                  <li>
                    <a href="tours-list-isotope.html">Tours list isotope</a>
                  </li>
                  <li>
                    <a href="tours-list-sidebar.html">Tours list sidebar</a>
                  </li>
                  <li>
                    <a href="tours-list-sidebar-2.html">Tours list sidebar 2</a>
                  </li>
                  <li>
                    <a href="tours-list.html">Tours list simple</a>
                  </li>
                  <li>
                    <a href="tour-detail.html">Tour detail</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="#0">Hotels</a>
                </span>
                <ul>
                  <li>
                    <a href="hotels-grid-isotope.html">Hotel grid isotope</a>
                  </li>
                  <li>
                    <a href="hotels-grid-sidebar.html">Hotel grid sidebar</a>
                  </li>
                  <li>
                    <a href="hotels-grid-sidebar-2.html">
                      Hotel grid sidebar 2
                    </a>
                  </li>
                  <li>
                    <a href="hotels-grid.html">Hotel grid simple</a>
                  </li>
                  <li>
                    <a href="hotels-list-isotope.html">Hotel list isotope</a>
                  </li>
                  <li>
                    <a href="hotels-list-sidebar.html">Hotel list sidebar</a>
                  </li>
                  <li>
                    <a href="hotels-list-sidebar-2.html">
                      Hotel list sidebar 2
                    </a>
                  </li>
                  <li>
                    <a href="hotels-list.html">Hotel list simple</a>
                  </li>
                  <li>
                    <a href="hotel-detail.html">Hotel detail</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="#0">Eat &amp; Drink</a>
                </span>
                <ul>
                  <li>
                    <a href="restaurants-grid-isotope.html">
                      Restaurant grid isotope
                    </a>
                  </li>
                  <li>
                    <a href="restaurants-grid-sidebar.html">
                      Restaurant grid sidebar
                    </a>
                  </li>
                  <li>
                    <a href="restaurants-grid-sidebar-2.html">
                      Restaurant grid sidebar 2
                    </a>
                  </li>
                  <li>
                    <a href="restaurants-grid.html">Restaurant grid simple</a>
                  </li>
                  <li>
                    <a href="restaurants-list-isotope.html">
                      Restaurant list isotope
                    </a>
                  </li>
                  <li>
                    <a href="restaurants-list-sidebar.html">
                      Restaurant list sidebar
                    </a>
                  </li>
                  <li>
                    <a href="restaurants-list-sidebar-2.html">
                      Restaurant list sidebar 2
                    </a>
                  </li>
                  <li>
                    <a href="restaurants-list.html">Restaurant list simple</a>
                  </li>
                  <li>
                    <a href="restaurant-detail.html">Restaurant detail</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="#0">Pages</a>
                </span>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="media-gallery.html">Media gallery</a>
                  </li>
                  <li>
                    <a href="help.html">Help Section</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq Section</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist page</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="#0">Extra</a>
                </span>
                <ul>
                  <li>
                    <a href="404.html">404 Error page</a>
                  </li>
                  <li>
                    <a href="cart-1.html">Cart page 1</a>
                  </li>
                  <li>
                    <a href="cart-2.html">Cart page 2</a>
                  </li>
                  <li>
                    <a href="cart-3.html">Cart page 3</a>
                  </li>
                  <li>
                    <a href="pricing-tables.html">Responsive pricing tables</a>
                  </li>
                  <li>
                    <a href="coming_soon/index.html">Coming soon</a>
                  </li>
                  <li>
                    <a href="invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="icon-pack-1.html">Icon pack 1</a>
                  </li>
                  <li>
                    <a href="icon-pack-2.html">Icon pack 2</a>
                  </li>
                  <li>
                    <a href="icon-pack-3.html">Icon pack 3</a>
                  </li>
                  <li>
                    <a href="icon-pack-4.html">Icon pack 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="#0">Buy template</a>
                </span>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
