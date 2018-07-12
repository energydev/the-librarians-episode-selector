import React from "react";
import { connect } from "react-redux";
import SeasonModal from "./SeasonModal";
import SelectedEpisodeModal from "./SelectedEpisodeModal";
import HeadlinerModal from "./HeadlinerModal";
import { seasonModalOn, headlinerModalOn } from "../actions/modals";


export class MainPage extends React.Component {

    displaySeasonModal = (e) => {
        console.log("going to display season modal");
        this.props.seasonModalOn();
    };

    displayHeaderlinerModal = (e) => {
        console.log("going to display headliner modal");
        this.props.headlinerModalOn();
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
                </div>
                <SeasonModal />
                <HeadlinerModal />
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
    headlinerModalOn: () => dispatch(headlinerModalOn())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);