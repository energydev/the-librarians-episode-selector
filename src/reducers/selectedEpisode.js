// Selected Episode Reducer
const selectedEpisodeReducerDefaultState = {
    "EpisodeID": "",
    "Season": "",
    "EpisodeNoInSeason": "",
    "Title": "",
    "DirectedBy": "",
    "WrittenBy": "",
    "OriginalAirDate": "",
    "FeaturedHeadliners": "",
    "FeaturedGuestStars": "",
    "Description": ""
};

export default (state = selectedEpisodeReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_SELECTED_EPISODE":
            return { ...state, ...action.episode };
        default:
            return state;
    }
};