import type { Meta, StoryObj } from "@storybook/react";
import RoadmapCard from ".";


const meta = {
  title: "Components/Cards/RoadmapCard",
  component: RoadmapCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="py-15">
        <Story />
      </div>
    ),
  ],
  args: {

  },
  argTypes: {

  },
} satisfies Meta<typeof RoadmapCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <RoadmapCard {...args} />;
  },
};
