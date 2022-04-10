import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledHeaderBox, { StyledHeaderBoxProps } from "./StyledHeaderBox";

function WrapperStyled(props: StyledHeaderBoxProps) {
   return <StyledHeaderBox {...props} />;
}

export default {
    title: 'component/styledElement/box/header',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' }
    }
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SHeaderBox = Template.bind({});

SHeaderBox.args = {
    heightM: '3rem',
    heightP: '5rem',
    bgColor: '#fff',
};

export { SHeaderBox };