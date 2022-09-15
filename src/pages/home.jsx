import { Suspense } from "react";
import Brands from "../components/brands";
import Featured from "../components/featured";
import Footer from "../components/footer";
import Landing from "../components/landing";
import { HomeNavBar } from "../components/navbars";

function Home() {
  return (
    <>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="relative overflow-x-hidden">
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

export default Home;
