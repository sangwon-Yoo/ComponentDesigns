import StyledFlexContainer, { StyledFlexContainerProps } from "./StyledFlexContainer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

function WrapperStyled(props : StyledFlexContainerProps) {
  return <StyledFlexContainer {...props}/>;
};

export default {
    title: 'components/styledElement/layout/flexbox',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />

const SFlexContainer = Template.bind({});

export { SFlexContainer };