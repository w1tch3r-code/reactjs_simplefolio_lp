import Header from "./assets/components/header/Header.jsx";
import MainElement from "./assets/components/main/MainElement.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import "./App.css";
import { useState } from "react";

function App() {
	const [darkMode, setDarkmode] = useState(false);
	return (
		<div className={`wrapper ${darkMode ? 'light' : ''}`}>
			<Header setDarkmode={setDarkmode} darkMode={darkMode}/>
			<MainElement />
			<Footer />
		</div>
	);
}

export default App;
