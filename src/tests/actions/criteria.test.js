import { setSeason, setHeadliner, setGuest, setSelectBy, clearCriteria } from "../../actions/criteria";

test("should setup SET_SEASON action object", () => {
    const season = "2"
    const action = setSeason(season);
    expect(action).toEqual( {
        type: "SET_SEASON",
        season
    });
});


test("should setup SET_HEADLINER action object", () => {
    const headliner = "TestHeadliner"
    const action = setHeadliner(headliner);
    expect(action).toEqual( {
        type: "SET_HEADLINER",
        headliner
    });
});


test("should setup SET_GUEST action object", () => {
    const guest = "TestGuest"
    const action = setGuest(guest);
    expect(action).toEqual( {
        type: "SET_GUEST",
        guest
    });
});

test("should setup SET_SELECT_BY action object", () => {
    const selectBy = "Headliner"
    const action = setSelectBy(selectBy);
    expect(action).toEqual( {
        type: "SET_SELECT_BY",
        selectBy
    });
});


test("should setup CLEAR_CRITERIA action object", () => {
    const action = clearCriteria();
    expect(action).toEqual( {
        type: "CLEAR_CRITERIA",
    });
});


