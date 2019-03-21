import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import NewBoxForm from "./NewBoxForm";

let wrapper;

it("renders succesfully", function() {
    shallow(<NewBoxForm />);
});

it("matches snapshot on initial render", function() {
    wrapper = shallow(<NewBoxForm />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });



it("tests our form inputs: width, height, backgroundColor, which should update state", function() {

    let wrapper = mount(<NewBoxForm />);
    const height = wrapper.find("#height")
    height.instance().value = "100px"
    height.simulate("change")

    expect(wrapper.state().height).toEqual("100px");

    const width = wrapper.find("#width");
    width.instance().value = '200px';
    width.simulate("change");

    expect(wrapper.state().width).toEqual('200px');

    const backgroundColor = wrapper.find("#backgroundColor");
    backgroundColor.instance().value = 'black';
    backgroundColor.simulate("change");

    expect(wrapper.state().backgroundColor).toEqual('black');

});  


it("runs a mocked fn on submit", function () {
    const submitFn = jest.fn();
    let wrapper = mount(
      <NewBoxForm triggerAddNewBox={submitFn} />
    );
    const form = wrapper.find("form")
  
    form.simulate("submit")
  
    expect(submitFn).toHaveBeenCalled();
});


it("resets state on submit", function () {
  const submitFn = jest.fn();
  
  let wrapper = mount(<NewBoxForm triggerAddNewBox={submitFn} />);
  
  const height = wrapper.find("#height")
  height.instance().value = "100px"
  height.simulate("change")

  expect(wrapper.state().height).toEqual("100px");

  const width = wrapper.find("#width");
  width.instance().value = "200px";
  width.simulate("change");

  expect(wrapper.state().width).toEqual("200px");
  
  const backgroundColor = wrapper.find("#backgroundColor")
  backgroundColor.instance().value = "red"
  backgroundColor.simulate("change")

  expect(wrapper.state().backgroundColor).toEqual("red");

  const form = wrapper.find("form");
  form.simulate("submit");

  // after submit, we expect the state to reset
  expect(wrapper.state()).toEqual({
    height: '',
    width: '',
    backgroundColor: ''
  })
});
