import React from "react";

export const EpisodeListPage = (props) => (
    <div className="episode-list-page">
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Episodes</div>
                <div className="show-for-desktop">Episode</div>
                <div className="show-for-desktop">Description</div>
            </div>
            <div className="list-body">
                {
                    props.episodes.map((episode) => {

                        const jsx =
                            (<div className="list-item" key={episode.EpisodeID}>
                                <div className="list-item-main">
                                    <h3 className="list-item__title">{episode.Title}</h3>
                                    <span className="list-item__sub-title">{<p>Season {episode.Season} Episode {episode.EpisodeNoInSeason}</p>}</span>
                                </div>
                                <p className="list-item__data">{episode.Description}</p>
                            </div>
                            );

                        return jsx;
                    })

                }
            </div>
        </div>
    </div>
);

export default EpisodeListPage;