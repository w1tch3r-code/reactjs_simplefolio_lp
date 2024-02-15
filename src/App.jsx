import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/Header.jsx";
import MainElement from "./assets/components/main/MainElement.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import "./App.css";

function App() {
	const [darkMode, setDarkmode] = useState(false);
	return (
		<>
			{/* <Router>
				<Routes>
					<Route path='/' element={<Home />}
				</Routes>
			</Router> */}
			<div className={`wrapper ${darkMode ? "light" : ""}`}>
				<Header setDarkmode={setDarkmode} darkMode={darkMode} />
				<MainElement />
				<Footer />
			</div>
		</>
	);
}

export default App;
