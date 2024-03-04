import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard1 from "./";


const meta = {
  title: "Components/Cards/ServiceCard1",
  component: ServiceCard1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    mainImage: "/images/services/service-2.png",
    mainImageAlt: "string",
    title: "string",
    description: "string",
    chatMessage: "string",
  },
  argTypes: {
    // variant: {
    //   control: {
    //     type: "select",
    //   },
    // },
  },
} satisfies Meta<typeof ServiceCard1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <ServiceCard1 {...args} />;
  },
};
