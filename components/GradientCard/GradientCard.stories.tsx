import type { Meta, StoryObj } from "@storybook/react";
import GradientCard from "./";


const meta = {
  title: "Components/Cards/GradientCard",
  component: GradientCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Section Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non.",
    iconUrl: "/images/benefits/icon-1.svg",
    iconAlt: "Alt Text",
    variant: "v1",
    backgroundImage: "/images/benefits/image-2.png",
    btnUrl: "/",
    btnText: "Explore more",
    gradientLight: true,
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof GradientCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <GradientCard {...args} />;
  },
};
