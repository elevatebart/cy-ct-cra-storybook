import * as React from "react";
import { mount } from "@cypress/react";
import { composeStories } from "@storybook/testing-react";
import * as rawStories from "./1-Button.stories";

const { Emoji, Text } = composeStories(rawStories);

it("Emoji", () => {
  mount(<Emoji />);
});

it("Text", () => {
  mount(<Text />);
});
