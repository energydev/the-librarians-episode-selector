import React from "react";
import { connect } from "react-redux";
import Select from 'react-select';
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
        const guest = e.value;
        this.props.setGuest(guest);
    };

    render() {

        const options = [];

        this.props.guests.map((guest) => (
            options.push({ value: guest, label: guest })
        ));


        return (
            <div>
                <h3>By Guest</h3>
                <div>
                    <Select
                        className="input-select"
                        defaultValue={options[0]}
                        value={options[this.props.criteria.guest]}
                        onChange={this.onGuestChange}
                        options={options}
                        placeholder="Select Guest..."
                        isMulti={false}
                        isSearchable={false}
                    />
                </div>
                <button className="button" onClick={this.handleGuestSelection}>Select Episode</button>
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
