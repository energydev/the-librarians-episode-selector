import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { guestModalOn, guestModalOff, selectedEpisodeModalOn } from "../actions/modals";
import { setGuest } from "../actions/criteria";

export class GuestModal extends React.Component {

    constructor(props) {
        super(props);

        this.afterOpenModal = this.afterOpenModal.bind(this);

    }

    handleGuestSelection = (e) => {
        //console.log("in handleGuestSelection");
        this.props.guestModalOff();
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onGuestChange = (e) => {
        //console.log("in onGuestChange");
        const guest = e.target.value;
        this.props.setGuest(guest);
        setTimeout(() => { console.log(this.props.criteria.guest); }, 200);
    };

    afterOpenModal() {
        //console.log("in afterOpenModal");
        this.props.setGuest(this.props.guests[0]);
        setTimeout(() => { console.log(this.props.criteria.guest); }, 200);
    }

    render() {
        return (
            <Modal
                isOpen={!!this.props.modals.guest} 
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.handleGuestSelection}
                contentLabel="Select a Featured Guest"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Guest Selection</h3>
                <div>
                    <select
                        className="input-select"
                        value={this.props.criteria.guest}
                        onChange={this.onGuestChange}
                    >
                        {
                            this.props.guests.map((guest) => (
                                <option key={guest} value={guest}>{guest}</option>
                            ))
                        }
                    </select>
                </div>
                <button className="button" onClick={this.handleGuestSelection}>Okay</button>
            </Modal>
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


export default connect(mapStateToProps, mapDispatchToProps)(GuestModal);
