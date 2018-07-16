import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import 'react-table/react-table.css'
import EpisodeApp from "./components/EpisodeApp";
import episodeJson from "./data/LibrariansEpisodes.json";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <EpisodeApp />
    </Provider>
);

console.log(episodeJson);

ReactDOM.render(jsx, document.getElementById('app'));




