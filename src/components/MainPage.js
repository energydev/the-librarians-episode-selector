import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SeasonSelection from "./SeasonSelection";
import SelectedEpisodeModal from "./SelectedEpisodeModal";
import HeadlinerSelection from "./HeadlinerSelection";
import GuestSelection from "./GuestSelection";
import { getGuestCharacters } from "../modules/episodes";
import episodeJson from "../data/LibrariansEpisodes.json";
import Select from 'react-select';

const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' }
];


export class MainPage extends React.Component {

    render() {

        return (
            <div className="main-page">
                <div className="main-page-content-container">
                    <div className="main-page-sub-title">
                        <h2>Randomly Select Episode</h2>
                    </div>
                    <div className="main-page-item">
                        <div className="main-page-section">
                            <SeasonSelection />
                        </div>
                        <div className="main-page-section">
                            <HeadlinerSelection />
                        </div>
                        <div className="main-page-section">
                            <GuestSelection guests={getGuestCharacters(episodeJson.Episodes)} />
                        </div>
                    </div>
                </div>
                <SelectedEpisodeModal />
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    modals: state.modals
});

export default connect(mapStateToProps)(MainPage);