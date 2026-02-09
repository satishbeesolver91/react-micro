import { useEffect } from 'react';

export default function SociusForm({ product, site_id }) {
  
  useEffect(() => {
    // This function tells the Socius script to scan the page for new forms
    const initSocius = () => {
      // 1. Check for the most common global names for this script
      const socius = window.socius || window.sociusForms;
      
      if (socius && typeof socius.init === 'function') {
        socius.init();
      } else {
        // 2. Fallback: Many older scripts re-run on the 'load' event
        window.dispatchEvent(new Event('load'));
      }
    };

    // A small delay (100ms) ensures the HTML is actually in the DOM first
    const timer = setTimeout(initSocius, 100);
    return () => clearTimeout(timer);
  }, [product]); // This runs every time the product changes

  return (
    <div className="socius-form-wrap hero" key={product}> 
      <div 
        className="baseform w-embed"
        data-form-id="form-micro-quote"
        // Use backticks `` for the template literal string
        data-form-name={`Hero Form - ${product || 'Default'}`} 
        data-site-id={site_id}
        data-product="Micro"
        data-input-classes="form-input"
        data-button-classes="button"
        data-hide-labels="true"
        data-spam-type="recaptchaV3"
        data-opt-in="false"
        data-enable-product-selector="false"
        data-sticky-first-last-name="false"
        data-sticky="false"
        data-enable-address="false"
        data-submit-button-text="Submit"
        data-enable-comments="false"
        data-disclaimer="false"
      >
        {/* The script will inject the form inside this empty div */}
        <div></div>
      </div>
    </div>
  );
}