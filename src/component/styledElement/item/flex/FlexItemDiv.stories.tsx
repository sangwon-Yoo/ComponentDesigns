import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledFlexItemDiv, { StyledFlexItemDivProps } from "./StyledFlexItemDiv";

function WrapperStyled(props: StyledFlexItemDivProps) {
    return <StyledFlexItemDiv {...props} />;
}

export default {
    title: 'component/styledElement/item/flex',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SFlexItemDiv = Template.bind({});

SFlexItemDiv.args = {};

export { SFlexItemDiv };