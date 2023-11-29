/* eslint-disable react/prop-types */
import './Nav.css';
import Mond from '../svg/Mond';
import Sonne from '../svg/Sonne';

const Nav = ({setDarkmode, darkMode}) => {

	const changeMode = () => {
		setDarkmode((darkMode) => !darkMode)
	};

	return (
		<nav className='navbar'>
			<div>
				<a className='logo' href="#">JS.</a>
			</div>
			<div className='main-nav'>
				<a href="#">projects</a>
				<a href="#">skills</a>
				<a href="#">contact</a>
				<span onClick={changeMode}>{darkMode ? <Mond /> : <Sonne />}</span>
			</div>
		</nav>
	);
};

export default Nav;
