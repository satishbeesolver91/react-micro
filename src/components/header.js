import { useContext, useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";


const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

const { data, content } = useContext(MicroContext) || {};
//console.log(content?.product?.page_name);
const page_name = content?.product?.page_name;
const why_choose_name = content?.['why-choose-us']?.page_name;
const financing_name = content?.financing?.page_name;
const specials_name = content?.specials?.page_name;
const contact_name = content?.['contact-us']?.page_name;

const phone_numbers = data?.phone_numbers;
const site_id = data?.site_id;
const product = data?.product;
  const { page } = useParams();

  return (
    <header className="header-wrapper">
      <div className="sticky-nav_container">
        <div className="sticky-nav_form-header background-color-primary">
          <div>Open 7 Days a Week &amp; Most Holidays</div>
          <div className="stick-nav_cta_button-row">
            <div className="sticky-nav_phone-icon-link">
              <div className="icon-1x1-xxsmall w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            
              <a href={`tel:+1${phone_numbers?.primary.replace(/[()\-\s]/g, "")}`}
                    className="is-phone">  
                {phone_numbers?.primary}
              </a>
            </div>
          </div>
        </div>
        <div
          data-animation="default"
          className="navbar4_component w-nav"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="all"
          data-w-id="3c9e0e02-bf3b-00e1-544e-6e086dde200c"
          role="banner"
          data-no-scroll="1"
          data-duration="400"
        >
          <div className="navbar4_container">
           <NavLink
            to={`/${page}`}
            end
            className={({ isActive }) =>
                `navbar1_logo-link w-nav-brand ${isActive ? "w--current" : ""}`
            }
>
            </NavLink>

            <Link
            to={`${page}`}
              className="navbar4_logo-link w-nav-brand w--current"
            >
             <img
                loading="lazy"
                src="/assets/images/main-logo.png"
                alt=""
                className="navbar_sticky-logo"
              />
            </Link>
            {/* <a
              href="#"
              aria-current="page"
            
              aria-label="home"
            >
              <img
                loading="lazy"
                src="/assets/images/main-logo.png"
                alt=""
                className="navbar_sticky-logo"
              />
            </a> */}
            <div className="sticky-nav_special-offer">

              <div data-input-classes="form-input" data-form-id="form-micro-sticky" data-opt-in="false" className="baseform w-embed" data-enable-product-selector="false" data-sticky-first-last-name="false" data-hide-labels="true" data-sticky="true" data-product="Webflow Micro" data-enable-address="false" data-button-classes="sticky-button" data-form-name={`Sticky Form - ${product}`} data-input-group-classes data-page-id data-submit-button-text="Get A Quote" data-spam-type="recaptchaV3" data-form-location data-thank-you-url data-enable-comments="false" data-site-id={site_id} data-disclaimer="false" data-v-app></div>
            </div>
          </div>

          <div className={`sidebar_nav-wrapper ${isSidebarOpen ? "open" : ""}`}>

            <nav role="navigation" className="sidebar_menu w-nav-menu">
              <div className="sidebar_menu-wrapper">
               {page_name && (
                   <NavLink to={`/${page}/${page_name}`} className={({ isActive }) =>
                      `sidebar-menu-link-text sidebar_menu-link ${isActive ? "w--current" : ""}`
                    } onClick={closeSidebar}>
                  <div>{page_name.charAt(0).toUpperCase() + page_name.slice(1)}</div>
                </NavLink>
               )}
               {why_choose_name && (
                <NavLink to={`/${page}/why-choose-us`} className={({ isActive }) =>
                    `sidebar-menu-link-text sidebar_menu-link ${isActive ? "w--current" : ""}`
                  } onClick={closeSidebar}>
                  <div>Why Choose Us</div>
                </NavLink>
                 )}
                  {financing_name && (
                <NavLink
                  to={`/${page}/financing`}
                className={({ isActive }) =>
                  `sidebar-menu-link-text sidebar_menu-link ${isActive ? "w--current" : ""}`
                }onClick={closeSidebar}
                >
                  <div>Financing</div>
                </NavLink>
                 )}
                  {specials_name && (
                <NavLink
                  to={`/${page}/specials`}
                  className={({ isActive }) =>
                  `sidebar-menu-link-text sidebar_menu-link ${isActive ? "w--current" : ""}`
                } onClick={closeSidebar}
                >
                  <div>Special Offers</div>
                </NavLink>
                )}
                {contact_name && (
                <NavLink
                  to={`/${page}/contact-us`}
                  className={({ isActive }) =>
                  `sidebar-menu-link-text sidebar_menu-link ${isActive ? "w--current" : ""}`
                } onClick={closeSidebar}
                >
                  <div>Contact&nbsp;Us</div>
                </NavLink>
                )}
                <div className="sidebar_menu-wrapper">
                  
                  <a href={`tel:+1${phone_numbers?.primary.replace(/[()\-\s]/g, "")}`}
                    className="button is-alternate max-width-full w-button">
                    {phone_numbers?.primary}
                  </a>
                  {/*<div className="rich-company-info-2 text-color-white w-richtext">
                    <p>
                      <strong> {company_name}</strong>
                      <br />
                      Call us 24 hours a day, 7 days a week!
                    </p>
                  </div>*/}
                </div>
              </div>
            </nav>
          </div>

          <div
            className="navbar4_menu-button w-nav-button"
            onClick={toggleSidebar}
            role="button"
            aria-label="menu">

            <div className="menu-icon4">
              <div className="menu-icon4_wrapper">
                <div className="menu-icon4_line-top background-color-primary"></div>
                <div className="menu-icon4_line-middle">
                  <div className="menu-icon_line-middle-top"></div>
                  <div className="menu-icon_line-middle-base background-color-primary"></div>
                </div>
                <div className="menu-icon4_line-bottom background-color-primary"></div>
              </div>
            </div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-0"
          ></div>
        </div>
      </div>
      <div className="main-nav-container">
        <div className="secondary-nav-container">
          <div className="secondary-nav_menu">
            <div className="sticky-nav_phone-icon-link">
              <div className="icon-1x1-xxsmall w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              
              <a href={`tel:+1${phone_numbers?.primary.replace(/[()\-\s]/g, "")}`}
                className="is-phone">
                <strong>{phone_numbers?.primary}</strong>
              </a>
            </div>
          </div>
        </div>
        <div
          data-animation="default"
          className="navbar1_component w-nav"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="medium"
          data-w-id="ee77902e-7afc-dab5-eb2a-0694e7e4ebaf"
          role="banner"
          data-duration="400"
        >
          <div className="navbar1_container">
            <NavLink
              to={page}
              className="navbar1_logo-link w-nav-brand"
              aria-label="home"
            >
              <img
                src="/assets/images/main-logo.png"
                alt=""
                className="navbar_logo"
              />
            </NavLink>
            <nav
              role="navigation"
              className={`navbar1_menu is-page-height-tablet w-nav-menu ${isSidebarOpen ? "open" : ""}`}
            >
               {page_name && (
                <NavLink to={`/${page}/${page_name}`}  className={({ isActive }) =>
              `navbar1_link w-nav-link ${isActive ? "w--current" : ""}`
            } onClick={closeSidebar}>
                {page_name.charAt(0).toUpperCase() + page_name.slice(1)}
              </NavLink>
               )}
               {why_choose_name && (
              <NavLink to={`/${page}/why-choose-us`}  className={({ isActive }) =>
                `navbar1_link w-nav-link ${isActive ? "w--current" : ""}`
              } onClick={closeSidebar}>
                Why Choose Us
              </NavLink>
               )}
               {financing_name && (
              <NavLink to={`/${page}/financing`}  className={({ isActive }) =>
              `navbar1_link w-nav-link ${isActive ? "w--current" : ""}`
            } onClick={closeSidebar}>
                Financing
              </NavLink>
               )}
                {specials_name && (
              <NavLink to={`/${page}/specials`}  className={({ isActive }) =>
                `navbar1_link w-nav-link ${isActive ? "w--current" : ""}`
              } onClick={closeSidebar}>
                Special Offers
              </NavLink>
               )}
                {contact_name && (
              <NavLink to={`/${page}/contact-us`}  className={({ isActive }) =>
                  `navbar1_link w-nav-link ${isActive ? "w--current" : ""}`
                } onClick={closeSidebar}>
                Contact Us
              </NavLink>
              )}
              <div className="navbar1_menu-buttons">
                
                  <a href={`tel:+1${phone_numbers?.primary.replace(/[()\-\s]/g, "")}`}
                    className="button is-small mobile-menu w-button">
                  {phone_numbers?.primary}
                </a>
              </div>
            </nav>
            <div
              className="navbar1_menu-button w-nav-button"
              onClick={toggleSidebar}
              role="button"
              aria-label="menu"
            >
              <div className="menu-icon1">
                <div className="menu-icon1_line-top"></div>
                <div className="menu-icon1_line-middle">
                  <div className="menu-icon_line-middle-inner"></div>
                </div>
                <div className="menu-icon1_line-bottom"></div>
              </div>
            </div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-1"
          ></div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}
    </header>
  );
};

export default Header;
