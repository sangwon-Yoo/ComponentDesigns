import StyledFlexItemMain from "./flexItemMainE";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'components/styledElement/layout/flexbox',
    component: StyledFlexItemMain,
    argTypes: {
        bgColor: { control: 'color' },
    },
} as ComponentMeta<typeof StyledFlexItemMain>;

const Template: ComponentStory<typeof StyledFlexItemMain> = (args) => <StyledFlexItemMain {...args} />;

const flexItemMain = Template.bind({});

export { flexItemMain };