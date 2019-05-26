import React from "react";
import Toolbar from "./Toolbar";
import { shallow } from "enzyme";

describe("[Toolbar]", () => {
  const wrapper = shallow(
    <Toolbar
      routes={[{ name: "Home", to: "/" }, { name: "Login", to: "/login" }]}
      logout={() => {}}
    />
  );
  it("should render toolbar", () => {
    expect(wrapper.find(".toolbar").length).toBe(1);
  });

  it("should render default toolbar", () => {
    expect(wrapper.find(".toolbar__item").length).toBe(2);
  });

  it("should render after login toolbar", () => {
    wrapper.setProps({
      token: "weqeqweqwe",
      routes: [
        { name: "Home", to: "/" },
        { name: "Add Event", to: "/add" },
        { name: "Your Events", to: "/yourevents" }
      ]
    });
    expect(wrapper.find(".toolbar__item").length).toBe(4);
  });
});
