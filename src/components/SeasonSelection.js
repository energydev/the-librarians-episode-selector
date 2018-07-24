import React from "react";
import { connect } from "react-redux";
import { selectedEpisodeModalOn } from "../actions/modals";
import { setSeason, setSelectBy } from "../actions/criteria";


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
        const seasonNumber = e.target.value;
        this.props.setSeason(seasonNumber);
    };

    render() {
        return (
            <div>
                <h3>By Season</h3>
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
