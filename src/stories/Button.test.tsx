import * as React from "react";
import { mount } from "@cypress/react";
import { composeStories } from "@storybook/testing-react";
import * as rawStories from "./Button.stories";

const { Primary } = composeStories(rawStories);

it("playground", () => {
  mount(<Primary />);
});
