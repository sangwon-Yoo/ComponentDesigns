import React, { ReactNode } from "react";
import StyledFlexContainer from "../../styledElement/layout/flexbox/flexContainerE";
import StyledFlexItemMain from "../../styledElement/layout/flexbox/flexItemMainE";
import StyledFlexItemSection from "../../styledElement/layout/flexbox/flexItemSectionE";

interface flexboxWithMainProps {
    bgColorMain?: string;
    bgColorSection?: string;
    children: ReactNode;
}

const FlexboxWithMainB = ({ bgColorMain, bgColorSection, children }: flexboxWithMainProps) => {

    const sections = React.Children.map(children, (child) =>
        <StyledFlexItemSection bgColor={bgColorSection}>
            {child}
        </StyledFlexItemSection>
    );

    return (
        <StyledFlexContainer>
            <StyledFlexItemMain bgColor={bgColorMain} />
            {sections}
        </StyledFlexContainer>
    );
};

export default FlexboxWithMainB;