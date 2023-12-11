import { type Meta, type StoryObj } from "@storybook/react";

import SidebarLayout from "./SidebarLayout";
import { mockSidebarLayoutProps } from "./SidebarLayout.mocks";

const meta: Meta<typeof SidebarLayout> = {
  title: "layouts/SidebarLayout",
  component: SidebarLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SidebarLayout>;

export const Base: Story = {
  args: mockSidebarLayoutProps.base,
};
