import type { Meta, StoryObj } from "@storybook/react";
import PricingList from ".";


const meta = {
  title: "Components/Cards/PricingList",
  component: PricingList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof PricingList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <PricingList {...args} />;
  },
};
