import FlexLayoutWithMain from "./FlexLayoutWithMain";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/block/layout',
    component: FlexLayoutWithMain,
    argTypes: {
        bgColorMain: { control: 'color' },
        bgColorSection: { control: 'color' },
    },
} as ComponentMeta<typeof FlexLayoutWithMain>;

const Template: ComponentStory<typeof FlexLayoutWithMain> = (args) =>
    <FlexLayoutWithMain {...args}>
        <div>section1</div>
        <div>section2</div>
        <div>section3</div>
    </FlexLayoutWithMain>;

const StoryOfFlexLayoutWithMain = Template.bind({});

export { StoryOfFlexLayoutWithMain };