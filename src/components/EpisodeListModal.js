import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import ReactTable from 'react-table';
import { ReactTableDefaults } from 'react-table'
import { guestModalOn, guestModalOff, selectedEpisodeModalOn } from "../actions/modals";
import { setGuest } from "../actions/criteria";

export class EpisodeListModal extends React.Component {

    constructor(props) {
        super(props);

        this.afterOpenModal = this.afterOpenModal.bind(this);

    }

    handleGuestSelection = (e) => {
        console.log("in handleGuestSelection");
        this.props.guestModalOff();
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onGuestChange = (e) => {
        console.log("in onGuestChange");
        const guest = e.target.value;
        this.props.setGuest(guest);
        setTimeout(() => { console.log(this.props.criteria.guest); }, 200);
    };

    afterOpenModal() {
        console.log("in afterOpenModal");
        this.props.setGuest(this.props.guests[0]);
        setTimeout(() => { console.log(this.props.criteria.guest); }, 200);
    }

    render() {

        return (
            <div className="content-container">
                <Modal
                    isOpen={false}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.handleGuestSelection}
                    contentLabel="Select a Featured Guest"
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <div className="content-container">
                        <div className="list-header">
                            <div className="show-for-mobile">Episodes</div>
                            <div className="show-for-desktop">Episode</div>
                            <div className="show-for-desktop">Description</div>
                        </div>
                        <div className="list-body">
                            {
                               this.props.episodes.map((episode) => <p key={episode.EpisodeId}>{episode.Description}</p>)
                            }
                        </div>

                    </div>
                    <button className="button" onClick={this.handleGuestSelection}>Okay</button>
                </Modal>
            </div>
        )
    }
};

<option value="Jenkins">Jenkins</option>


const mapStateToProps = (state) => ({
    modals: state.modals,
    criteria: state.criteria
});

const mapDispatchToProps = (dispatch) => ({
    guestModalOff: () => dispatch(guestModalOff()),
    guestModalOn: () => dispatch(guestModalOn()),
    selectedEpisodeModalOn: () => dispatch(selectedEpisodeModalOn()),
    setGuest: (guest) => dispatch(setGuest(guest))
});


export default connect(mapStateToProps, mapDispatchToProps)(EpisodeListModal);