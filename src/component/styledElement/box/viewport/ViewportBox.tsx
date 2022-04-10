import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledViewportBox, { StyledViewportBoxProps } from "./StyledViewportBox";

function WrapperStyled(props: StyledViewportBoxProps) {
   return <StyledViewportBox {...props} />;
}

export default {
    title: 'component/styledElement/box/viewport',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' }
    }
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SViewportBox = Template.bind({});

export { SViewportBox };