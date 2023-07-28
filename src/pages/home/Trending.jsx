// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import Carousel from "../../components/Carousel"
import ContentWrapper from "../../components/ContentWrapper";
import SwitchTabs from "../../components/SwitchTabs";

import useFetch from "../../hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper className="contentWrapper">
                <div className="carouselTitle">Trending</div>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;