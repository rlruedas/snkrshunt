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
          <h1 className="font-bold tracking-wider text-[70px] w-[90vw] ">
            About
          </h1>
          <p className="text-justify w-[90vw] px-10 ">
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
          <h1 className="text-[50px] font-bold w-[90vw]">Disclaimer</h1>

          <p className="w-[90vw] text-justify px-10">
            If you require any more information or have any questions about our
            site's disclaimer, please feel free to contact us by email at
            snkr.hunt@gmail.com.
          </p>

          <h2 className="text-[25px] font-bold w-[90vw]">
            Disclaimers for snkrhunt
          </h2>

          <p className="w-[90vw] text-justify px-10">
            All the information on this website - snkrhunt.vercel.app - is
            published in good faith and for general information purpose only.
            snkrhunt does not make any warranties about the completeness,
            reliability and accuracy of this information. Any action you take
            upon the information you find on this website (snkrhunt), is
            strictly at your own risk. snkrhunt will not be liable for any
            losses and/or damages in connection with the use of our website.
          </p>

          <p className="w-[90vw] text-justify px-10">
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.
          </p>

          <p className="w-[90vw] text-justify px-10">
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </p>

          <h2 className="w-[90vw] text-[24px] font-bold ">Consent</h2>

          <p className="w-[90vw] text-justify px-10">
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>

          <h2 className="w-[90vw] text-[24px] font-bold ">Update</h2>

          <p className="w-[90vw] text-justify px-10">
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </section>
      </section>
    </>
  );
}

export default About;
