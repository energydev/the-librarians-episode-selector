import { setSelectedEpisode } from "../../actions/selectedEpisode";


test("should setup SET_SELECTED_EPISODE action object", () => {
    const episode = {
        "EpisodeID": "1",
        "Season": "4",
        "EpisodeNoInSeason": "1",
        "Title": "The Test Title",
        "DirectedBy": "",
        "WrittenBy": "",
        "OriginalAirDate": "",
        "FeaturedHeadliners": "",
        "FeaturedGuestStars": "",
        "Description": ""
    }
    const action = setSelectedEpisode(episode);
    expect(action).toEqual({
        type: "SET_SELECTED_EPISODE",
        episode
    });
});

