import StyledFixedTopBox from "./StyledFixedBox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/styledElement/box',
    component: StyledFixedTopBox,
    argTypes: {
        bgColor: { control: 'color' }
    }
} as ComponentMeta<typeof StyledFixedTopBox>;

const Template: ComponentStory<typeof StyledFixedTopBox> = (args) => <StyledFixedTopBox {...args} />;

const StoryOfFixedTopBox = Template.bind({});

StoryOfFixedTopBox.args = {
  heightM: '3rem',
  heightP: '5rem',
};

export { StoryOfFixedTopBox };