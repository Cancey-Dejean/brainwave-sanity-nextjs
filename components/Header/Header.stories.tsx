import type { Meta, StoryObj } from "@storybook/react";
import Header from "./";


const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    logoImage: "/images/brainwave.svg",
    logoAlt: "Acme",
    logoText: "Acme",
  },
  argTypes: {

  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Header {...args} />;
  },
};
