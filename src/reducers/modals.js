// Modals Reducer
const modalsReducerDefaultState = {
    selectedEpisode: false
};

export default (state = modalsReducerDefaultState, action) => {
    switch (action.type) {
        case "SELECTED_EPISODE_MODAL_ON":
            return { ...state, selectedEpisode: true };
        case "SELECTED_EPISODE_MODAL_OFF":
            return { ...state, selectedEpisode: false };
        default:
            return state;
    }
};



