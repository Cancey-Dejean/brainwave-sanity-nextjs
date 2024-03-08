import type { Meta, StoryObj } from "@storybook/react";
import Services from ".";

const meta = {
  title: "Sections/Services",
  component: Services,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    title: "string",
    description: "string",
  },
  argTypes: {

  },
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Services {...args} />;
  },
};
