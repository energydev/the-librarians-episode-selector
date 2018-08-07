import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("should render Header correctly", () => {
    const wrapper = shallow(<Header subtitle={"Test subtitle"} />);
    expect(wrapper).toMatchSnapshot();
});


