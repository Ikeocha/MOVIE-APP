// eslint-disable-next-line no-unused-vars
import React from "react";



import HeroBanner from "./heroBanner";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;