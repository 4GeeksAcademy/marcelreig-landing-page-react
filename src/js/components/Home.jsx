import React from "react";

import Jumbotron from "./Jumbotron";

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