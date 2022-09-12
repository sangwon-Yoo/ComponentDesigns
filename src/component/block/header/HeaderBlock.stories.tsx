import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeaderBlock from "./HeaderBlock";

export default {
    title: 'component/block/header',
    component: HeaderBlock,
    argTypes: {
        bgColorDiv: { control: 'color' },
        bigColorContainer: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderBlock>;

const Template: ComponentStory<typeof HeaderBlock> = () => <HeaderBlock />;

const SHeaderWithFlex = Template.bind({});

export { SHeaderWithFlex };
