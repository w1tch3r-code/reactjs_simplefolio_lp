/* eslint-disable react/prop-types */
import Nav from "../nav/Nav"
import Info from "../info/Info"

const Header = ({setDarkmode, darkMode}) => {
	return <header>
        <Nav setDarkmode={setDarkmode} darkMode={darkMode}/>
        <Info />
    </header>;
};

export default Header;
