import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";
const Footer = () => {
const { data = {}, content = {} } = useContext(MicroContext) || {};

const {
  company_name,
  hours_operation1,
  hours_operation2,
  locations,
  gbp_link,
} = data;

const { page } = useParams();

// get current page content
const currentPage = page || "roofing";
const pageData = content?.[currentPage] || {};

  
  return (

    <>
    <div className="section_micro-map-form">
      <div className="w-layout-grid map-form_component">
        <div className="html-embed-6 w-embed w-iframe">
          <iframe
            src={gbp_link}
            title={company_name}
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form_micro-bottom background-color-secondary">
          <div className="form_header-2 text-align-center">
            <div className="form-header-wrapper">
              <div className="form-header_line-2 heading-style-h3 text-color-white">
                {pageData?.footer_form_heading}
              </div>
              <div className="form-header_line-3">
               {pageData?.footer_form_description}
              </div>
            </div>

            <div
              id="form-micro-footer"
              className="form-block-3 is_footer-open w-form"
            >
              <div className="socius-form-wrap hero">
                   <div data-input-classes="form-input" data-form-id="form-micro-quote" data-opt-in="false" className="baseform w-embed" data-enable-product-selector="false" data-sticky-first-last-name="false" data-hide-labels="true" data-sticky="false" data-product="Micro" data-enable-address="false" data-button-classes="button" data-form-name="Hero Form - Product" data-input-group-classes="" data-page-id="" data-submit-button-text="Submit" data-spam-type="recaptchaV3" data-form-location="" data-thank-you-url="" data-enable-comments="false" data-site-id="608f97ef-1a26-4239-b2b7-7d473ad87hg" data-disclaimer="false">
            <div></div>
            </div>
            </div>
          </div>
          </div>

          <div className="button-wrapper_cta-hero">
            {/* <a href="#" className="button is-alternate w-button">
            Get A Quote
            </a> */}

            <NavLink
              to={`/${page}/get-a-quote`}
              className="button is-alternate w-button"
            >
              Get A Quote
            </NavLink>

          </div>
        </div>
      </div>
    </div><footer className="footer_stacked-light">
        <div className="padding-global-3">
          <div className="container-large-3">
            <div className="padding-vertical padding-xxlarge">
              <div className="padding-bottom padding-xlarge">
                <div className="footer7_top-wrapper">
                  <div className="w-layout-grid footer-simple_top-wrapper">
                    <a href="/" className="footer-simple_logo-link w-nav-brand">
                      <img
                        loading="lazy"
                        src="/assets/images/main-logo.png"
                        alt=""
                        className="navbar1_logo-2" />
                    </a>
                    <div className="padding-medium">
                      <div className="w-richtext">
                        <p>
                          <strong>{company_name}</strong>
                          <br />
                        </p>
                        <p>{locations?.location_1}<br/>
                        <br/>
                        <strong>Hours of Operation</strong> <br/>
                        {hours_operation1}
                       </p>
                       
                        <p>
                          {hours_operation2}
                        </p>
                      </div>
                    </div>
                    <div className="w-layout-grid footer-simple_link-list">
                      {" "}
                      <div></div>

                      <NavLink
                          to={`/${page}/why-choose-us`}
                          className={({ isActive }) =>
                            `footer-simple_link text-color-black ${isActive ? "w--current" : ""}`
                          }
                        >Why Choose Us
                      </NavLink>
                      <NavLink to={`/${page}/financing`}  className={({ isActive }) =>
                          `footer-simple_link text-color-black ${isActive ? "w--current" : ""}`
                        }>
                                              Financing
                      </NavLink>
                      <NavLink to={`/${page}/specials`}  className={({ isActive }) =>
                          `footer-simple_link text-color-black ${isActive ? "w--current" : ""}`
                        }>
                                    Special Offers
                      </NavLink>
                      <NavLink to={`/${page}/contact-us`}  className={({ isActive }) =>
                          `footer-simple_link text-color-black ${isActive ? "w--current" : ""}`
                        }>
                            Contact Us
                      </NavLink>
                      <NavLink to={`/${page}/get-a-quote`}  className={({ isActive }) =>
                          `footer-simple_link text-color-black ${isActive ? "w--current" : ""}`
                        }>
                          Get a Quote
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-divider-2"></div>
              <p></p>
              <div className="padding-top padding-medium">
                <div className="footer7_bottom-wrapper text-size-tiny">
                  <div className="footer7_credit-text text-size-regular">
                    © 2025 {company_name}, LLC - All rights reserved.
                  </div>
                  <div className="spacer-1-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer></>
  );
};

export default Footer;
