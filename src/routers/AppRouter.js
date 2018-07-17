import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import EpisodeListPage from '../components/EpisodeListPage';
import episodeJson from "../data/LibrariansEpisodes.json";

const subtitle = "Select an Episode to watch";

export const AppRouter = () => (
  <BrowserRouter >
    <div className="episode-app">
      <Header subtitle={subtitle} />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/the-librarians-episode-selector/" component={MainPage} exact={true} />
        <Route path="/episodes" exact={true} episodes={episodeJson.Episodes} render={(routeProps) => (<EpisodeListPage {...routeProps} episodes={episodeJson.Episodes} />)}  />
        <Route path="/the-librarians-episode-selector/episodes" exact={true} episodes={episodeJson.Episodes} render={(routeProps) => (<EpisodeListPage {...routeProps} episodes={episodeJson.Episodes} />)}  />  
      </Switch>
    </div>
  </BrowserRouter>
);



export default AppRouter;


