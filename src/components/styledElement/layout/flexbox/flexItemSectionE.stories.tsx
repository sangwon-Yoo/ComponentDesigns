import StyledFlexItemSection from "./flexItemSectionE";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/styledElement/layout/flexbox',
    component: StyledFlexItemSection,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof StyledFlexItemSection>;

const Template: ComponentStory<typeof StyledFlexItemSection> = (args) => <StyledFlexItemSection {...args} />;

const flexItemSection = Template.bind({});

export { flexItemSection };