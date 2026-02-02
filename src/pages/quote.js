import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";
import Gallery from "../components/gallery";
import LightBox from "../components/lightbox";
import Reviews from "../components/reviews";
import TrustedLogos from "../components/TrustedLogos";

const Quote = () => {
  const { page } = useParams();
  const { content } = useContext(MicroContext  );
  const data = content['get-a-quote']
    return (  
        <>
        <div className="section_micro-hero">
          <div className="hero-content-container">
            <div className="padding-global">
              <div className="container-small">
                <div className="padding-section-large">
                  <div id="w-node-f20fd2d7-9835-679e-9277-a2cbfb3dc1d7-d48be57b" className="why-choose-form-wrapper">
                    <div id="w-node-e8e89027-8669-d479-7e8d-6dcc51df6f6f-d48be57b" className="form-heading-wrap">
                      <h1 className="heading-3 text-align-center">{data?.hero_heading}</h1>
                      <p className="hero-text text-color-white text-shadow">{data?.hero_description}</p>
                      <div className="spacer-1"></div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header5_background-image-wrapper">
            <div className="image-overlay-layer"></div>
            <img loading="lazy" sizes="100vw" src={data?.hero_image} alt="" className="header5_background-image" />
          </div>
        </div>
        <section id="content-1" className="contact-section-micro">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="text-stack-center">
                <h2>{data?.form_header}</h2>
                <div className="hero-text text-align-center">
            <p>{data?.form_description}</p></div>
                <div className="spacer-1"></div>
              </div>

            </div>
          </div>
        </section>

        <LightBox />
        <Gallery />
        <Reviews />
          
        
        </>
    );
};

export default Quote;