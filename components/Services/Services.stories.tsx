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
    heading: "Section Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non.",
    featuredCardTitle: "Featured",
    featuredCardDesc: "Hello",
    serviceCard1Image: "/images/services/service-2.png",
    serviceCard1Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non.",
    serviceCard2Image: "/images/services/service-3.png",
    serviceCard1Title: "Section Title",
    serviceCard2Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non.",
    serviceCard1ChatMessage: "Hello",
    serviceCard2ChatMessage: "Hello",

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

// heading,
// description,
// featuredCardTitle,
// featuredCardDesc,
// featuredCardItemList,
// featuredCardImage,
// serviceCard1Image,
// serviceCard1Title,
// serviceCard1Desc,
// serviceCard1ChatMessage,
// serviceCard2Image,
// serviceCard2Title,
// serviceCard2Desc,
// serviceCard2ChatMessage
