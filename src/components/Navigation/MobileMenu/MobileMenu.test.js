import React from "react";
import MobileMenu from "./MobileMenu";
import { shallow } from "enzyme";

describe("[Toolbar]", () => {
  const wrapper = shallow(
    <MobileMenu
      routes={[{ name: "Home", to: "/" }, { name: "Login", to: "/login" }]}
      logout={() => {}}
      clicked={() => {}}
    />
  );
  it("should render mobileMenu", () => {
    expect(wrapper.find(".mobileMenu").length).toBe(1);
  });

  it("should render default mobileMenu", () => {
    expect(wrapper.find(".mobileMenu__item").length).toBe(2);
  });

  it("should render after login mobileMenu", () => {
    wrapper.setProps({
      token: "weqeqweqwe",
      routes: [
        { name: "Home", to: "/" },
        { name: "Add Event", to: "/add" },
        { name: "Your Events", to: "/yourevents" }
      ]
    });
    expect(wrapper.find(".mobileMenu__item").length).toBe(4);
  });
});
