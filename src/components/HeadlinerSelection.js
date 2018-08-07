import React from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { selectedEpisodeModalOn } from "../actions/modals";
import { setHeadliner, setSelectBy } from "../actions/criteria";


const options = [
    { value: 'Flynn', label: 'Flynn' },
    { value: 'Eve', label: 'Eve' },
    { value: 'Cassandra', label: 'Cassandra' },
    { value: 'Ezekiel', label: 'Ezekiel' },
    { value: 'Jake', label: 'Jake' },
    { value: 'Jenkins', label: 'Jenkins' }
];

export class HeadlinerSelection extends React.Component {

    constructor(props) {
        super(props);

        this.props.setHeadliner("Flynn");
    }

    handleHeadlinerSelection = (e) => {
        this.props.setSelectBy("headliner");
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onHeadlinerChange = (e) => {
        const headliner = e.value;
        this.props.setHeadliner(headliner);
    };


    render() {
        return (
            <div>
                <h3>By Headliner</h3>

                <div>

                    <Select
                        className="input-select"
                        defaultValue={options[0]}
                        value={options[this.props.criteria.headliner]}
                        onChange={this.onHeadlinerChange}
                        options={options}
                        placeholder="Select Headliner..."
                        isMulti={false}
                    />

                </div>
                <button className="button" onClick={this.handleHeadlinerSelection}>Select Episode</button>
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
    setHeadliner: (headliner) => dispatch(setHeadliner(headliner)),
    setSelectBy: (selectBy) => dispatch(setSelectBy(selectBy))
});


export default connect(mapStateToProps, mapDispatchToProps)(HeadlinerSelection);
