

import NavBarMobile from './navigation/mobilescreen'
import NavBarDesktop from './navigation/desktopscreen'


function navbar(props) {
    const { dimension } = props;

    return (
        <>

            {dimension.width <= 768 ? <NavBarMobile /> : <NavBarDesktop />}
        </>
    )
}

export default navbar