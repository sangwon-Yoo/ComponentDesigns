import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledFlexContainer, { StyledFlexContainerProps } from "./StyledFlexContainer";

function WrapperStyled(props : StyledFlexContainerProps) {
  return <StyledFlexContainer {...props}/>;
};

export default {
    title: 'component/styledElement/container/flex',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />

const SFlexContainer = Template.bind({});

SFlexContainer.args = {
    bgColor: '#dddddf',
    direction: 'column'
};

export { SFlexContainer };