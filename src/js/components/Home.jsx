import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Cards from "./Cards";

//create your first component
const Home = () => {
	return (
   
    <div className="container">
        <Jumbotron />
        <Cards />
    </div>
     
	);
};

export default Home;