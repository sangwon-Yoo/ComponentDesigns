import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeaderWithFlex from "./HeaderWithFlex";

export default {
    title: 'component/block/header',
    component: HeaderWithFlex,
    argTypes: {
        bgColorDiv: { control: 'color' },
        bigColorContainer: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderWithFlex>;

const Template: ComponentStory<typeof HeaderWithFlex> = (args) => <HeaderWithFlex {...args} />;

const SHeaderWithFlex = Template.bind({});

export { SHeaderWithFlex };
