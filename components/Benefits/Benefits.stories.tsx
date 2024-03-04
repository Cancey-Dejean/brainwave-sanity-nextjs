import type { Meta, StoryObj } from "@storybook/react";
import Benefits from "./";


const meta = {
  title: "Components/Benefits",
  component: Benefits,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    title: "Section Title",
  },
  argTypes: {},
} satisfies Meta<typeof Benefits>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Benefits {...args} />;
  },
};
