import StyledFlexContainer  from "./StyledFlexContainer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/styledElement/layout/flexbox',
    component: StyledFlexContainer,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof StyledFlexContainer>;

const Template: ComponentStory<typeof StyledFlexContainer> = (args) => <StyledFlexContainer {...args} />;

const StoryOfFlexContainer = Template.bind({});

export { StoryOfFlexContainer };