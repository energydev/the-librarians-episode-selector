import React from "react";
import { connect } from "react-redux";
import { selectedEpisodeModalOn } from "../actions/modals";
import { setHeadliner, setSelectBy } from "../actions/criteria";


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
        const headliner = e.target.value;
        this.props.setHeadliner(headliner);
    };


    render() {
        return (
            <div>
                <h3>By Headliner</h3>

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
