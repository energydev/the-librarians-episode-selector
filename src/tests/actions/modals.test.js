import { selectedEpisodeModalOn, selectedEpisodeModalOff } from "../../actions/modals";


test("should setup SELECTED_EPISODE_MODAL_ON action object", () => {
    const action = selectedEpisodeModalOn();
    expect(action).toEqual({
        type: "SELECTED_EPISODE_MODAL_ON",
    });
});


test("should setup SELECTED_EPISODE_MODAL_OFF action object", () => {
    const action = selectedEpisodeModalOff();
    expect(action).toEqual({
        type: "SELECTED_EPISODE_MODAL_OFF",
    });
});


