import { useState, useEffect} from 'react'

import NavBar from './navbar'
import LandingPage from './landingpage'
import BrandPage from '../brands/brands'
import Footer from './footer'

function HomePage() {
    const size = useWindowDimension();
    
    return (
        <>
            <NavBar dimension={size} />
            <LandingPage dimension={size} />
            <BrandPage  />
            <Footer />
        </>
    )
}

function useWindowDimension() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


export default HomePage