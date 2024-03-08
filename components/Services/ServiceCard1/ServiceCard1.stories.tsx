import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard1 from "./";


const meta = {
  title: "Components/Cards/ServiceCard1",
  component: ServiceCard1,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  args: {
    mainImage: "/images/services/service-2.png",
    mainImageAlt: "Robot",
    title: "Title",
    description: "Description goes here",
    chatMessage: "This is a message from the chatbot",
  },
  argTypes: {},
} satisfies Meta<typeof ServiceCard1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <ServiceCard1 {...args} />;
  },
};
