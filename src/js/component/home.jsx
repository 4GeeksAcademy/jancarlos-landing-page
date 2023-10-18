import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card2 from "./Card2.jsx";
import Navbar from "./navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
<Navbar/>
			<Card/>
			<Card2/>
			<Footer/>
		</>
	);
};

export default Home;
