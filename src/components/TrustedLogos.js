import { useContext } from "react";
import MicroContext from "../context/MicroContext";

const TrustedLogos = () => {

  const { content } = useContext(MicroContext  );
  const data = content['home']
  console.log(data);

  return (
    <div className="section_trust-logos">
   <section className="section_logo">
     <div className="container-large">
       <div className="padding-large">
         <div className="max-width-large align-center">
           <div className="margin-bottom margin-small">
             <h2 className="heading-style-h2">{data?.brands_we_trust_heading}</h2>
           </div>
         </div>
         <div className="spacer-2"></div>
         <div className="collection_trust-logos w-container">
         <img sizes="(max-width: 700px) 100vw, 700px" loading="lazy" id="w-node-_833942f8-6514-a88b-6d83-900abe2b5e38-be2b5e2e" src="/assets/images/facebook_5stars.png" alt="" className="trust-logo_logo" />
         <img loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 810px) 95vw, 770px" src="/assets/images/facebook_5stars.png" alt="" className="trust-logo_logo" />
         <img loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 939.9791870117188px" src="/assets/images/facebook_5stars.png" alt="" className="trust-logo_logo" />
           <img loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 939.9583740234375px" src="/assets/images/facebook_5stars.png" alt="" className="trust-logo_logo" />
         </div>
       </div>
     </div>
   </section>
 </div>
  );
};
export default TrustedLogos;
