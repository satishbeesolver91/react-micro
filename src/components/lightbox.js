import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";

import { useEffect } from "react";
import { destroyLightboxSplide, initLightboxSplide } from "./required";

const LightBox = () => {



  useEffect(() => {
    initLightboxSplide();

    return () => {
      destroyLightboxSplide();
    };
  }, []);
  const { page } = useParams();
  const { content } = useContext(MicroContext);
  const data = content['home']

  return (
    <div className="custom-lightbox">
      <div className="padding-global">
        <div className="lightbox-container">
          <div id="w-node-ccdc8544-524a-99ef-5ffa-aab12bb31edf-0eb35033" className="content-form-wrapper">
            <div className="form-heading-wrap">
              <div className="form-heading-lg">Get a Quote</div>
              <div className="form-heading-md">Fill out the form below to learn more.</div>
              <div className="form-heading-mobile">Reach Out Today to Get Started!</div>
                <div id="form-micro-quote" className="form-block-3 is_hero-open w-form">
                     <div className="socius-form-wrap hero">
                      <div data-input-classes="form-input" data-form-id="form-micro-quote" data-opt-in="false" className="baseform w-embed" data-enable-product-selector="false" data-sticky-first-last-name="false" data-hide-labels="true" data-sticky="false" data-product="Micro" data-enable-address="false" data-button-classes="button" data-form-name="Hero Form - Product" data-input-group-classes="" data-page-id="" data-submit-button-text="Submit" data-spam-type="recaptchaV3" data-form-location="" data-thank-you-url="" data-enable-comments="false" data-site-id="608f97ef-1a26-4239-b2b7-7d473ad9jh6t" data-disclaimer="false">
                      <div></div>
                      </div>
                      </div>
                  </div>
            </div>
            <div className="button-wrapper_cta-hero">

              <Link
                to={`/${page}/get-quote`}
                  className="button is-accent w-button"
              ></Link>
              {/* <a href="product/get-a-quote.php" className="button is-accent w-button">Submit</a> */}
            </div>
          
          </div>
          <div id="main-carousel" className="splide">
            <div className="splide__track">
              <div id="lightbox-splide-list" data-w-id="de4f9a17-380a-f66f-79fc-7d390eb35061" className="splide__list"></div>
            </div>
          </div>
        </div>
      </div>
      <a data-w-id="de4f9a17-380a-f66f-79fc-7d390eb35062" href="#" className="lightbox-close-modal_link w-inline-block">
        <div className="icon-sm-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
          </svg></div>
      </a>
    </div>
  );
};
export default LightBox;
