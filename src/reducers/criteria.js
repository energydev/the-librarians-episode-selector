// Criteria Reducer

const criteriaReducerDefaultState = {
    season: 1,
    headliner: "",
    guest: "",
    selectBy: ""
};

export default (state = criteriaReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_SEASON":
            return { ...state, season: action.season };
        case "SET_HEADLINER":
            return { ...state, headliner: action.headliner }
        case "SET_GUEST":
            return { ...state, guest: action.guest }
        case "SET_SELECT_BY":
            return { ...state, selectBy: action.selectBy }
        case "CLEAR_CRITERIA":
            return criteriaReducerDefaultState;
        default:
            return state;
    }
};