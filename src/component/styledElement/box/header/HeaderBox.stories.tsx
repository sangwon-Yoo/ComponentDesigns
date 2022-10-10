import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledHeaderBox, { StyledHeaderBoxProps } from "./StyledHeaderBox";
import {StyledFlexProps} from "../../flex/StyledFlex";

function WrapperStyled(props: StyledFlexProps) {
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

};

export { SHeaderBox };