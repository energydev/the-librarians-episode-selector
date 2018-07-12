import React from "react";
import { connect } from "react-redux";
import SeasonModal from "./SeasonModal";
import SelectedEpisodeModal from "./SelectedEpisodeModal";
import { seasonModalOn, seasonModalOff } from "../actions/modals";


export class MainPage extends React.Component {

    displaySeasonModal = (e) => {
        console.log("going to display season modal");
        this.props.seasonModalOn();
        //setTimeout(() => {console.log(this.props.modals) } , 2000);
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
                    <button className="big-button">Random by Character</button>
                </div>
                <SeasonModal />
                <SelectedEpisodeModal />
            </div>
        )
    }
};


const mapStateToProps = (state) => ({
    modals: state.modals
});

const mapDispatchToProps = (dispatch) => ({
    seasonModalOff: () => dispatch(seasonModalOff()),
    seasonModalOn: () => dispatch(seasonModalOn())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);