import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import EpisodeApp from "./components/EpisodeApp";


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <EpisodeApp />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));




