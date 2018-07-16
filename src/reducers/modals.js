// Modals Reducer
const modalsReducerDefaultState = {
    season: false,
    headliner: false,
    guest: false,
    selectedEpisode: false
};

export default (state = modalsReducerDefaultState, action) => {
    switch (action.type) {
        case "SEASON_MODAL_ON":
            return { ...state, season: true };
        case "HEADLINER_MODAL_ON":
            return { ...state, headliner: true };
        case "GUEST_MODAL_ON":
            return { ...state, guest: true };
        case "SELECTED_EPISODE_MODAL_ON":
            return { ...state, selectedEpisode: true };
        case "SEASON_MODAL_OFF":
            return { ...state, season: false };
        case "HEADLINER_MODAL_OFF":
            return { ...state, headliner: false };
        case "GUEST_MODAL_OFF":
            return { ...state, guest: false} ;
        case "SELECTED_EPISODE_MODAL_OFF":
            return { ...state, selectedEpisode: false };
        default:
            return state;
    }
};



