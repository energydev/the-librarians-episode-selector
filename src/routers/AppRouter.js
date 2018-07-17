import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import EpisodeListPage from '../components/EpisodeListPage';

const subtitle = "Select an Episode to watch";

export const AppRouter = () => (
  <BrowserRouter>
    <div className="episode-app">
      <Header subtitle={subtitle} />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/episodes" component={EpisodeListPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

