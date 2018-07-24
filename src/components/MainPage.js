import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SeasonSelection from "./SeasonSelection";
import SelectedEpisodeModal from "./SelectedEpisodeModal";
import HeadlinerSelection from "./HeadlinerSelection";
import GuestSelection from "./GuestSelection";
import { seasonModalOn, headlinerModalOn, guestModalOn } from "../actions/modals";
import { getGuestCharacters } from "../modules/episodes";
import episodeJson from "../data/LibrariansEpisodes.json";


export class MainPage extends React.Component {

    render() {

        //console.log(this.props.location.pathname);
        //console.log(this.props);

        return (
            <div className="main-page">
                <div className="main-page-content-container">
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

            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    modals: state.modals
});

const mapDispatchToProps = (dispatch) => ({
    seasonModalOn: () => dispatch(seasonModalOn()),
    headlinerModalOn: () => dispatch(headlinerModalOn()),
    guestModalOn: () => dispatch(guestModalOn())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);