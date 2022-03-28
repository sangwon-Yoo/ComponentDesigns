import React, { ReactNode } from "react";
import StyledFlexContainer from "../../styledElement/layout/flexbox/StyledFlexContainer";
import StyledFlexItemMain from "../../styledElement/layout/flexbox/StyledFlexItemMain";
import StyledFlexItemSection from "../../styledElement/layout/flexbox/StyledFlexItemSection";

interface flexLayoutWithMainProps {
    bgColorMain?: string;
    bgColorSection?: string;
    children: ReactNode;
}

const FlexLayoutWithMain = ({ bgColorMain, bgColorSection, children }: flexLayoutWithMainProps) => {

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

export default FlexLayoutWithMain;