import React from "react";
import { shallow } from "enzyme";
import VideoInfoBox from "../VideoInfoBox";

describe("VideoInfoBox", () => {
  test("renders collapsed", () => {
    const wrapper = shallow(<VideoInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders expanded", () => {
    const wrapper = shallow(<VideoInfoBox />);
    wrapper.setState({ collapsed: false });
    expect(wrapper).toMatchSnapshot();
  });
});
