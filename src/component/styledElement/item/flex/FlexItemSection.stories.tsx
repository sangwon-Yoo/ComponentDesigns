import { ComponentMeta, ComponentStory } from "@storybook/react";
import StyledFlexItemSection, { StyledFlexItemSectionProps } from "./StyledFlexItemSection";

function WrapperStyled(props: StyledFlexItemSectionProps) {
    return <StyledFlexItemSection {...props} />;
}

export default {
    title: 'component/styledElement/item/flex',
    component: WrapperStyled,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof WrapperStyled>;

const Template: ComponentStory<typeof WrapperStyled> = (args) => <WrapperStyled {...args} />;

const SFlexItemSection = Template.bind({});

export { SFlexItemSection };