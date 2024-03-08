import type { Meta, StoryObj } from "@storybook/react";
import Benefits from "./";
import { cards } from "../../constants";


const meta = {
  title: "Components/Benefits",
  component: Benefits,
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
  args: {
    heading: "Section Title",
    cards: cards,
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
