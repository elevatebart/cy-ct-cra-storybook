import React from "react";
import { Story, Meta } from "@storybook/react";
import { StoryFunction } from "../Story";

import { Button, ButtonProps } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { defaultValue: "Button" },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: StoryFunction = Template.bind({});

Primary.args = {
  label: "foo",
  size: "large",
};

export const Secondary: StoryFunction = Template.bind({});
