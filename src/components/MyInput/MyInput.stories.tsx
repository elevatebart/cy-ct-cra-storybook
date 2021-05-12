import React from "react";
import type { Story, Meta } from "@storybook/react";

import MyInput from "./MyInput";

const meta: Meta = {
  title: "Components/MyInput",
  component: MyInput,
};

export default meta;

export const Primary: Story = () => <MyInput value="test" />;
export const Empty: Story = () => <MyInput />;
