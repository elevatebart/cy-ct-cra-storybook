import React from "react";
import type { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { defaultValue: "Button" },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  label: "foo",
  size: "large",
};

export const Secondary: Story = Template.bind({});
