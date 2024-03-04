import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./";


const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {

  },
  argTypes: {

  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Hero {...args} />;
  },
};
