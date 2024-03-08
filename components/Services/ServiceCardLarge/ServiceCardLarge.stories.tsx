import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardLarge from ".";

const meta = {
  title: "Components/Cards/ServiceCardLarge",
  component: ServiceCardLarge,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-15">
        <Story />
      </div>
    ),
  ],
  // tags: ["autodocs"],
  args: {
    mainImage: "/images/services/service-1.png",
    mainImageAlt: "Main Image",
    title: "Photo Enhance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non.",
    bottomText: "Bottom text goes here",
  },
  argTypes: {

  },
} satisfies Meta<typeof ServiceCardLarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <ServiceCardLarge {...args} />;
  },
};
