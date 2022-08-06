import React from "react";

function About() {
  return (
    <>
      <section className="flex justify-center backdrop-blur-xl items-center w-screen h-[5em] sticky top-0 ">
        <section className="flex flex-row justify-between items-center w-[60vw] ">
          <img
            src={require("../../assets/webp/logo.webp")}
            alt="logo"
            className="w-[80px] h-[80px]"
          />{" "}
          <a href="/" className="font-Poppins font-medium hover:text-white ">
            Home
          </a>
        </section>
      </section>
      <section className="w-screen h-fit flex flex-col justify-center items-center font-Poppins gap-[3em] p-8">
        <section className="flex flex-col w-screen h-fit justify-center items-center gap-[3em]">
          <h1 className="font-bold tracking-wider text-[70px] w-[80vw] ">
            About
          </h1>
          <p className="text-justify w-[80vw] ">
            Who we are? Snkrhunt is an entertainment / e-commerce(slight) /
            (your) personal sneaker website. Here, we will provide you the only
            interesting contents, which you will like very much. We know you are
            a sneakerhead so let us present and offer you different shoe brands
            to choose from. We're dedicated in providing you the best
            entertainment, by revealing latest sneakers from each shoe brands,
            showing their latest products, present the shoe that you love, and
            to show you their availablity in the market. We are still new and
            improving so if you didn't find what you want. Email us at
            snkr.hunt@gmail.com{" "}
          </p>
        </section>
        <section className="flex flex-col justify-center items-center w-screen h-fit gap-[3em]">
          <h1 className="text-[50px] font-bold w-[80vw]">DISCLAIMER</h1>

          <p className="w-[80vw] text-justify">Last updated August 03, 2022</p>

          <h2 className="text-[25px] font-bold w-[80vw]">WEBSITE DISCLAIMER</h2>

          <p className="w-[80vw] text-justify ">
            The information provided by snkrhunt("we," "us," or "our") on{" "}
            <a href="https://snkrhunt.vercel.app">
              https://snkrhunt.vercel.app
            </a>{" "}
            (thie "Site") is for general informational purposes only. All
            information on the Site is provided in good faith, however we make
            no representation or warranty of any kind, express, and implied,
            regarding accuracy, adequacy, validity, reliability, availablity, or
            completeness of any information on the Site. UNDER NO CIRCUMSTANCES
            SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY
            KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
            INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR
            RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>

          <p className="w-[80vw] text-justify">
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </p>

          <h2 className="w-[80vw] text-[24px] font-bold ">
            EXTERNAL LINKS DISCLAIMER
          </h2>

          <p className="w-[80vw] text-justify ">
            The Site may contain (or you may be sent through the Site) links to
            other websites or content belonging to or originating from third
            parties or links to websites and features in banners or other
            advertising. Such external links are not investigated, monitored, or
            checked for accuracy, adequacy, validity, reliability, availability,
            or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
            ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY
            INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE
            OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING.
            WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
            MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF
            PRODUCTS OR SERVICES.
          </p>

          <h2 className="w-[80vw] text-[24px] font-bold ">Consent</h2>

          <p className="w-[80vw] text-justify ">
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>

          <h2 className="w-[80vw] text-[24px] font-bold ">Update</h2>

          <p className="w-[80vw] text-justify ">
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
          <p className="w-[80vw] text-justify ">
            This disclaimer was created by Termly's Disclaimer Generator
          </p>
        </section>
      </section>
    </>
  );
}

export default About;
