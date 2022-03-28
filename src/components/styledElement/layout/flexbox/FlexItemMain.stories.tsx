import StyledFlexItemMain from "./StyledFlexItemMain";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/styledElement/layout/flexbox',
    component: StyledFlexItemMain,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof StyledFlexItemMain>;

const Template: ComponentStory<typeof StyledFlexItemMain> = (args) => <StyledFlexItemMain {...args} />;

const StoryOfFlexItemMain = Template.bind({});

export { StoryOfFlexItemMain };