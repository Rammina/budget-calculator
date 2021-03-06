import React from "react";
import { shallow } from "enzyme";

import { findByTestAttributes } from "../test/testUtils";

import App from "./App";

const defaultProps = {};

/**
 * factory function to create a ShallowWrapper for the component
 *@function setup
 *@params {object} props - component props specific to this setup
 *@returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<App {...setupProps} />);
};

test("component renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttributes(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
