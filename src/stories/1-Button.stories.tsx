import React from "react";
import { Button } from "@storybook/react/demo";
import type { Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args: any) => <Button {...args} />;

export const Text: Story = Template.bind({});
Text.args = {
  children: "Hello button",
};

export const Emoji: Story = Template.bind({});
Emoji.args = {
  children: "😀 😎 👍 💯",
};
