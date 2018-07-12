// Criteria Reducer

const criteriaReducerDefaultState = {
    season: 1,
    headlineCharacter: ""
};

export default (state = criteriaReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_SEASON":
            console.log("action is: ", action);
            console.log("action.season is: ", action.season);
            return { ...state, season: action.season };
        default:
            return state;
    }
};
