import React from "react";
import { shallow } from "enzyme";
import { EpisodeListPage } from "../../components/EpisodeListPage";
import episodeJson from "../../data/LibrariansEpisodes.json";

test("should render EpisodeListPage correctly", () => {
    const wrapper = shallow(<EpisodeListPage episodes={episodeJson.Episodes} />);
    expect(wrapper).toMatchSnapshot();
});