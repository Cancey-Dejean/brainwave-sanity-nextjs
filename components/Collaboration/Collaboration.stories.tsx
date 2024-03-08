import type { Meta, StoryObj } from "@storybook/react";
import Collaboration from ".";
import { collabApps, collabContent } from "../../constants";


const meta = {
  title: "Components/Collaboration",
  component: Collaboration,
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
  args: {
    heading: "Collaboration",
    collabText: "Description goes here",
    btnText: "Learn More",
    btnLink: "#",
    collabApps: collabApps,
    collabContent: collabContent as any,
  },
  argTypes: {},
} satisfies Meta<typeof Collaboration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Collaboration {...args} />;
  },
};
