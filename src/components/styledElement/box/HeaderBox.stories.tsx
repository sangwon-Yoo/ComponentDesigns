import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledHeaderBox, { StyledHeaderBoxProps } from "./StyledHeaderBox";

function WrapperStyled(props: StyledHeaderBoxProps) {
   return <StyledHeaderBox {...props} />;
}

export default {
    title: 'components/styledElement/box',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' }
    }
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SFixedTopBox = Template.bind({});

SFixedTopBox.args = {
    heightM: '3rem',
    heightP: '5rem',
    bgColor: '#fff',
};

export { SFixedTopBox };