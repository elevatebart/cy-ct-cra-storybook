import React from "react";
import { Button } from "@storybook/react/demo";
import { StoryFunction } from "../Story";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args: any) => <Button {...args} />;

export const Text: StoryFunction = Template.bind({});
Text.args = {
  children: "Hello button",
};

export const Emoji: StoryFunction = Template.bind({});
Emoji.args = {
  children: "😀 😎 👍 💯",
};
