import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";
import Gallery from "../components/gallery";
import LightBox from "../components/lightbox";
import Reviews from "../components/reviews";
import TrustedLogos from "../components/TrustedLogos";
import FormattedContent from "../components/FormattedContent";


const LandingPage = () => {
  const { page } = useParams();
  const { content } = useContext(MicroContext);
  const {data:{site_id}} = useContext(MicroContext);
  const {data:{product}} = useContext(MicroContext);  
  const data = content['home']
  //console.log(data);
  return (
    <>
      <div className="section_micro-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="hero_component">
                <div className="div-block-7">
                  <div className="margin-bottom">
                    <div className="hero-heading-title">
                      <strong className="bold-text-6">
                        {data?.hero_heading}
                      </strong>
                    </div>
                    <p className="text-size-medium text-color-white hero-subtitle">
                      <strong className="bold-text">
                        {data?.hero_description}
                      </strong>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="hero-form_container background-color-primary">
                  <div className="form-header-wrapper">
                    <div className="form-header_line-2 heading-style-h3 text-color-white">
                      {data?.form_heading}
                    </div>
                    <div className="form-header_line-3">
                      {data?.form_description}
                    </div>
                  </div>

                    <Link
                      to={`/${page}/contact-us`}
                        className="button is-accent max-width-full hide-desktop w-button"
                      >
                      Contact Us
                    </Link>

                  
                    <div className="socius-form-wrap hero">
                      <div data-input-classes="form-input" data-form-id="form-micro-quote" data-opt-in="false" className="baseform w-embed" data-enable-product-selector="false" data-sticky-first-last-name="false" data-hide-labels="true" data-sticky="false" data-product="Micro" data-enable-address="false" data-button-classes="button" data-form-name={`Hero Form - ${product}`} data-input-group-classes="" data-page-id="" data-submit-button-text="Submit" data-spam-type="recaptchaV3" data-form-location="" data-thank-you-url="" data-enable-comments="false" data-site-id={site_id} data-disclaimer="false">
                      <div></div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero_background-image-wrapper">
          <div className="image-overlay-layer"></div>
          <img
            src={data?.hero_image}
            alt=""
            className="hero_background-image"
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
                    <div>
                      
                      <FormattedContent text={data?.content_1_description} />
                    </div>
                    
                    
                  </div>

                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      {/* <a href="#" className="button is-accent w-button">
                        Get a Quote
                      </a> */}

                      <Link
                      to={`/${page}/get-quote`}
                        className="button is-accent w-button"
                      >
                      Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content_image-wrapper">
                  <img loading="lazy" sizes="(max-width: 1024px) 100vw, 1024px" src={data?.content_1_img} alt="" className="micro-5050-content_image"/>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="special-offers-section-micro">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid special-offers-component">
                <div className="special-offer-card">
                  <div className="content-wrapper">
                    <img
                      src={data?.special_cta_image}
                      loading="lazy"
                      alt=""
                      className="img-cover-mh30"
                    />

                  </div>
                  <div className="content-wrapper padding-small">
                    <h2 className="heading-style-h4">{data?.special_offer_cta_heading}</h2>
                    <p className="text-size-regular">
                      {data?.special_offer_cta_description}
                    </p>
                    <div className="button-group-6">
                      {/* <a href="#" className="button is-small w-button">
                        Learn More
                      </a> */}

                      <Link
                      to={`/${page}/specials`}
                        className="button is-small w-button"
                      >
                      Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="cta35_content flex-h special-offer-card">
                  <div className="content-wrapper">
                    <img
                      src={data?.financing_cta_img}
                      loading="lazy"
                      alt=""
                      className="img-cover-mh30"
                    />
                  </div>
                  <div className="content-wrapper padding-small">
                    <h2 className="heading-style-h4">{data?.financing_offer_cta_heading}</h2>
                    <p className="text-size-regular">
                      {data?.financing_offer_cta_description}
                    </p>
                    <div className="button-group-6">
                      {/* <a href="#" className="button is-small w-button">
                        Learn More
                      </a> */}

                      <Link
                      to={`/${page}/financing`}
                        className="button is-small w-button"
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
      </section>

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
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h1">
                      {data?.content_2_heading}
                    </h2>
                  </div>  

                  <div className="w-richtext">
                    <div>
                      <FormattedContent text={data?.content_2_description} />
                    </div>
                    
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
     
      <TrustedLogos />
      <Reviews />

    </>
  );
};

export default LandingPage;
