import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";
import LightBox from "../components/lightbox";
import Gallery from "../components/gallery";
import Reviews from "../components/reviews";
import TrustedLogos from "../components/TrustedLogos";
import FormattedContent from "../components/FormattedContent";

const Choose = () => {
const { page } = useParams();
const { content } = useContext(MicroContext  );
const data = content['why-choose-us']
console.log(data);
  return (
    <>
      <div className="section_micro-hero">
        <div className="hero-content-container">
          <div className="padding-global">
            <div className="container-small">
              <div className="padding-section-large">
                <div
                  id="w-node-f20fd2d7-9835-679e-9277-a2cbfb3dc1d7-d48be57b"
                  className="why-choose-form-wrapper"
                >
                  <div
                    id="w-node-e8e89027-8669-d479-7e8d-6dcc51df6f6f-d48be57b"
                    className="form-heading-wrap"
                  >
                    <h1 className="heading-3 text-align-center">
                      {data?.hero_heading}
                    </h1>
                    <p className="hero-text text-color-white text-shadow">
                      {data?.hero_description}
                    </p>
                    <div className="spacer-1"></div>
                      <div id="form-micro-quote" className="form-block-3 is_hero-open w-form">
                     <div class="socius-form-wrap hero">
                      <div data-input-classes="form-input" data-form-id="form-micro-quote" data-opt-in="false" class="baseform w-embed" data-enable-product-selector="false" data-sticky-first-last-name="false" data-hide-labels="true" data-sticky="false" data-product="Micro" data-enable-address="false" data-button-classes="button" data-form-name="Hero Form - Product" data-input-group-classes="" data-page-id="" data-submit-button-text="Submit" data-spam-type="recaptchaV3" data-form-location="" data-thank-you-url="" data-enable-comments="false" data-site-id="608f97ef-1a26-4239-b2b7-7d473ad9jh6t" data-disclaimer="false">
                      <div></div>
                      </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header5_background-image-wrapper">
          <div className="image-overlay-layer"></div>
          <img
            loading="lazy"
            sizes="100vw"
            src={data?.hero_image}
            alt=""
            className="header5_background-image"
          />
        </div>
      </div>
      <div className="section_content-micro">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="content2_component">
                <div className="content2_content">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h1">
                      {data?.content_1_heading}
                    </h1>
                  </div>
                  <div className="w-richtext">
                    
                    <FormattedContent text={data?.content_1_description} />
                  </div>

                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      {/* <a href="#" className="button is-accent w-button">
                        Get a Quote
                      </a> */}

                      <Link
                        to={`/${page}/get-a-quote`}
                          className="button is-accent w-button"
                        >
                        Get A Quote
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content_image-wrapper">
                  <img
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    src={data?.content_1_img}
                    alt=""
                    className="micro-5050-content_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_content-micro-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="content2_component">
                <div className="content_image-wrapper">
                  <img
                    loading="lazy"
                    src={data?.content_2_image}
                    alt=""
                    className="micro-5050-content_image"
                  />
                </div>
                <div className="content2_content">
                  <h2 className="heading-style-h1">
                    {data?.content_2_heading}
                  </h2>
                  <div className="w-richtext">
                    <FormattedContent text={data?.content_2_description} />
                  </div>
                
                  <div className="button-group">
                    {/* <a href="#" className="button is-accent w-button">
                      Learn More
                    </a> */}

                    <Link
                      to={`/${page}/get-a-quote`}
                        className="button is-accent w-button"
                      >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <LightBox />                
      <Gallery />
      <Reviews />

      
    </>
  );
};

export default Choose;
