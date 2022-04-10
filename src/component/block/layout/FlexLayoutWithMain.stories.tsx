import { ComponentMeta, ComponentStory } from "@storybook/react";
import FlexLayoutWithMain from "./FlexLayoutWithMain";

export default {
    title: 'component/block/viewport',
    component: FlexLayoutWithMain,
    argTypes: {
        bgColorBox: { control: 'color' },
        bgColorMain: { control: 'color' },
        bgColorSection: { control: 'color' },
        bgColorContainer: { control: 'color' },
    },
} as ComponentMeta<typeof FlexLayoutWithMain>;

const Template: ComponentStory<typeof FlexLayoutWithMain> = (args) =>
    <FlexLayoutWithMain {...args}>
        <div>section1</div>
        <div>section2</div>
        <div>section3</div>
    </FlexLayoutWithMain>;

const SFlexLayoutWithMain = Template.bind({});

export { SFlexLayoutWithMain };
