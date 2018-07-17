import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import 'react-table/react-table.css'
import episodeJson from "./data/LibrariansEpisodes.json";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

console.log(episodeJson);

Modal.setAppElement('#app');

ReactDOM.render(jsx, document.getElementById('app'));




