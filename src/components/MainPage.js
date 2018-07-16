import React from "react";
import { connect } from "react-redux";
import SeasonModal from "./SeasonModal";
import SelectedEpisodeModal from "./SelectedEpisodeModal";
import HeadlinerModal from "./HeadlinerModal";
import GuestModal from "./GuestModal";
import { seasonModalOn, headlinerModalOn, guestModalOn } from "../actions/modals";
import { getGuestCharacters } from "../modules/episodes";
import episodeJson from "../data/LibrariansEpisodes.json";


export class MainPage extends React.Component {

    displaySeasonModal = (e) => {
        console.log("going to display season modal");
        this.props.seasonModalOn();
    };

    displayHeaderlinerModal = (e) => {
        console.log("going to display headliner modal");
        this.props.headlinerModalOn();
    };

    displayGuestModal = (e) => {
        console.log("going to display guest modal");
        this.props.guestModalOn();
    };

    render() {
        return (
            <div className="main-page">
                <div className="content-container">
                    Main page content.
                    <button className="big-button"
                        onClick={this.displaySeasonModal}
                    >
                        Random by Season
                    </button>
                    <button className="big-button"
                        onClick={this.displayHeaderlinerModal}
                    >
                        Random by Featured Headliner
                    </button>
                    <button className="big-button"
                        onClick={this.displayGuestModal}
                    >
                        Random by Guest Appearance
                    </button>
                </div>
                <SeasonModal />
                <HeadlinerModal />
                <GuestModal guests={getGuestCharacters(episodeJson.Episodes)} />
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