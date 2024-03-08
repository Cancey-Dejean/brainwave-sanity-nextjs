import type { Meta, StoryObj } from "@storybook/react";
import Hero from ".";
import { socialProof } from "../../constants";


const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    title: "Title",
    titleHighlight: "Highlight",
    mainImage: "/images/hero/robot.png",
    mainImageAlt: "Robot",
    imageText: "Image Text",
    description: "Description goes here",
    btnText: "Learn More",
    btnLink: "#",
    socialProofText: "Social Proof",
    socialProof: socialProof as any,
  },
  argTypes: {

  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Hero {...args} />;
  },
};
