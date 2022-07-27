import { Suspense } from "react";

import { HomeNavBar } from "../../components/navbars";
import Landing from "../../components/landing";
import Brands from "../../components/brands";
import Featured from "../../components/featured";
import Footer from "../../components/footer/footer";

function HomePage() {
  return (
    <>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="relative">
          <HomeNavBar />
          <Landing />
          <Featured />
          <Brands />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default HomePage;
