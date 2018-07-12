import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { seasonModalOn, seasonModalOff, selectedEpisodeModalOn, selectedEpisodeModalOff } from "../actions/modals";


//using implicit return
export class SelectedEpisodeModal extends React.Component {

    handleCloseEpisodeSelection = (e) => {
        console.log("inside handleCloseEpisodeSelection");
        this.props.selectedEpisodeModalOff();
        setTimeout(() => { console.log(this.props.modals) }, 2000);
    };

    render() {
        return (
            <Modal
                isOpen={this.props.modals.selectedEpisode} //converted to a true boolean
                onRequestClose={this.handleCloseEpisodeSelection}
                contentLabel="Selected Episode"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Season selection</h3>
                {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
                <div>
                    <p>Selected episode will go here. It will be from season: {this.props.criteria.season}</p>
                </div>
                <button className="button" onClick={this.handleCloseEpisodeSelection}>Okay</button>
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
    seasonModalOn: () => dispatch(seasonModalOn()),
    selectedEpisodeModalOn: () => dispatch(selectedEpisodeModalOn()),
    selectedEpisodeModalOff: () => dispatch(selectedEpisodeModalOff())
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectedEpisodeModal);
