import React from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { selectedEpisodeModalOn } from "../actions/modals";
import { setSeason, setSelectBy } from "../actions/criteria";


const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' }
];

export class SeasonSelection extends React.Component {

    constructor(props) {
        super(props);

        this.props.setSeason(1);

    }

    handleSeasonSelection = (e) => {
        this.props.setSelectBy("season");
        setTimeout(() => { this.props.selectedEpisodeModalOn(); }, 200);
    };

    onSeasonChange = (e) => {
        const seasonNumber = e.value;
        this.props.setSeason(seasonNumber);
    };

    render() {

        return (
            <div>
                <h3>By Season</h3>
                <div>

                    <Select
                        className="input-select"
                        value={options[this.props.criteria.season - 1]}
                        onChange={this.onSeasonChange}
                        options={options}
                        placeholder="Select Season..."
                        isMulti={false}
                        isSearchable={false}
                    />
                </div>
                <button className="button" onClick={this.handleSeasonSelection}>Select Episode</button>
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
    setSeason: (season) => dispatch(setSeason(season)),
    setSelectBy: (selectBy) => dispatch(setSelectBy(selectBy))
});


export default connect(mapStateToProps, mapDispatchToProps)(SeasonSelection);
