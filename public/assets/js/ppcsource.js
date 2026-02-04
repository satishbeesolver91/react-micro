// RECAPTCHA KEY
window.recaptchaSiteKey = "6LeJ-6coAAAAAPXaC3VGV2W_axbB7fQv09m3CBWg";
  
// COUNTRY SELECTOR - UNCOMMENT TO USE
/* window.selectCountries = ["us", "ca"]; */

// SERVICE AREA ZIPS - UNCOMMENT TO USE
/* window.serviceAreaZipCodes = ["33634", "35343"]; */
  
// PRODUCTS OF INTEREST (FORM DROPDOWN/SELECT)
window.productOfInterest=["Service 1", "Service 2", "Service 3", "Service 4"];
window.preselectedProduct="Service 1";

// DISCLAIMER & OPT-IN MESSAGE
  
window.formOptInMessage="I agree to the terms";
window.formDisclaimer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
 
window.hideDisclaimerUntilClicked = false;
window.disclaimerAfterButton = false;
  
// REDIRECTION - THANK YOU
/* window.thankYouUrl=""; */
/* window.redirectToThanksWithQueryParams = false; */
  

  window.phoneMap = {
    ppc: "(000) 000-0000",
    googleppc: "(000) 000-0555",
  };

  window.basePhone = "(000) 000-0000";

  window.cityMap = {
    me: "Maine",
    ma: "Massachusetts",
    nh: "New Hampshire",
  };

  (function () {
    const QUERY_KEYS = {
      source: "source",
      referrer: "referer",
      city: "city",
    };

    const INPUT_SELECTORS = {
      source: ".ppc-source",
      referrer: ".referer",
    };

    function getQueryParam(key) {
      return new URLSearchParams(window.location.search).get(key);
    }

    function getCookies() {
      return Object.fromEntries(
        document.cookie
          .split("; ")
          .map((c) => c.split("="))
          .filter((c) => c.length === 2)
      );
    }

    function setCookie(name, value) {
      if (!value) return;

      const expires = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toUTCString();

      document.cookie = [
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
        "path=/",
        `expires=${expires}`,
        "SameSite=Lax",
        location.protocol === "https:" ? "Secure" : "",
      ].join("; ");
    }

    function fillInputs(selector, value) {
      if (!value) return;
      document.querySelectorAll(selector).forEach((el) => {
        if (el.tagName === "INPUT") el.value = value;
      });
    }

    function replaceCityText(city) {
      if (!city) return;

      document
        .querySelectorAll("p,h1,h2,h3,h4,h5,h6,span,div,strong")
        .forEach((el) => {
          if (el.children.length === 0) {
            el.innerHTML = el.innerHTML.replace(/your area/gi, city);
          }
        });
    }

      function swapPhone(source) {
        if (!source || !window.phoneMap) return;

        const phone = window.phoneMap[source];
        if (!phone) return;

        document.querySelectorAll('a[href^="tel:"]').forEach((el) => {

          el.setAttribute("href", `tel:${phone}`);
          const phoneNode = el.querySelector("strong, span") || el;

          phoneNode.textContent = phone;
        });
      }


    function runSociusLogic() {
      const cookies = getCookies();

      const cityKey =
        getQueryParam(QUERY_KEYS.city) || cookies.city;
      const cityName = window.cityMap?.[cityKey];

      if (cityKey) setCookie("city", cityKey);
      if (cityName) replaceCityText(cityName);

      Object.keys(INPUT_SELECTORS).forEach((key) => {
        const value =
          getQueryParam(QUERY_KEYS[key]) || cookies[key];
        if (value) {
          setCookie(key, value);
          fillInputs(INPUT_SELECTORS[key], value);
        }
      });

     const phoneSource =
          (getQueryParam(QUERY_KEYS.source) ||
            cookies.source ||
            "")
            .toString()
            .trim()
            .toLowerCase();

      swapPhone(phoneSource);

    }

    window.addEventListener("load", () => {
      setTimeout(runSociusLogic, 500);
    });

    const pushState = history.pushState;
    history.pushState = function () {
      pushState.apply(history, arguments);
      setTimeout(runSociusLogic, 500);
    };

    window.addEventListener("popstate", () => {
      setTimeout(runSociusLogic, 500);
    });
  })();
