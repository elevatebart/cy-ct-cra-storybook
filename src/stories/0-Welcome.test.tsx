import * as React from "react";
import { mount } from "@cypress/react";
import { composeStories } from "@storybook/testing-react";
import * as rawStories from "./0-Welcome.stories";

const { toStorybook: ToStorybook } = composeStories(rawStories);

it("toStorybook", () => {
  mount(<ToStorybook />);
});
