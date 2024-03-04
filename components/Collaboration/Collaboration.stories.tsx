import type { Meta, StoryObj } from "@storybook/react";
import Collaboration from ".";


const meta = {
  title: "Components/Collaboration",
  component: Collaboration,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    title: "Collaboration",
    collabText: "Collaborate",
    btnText: "Learn More",
    btnLink: "#",
  },
  argTypes: {

  },
} satisfies Meta<typeof Collaboration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Collaboration {...args} />;
  },
};
