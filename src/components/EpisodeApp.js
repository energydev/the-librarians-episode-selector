import React from "react";
import Header from "./Header";
import MainPage from "./MainPage";

const subtitle = "Select an Episode to watch";

export const EpisodeApp = (props) => (
    <div className="episode-app">
        <Header subtitle={subtitle} />
        <MainPage />
    </div>
);


export default EpisodeApp;
