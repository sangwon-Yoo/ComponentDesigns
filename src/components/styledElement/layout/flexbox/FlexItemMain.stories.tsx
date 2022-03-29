import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledFlexItemMain, { StyledFlexItemMainProps } from "./StyledFlexItemMain";

function WrapperStyled(props : StyledFlexItemMainProps) {
    return <StyledFlexItemMain {...props}/>;
};

export default {
    title: 'components/styledElement/layout/flexbox',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SFlexItemMain = Template.bind({});

export { SFlexItemMain };