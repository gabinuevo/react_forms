import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Box from "./Box";

let wrapper;

it("renders succesfully", function() {
    shallow(<Box />);
});

it("matches snapshot on initial render", function() {
    wrapper = shallow(<Box />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });