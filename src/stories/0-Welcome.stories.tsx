import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { Story } from "@storybook/react";

export default {
  title: "Welcome",
  component: Welcome,
};

export const toStorybook: Story = () => <Welcome showApp={linkTo("Button")} />;

toStorybook.storyName = "to Storybook";
