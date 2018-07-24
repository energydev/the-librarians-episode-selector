import React from "react";
import ReactDOM from 'react-dom';
import Modal from "react-modal";
import { connect } from "react-redux";
import { selectedEpisodeModalOn, selectedEpisodeModalOff } from "../actions/modals";
import { clearCriteria } from "../actions/criteria";
import { setSelectedEpisode } from "../actions/selectedEpisode";
import episodeJson from "../data/LibrariansEpisodes.json";

export class SelectedEpisodeModal extends React.Component {

    constructor() {
        super();

        this.afterOpenModal = this.afterOpenModal.bind(this);

    }

    handleCloseEpisodeSelection = () => {
        this.props.selectedEpisodeModalOff();
    };


    afterOpenModal() {
        //Order of precedence for selection headliner, guest, season

        console.log("inside afterOpenModal for SelectedEpisodeModal");

        const allEpisodes = episodeJson.Episodes;
        let episodeList = {};

        switch (this.props.criteria.selectBy) {
            case ("headliner"):
                episodeList = allEpisodes.filter((episode) => {
                    const featuredHeadliners = episode.FeaturedHeadliners.split(",");
                    return featuredHeadliners.includes(this.props.criteria.headliner);
                });
                break;
            case ("guest"):
                episodeList = allEpisodes.filter((episode) => {
                    const featuredGuests = episode.FeaturedGuestStars.split(",");
                    return featuredGuests.includes(this.props.criteria.guest);
                });
                break;
            default:
                episodeList = allEpisodes.filter((episode) => episode.Season == this.props.criteria.season);
        }

        const selectedIndex = Math.floor(Math.random() * episodeList.length);
        this.props.setSelectedEpisode(episodeList[selectedIndex]);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.modals.selectedEpisode} //converted to a true boolean
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.handleCloseEpisodeSelection}
                contentLabel="Selected Episode"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Selected Episode</h3>

                <div>
                    <p>{this.props.selectedEpisode.Title}</p>
                    <p>Season {this.props.selectedEpisode.Season} Episode {this.props.selectedEpisode.EpisodeNoInSeason}</p>
                </div>
                <button className="button" onClick={this.handleCloseEpisodeSelection}>Okay</button>
            </Modal>
        )
    }
};


const mapStateToProps = (state) => ({
    modals: state.modals,
    criteria: state.criteria,
    selectedEpisode: state.selectedEpisode
});

const mapDispatchToProps = (dispatch) => ({
    selectedEpisodeModalOn: () => dispatch(selectedEpisodeModalOn()),
    selectedEpisodeModalOff: () => dispatch(selectedEpisodeModalOff()),
    setSelectedEpisode: (episode) => dispatch(setSelectedEpisode(episode)),
    clearCriteria: () => dispatch(clearCriteria()),
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectedEpisodeModal);
