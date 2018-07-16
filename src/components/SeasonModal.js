import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { headlinerModalOn, seasonModalOff, selectedEpisodeModalOn } from "../actions/modals";
import { setSeason } from "../actions/criteria";


//using implicit return
export class SeasonModal extends React.Component {

    handleSeasonSelection = (e) => {
        console.log("inside handleSeasonSelection");
        this.props.seasonModalOff();
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onSeasonChange = (e) => {
        console.log("inside onSeasonChange");
        const seasonNumber = e.target.value;
        this.props.setSeason(seasonNumber);
    };   

    render() {
        return (
            <Modal
                isOpen={this.props.modals.season} //converted to a true boolean
                onRequestClose={this.handleSeasonSelection}
                contentLabel="Select a Season"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Season selection</h3>
                {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
                <div>
                <select
                    className="input-select"
                    value={this.props.criteria.season}
                    onChange={this.onSeasonChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
                <button className="button" onClick={this.handleSeasonSelection}>Okay</button>
            </Modal>
        )
    }
};


const mapStateToProps = (state) => ({
    modals: state.modals,
    criteria: state.criteria
});

const mapDispatchToProps = (dispatch) => ({
    seasonModalOff: () => dispatch(seasonModalOff()),
    seasonModalOn: () => dispatch(headlinerModalOn()),
    selectedEpisodeModalOn: () => dispatch(selectedEpisodeModalOn()),
    setSeason: (season) => dispatch(setSeason(season))
});


export default connect(mapStateToProps, mapDispatchToProps)(SeasonModal);
