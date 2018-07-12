// Modals Reducer
const modalsReducerDefaultState = {
    season: false,
    character: false,
    selectedEpisode: false
};

export default (state = modalsReducerDefaultState, action) => {
    switch (action.type) {
        case "SEASON_MODAL_ON":
            return { ...state, season: true };
        case "CHARACTER_MODAL_ON":
            return { ...state, character: true };
        case "SELECTED_EPISODE_MODAL_ON":
            return { ...state, selectedEpisode: true };
        case "SEASON_MODAL_OFF":
            return { ...state, season: false };
        case "CHARACTER_MODAL_OFF":
            return { ...state, character: false };
        case "SELECTED_EPISODE_MODAL_OFF":
            return { ...state, selectedEpisode: false }
        default:
            return state;
    }
};



