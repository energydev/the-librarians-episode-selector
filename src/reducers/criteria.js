// Criteria Reducer

const criteriaReducerDefaultState = {
    season: 1,
    headliner: "",
    guest: ""
};

export default (state = criteriaReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_SEASON":
            return { ...state, season: action.season };
        case "SET_HEADLINER":
            return { ...state, headliner: action.headliner }
        case "SET_GUEST":
            return { ...state, guest: action.guest }
        case "CLEAR_CRITERIA":
            return criteriaReducerDefaultState;
        default:
            return state;
    }
};