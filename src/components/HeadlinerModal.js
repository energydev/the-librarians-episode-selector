import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { headlinerModalOn, headlinerModalOff, selectedEpisodeModalOn } from "../actions/modals";
import { setHeadliner } from "../actions/criteria";


export class HeadlinerModal extends React.Component {

    constructor() {
        super();

        this.afterOpenModal = this.afterOpenModal.bind(this);

    }

    handleHeadlinerSelection = (e) => {
        this.props.headlinerModalOff();
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onHeadlinerChange = (e) => {
        const headliner = e.target.value;
        this.props.setHeadliner(headliner);
    };   

    afterOpenModal() {
        //See headliner to Flynn as the default
        this.props.setHeadliner("Flynn");
    }    

    render() {
        return (
            <Modal
                isOpen={!!this.props.modals.headliner} 
                onAfterOpen={this.afterOpenModal}                
                onRequestClose={this.handleHeadlinerSelection}
                contentLabel="Select a Featured Healiner"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Headliner selection</h3>

                <div>
                <select
                    className="input-select"
                    value={this.props.criteria.headliner}
                    onChange={this.onHeadlinerChange}
                >
                    <option value="Flynn">Flynn</option>
                    <option value="Eve">Eve</option>
                    <option value="Cassandra">Cassandra</option>
                    <option value="Ezekiel">Ezekiel</option>
                    <option value="Jake">Jake</option>
                    <option value="Jenkins">Jenkins</option>

                </select>
            </div>
                <button className="button" onClick={this.handleHeadlinerSelection}>Okay</button>
            </Modal>
        )
    }
};


const mapStateToProps = (state) => ({
    modals: state.modals,
    criteria: state.criteria
});

const mapDispatchToProps = (dispatch) => ({
    headlinerModalOff: () => dispatch(headlinerModalOff()),
    headlinerModalOn: () => dispatch(headlinerModalOn()),
    selectedEpisodeModalOn: () => dispatch(selectedEpisodeModalOn()),
    setHeadliner: (headliner) => dispatch(setHeadliner(headliner))
});


export default connect(mapStateToProps, mapDispatchToProps)(HeadlinerModal);
