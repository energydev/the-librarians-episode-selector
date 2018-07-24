import React from "react";
import { connect } from "react-redux";
import { selectedEpisodeModalOn } from "../actions/modals";
import { setGuest, setSelectBy } from "../actions/criteria";


export class GuestSelection extends React.Component {

    constructor(props) {
        super(props);

        this.props.setGuest(this.props.guests[0]);

    }

    handleGuestSelection = (e) => {
        this.props.setSelectBy("guest");
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onGuestChange = (e) => {
        const guest = e.target.value;
        this.props.setGuest(guest);
    };

    render() {
        return (
            <div>
                <h3>By Guest</h3>
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
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    modals: state.modals,
    criteria: state.criteria
});

const mapDispatchToProps = (dispatch) => ({
    selectedEpisodeModalOn: () => dispatch(selectedEpisodeModalOn()),
    setGuest: (guest) => dispatch(setGuest(guest)),
    setSelectBy: (selectBy) => dispatch(setSelectBy(selectBy))
});


export default connect(mapStateToProps, mapDispatchToProps)(GuestSelection);
