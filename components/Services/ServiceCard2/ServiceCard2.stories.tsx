import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard2 from ".";



const meta = {
  title: "Components/Cards/ServiceCard2",
  component: ServiceCard2,
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="py-15">
        <Story />
      </div>
    ),
  ],
  args: {
    mainImage: "/images/services/service-2.png",
    mainImageAlt: "image",
    title: "Title",
    description: "This is a description",
    videoChatMessage: "This is a message from the video chatbot",
  },
  argTypes: {},
} satisfies Meta<typeof ServiceCard2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <ServiceCard2 {...args} />;
  },
};
