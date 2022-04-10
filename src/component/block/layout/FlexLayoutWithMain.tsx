import React, { ReactNode } from "react";
import StyledFlexContainer from "../../styledElement/container/flex/StyledFlexContainer";
import StyledFlexItemMain from "../../styledElement/item/flex/StyledFlexItemMain";
import StyledFlexItemSection from "../../styledElement/item/flex/StyledFlexItemSection";
import StyledViewportBox from "../../styledElement/box/viewport/StyledViewportBox";

interface flexLayoutWithMainProps {
    bgColorBox?: string;
    bgColorContainer?: string;
    bgColorMain?: string;
    bgColorSection?: string;

    directionRowContainer?: boolean,
    scrollContainer?: boolean,

    children: ReactNode;
}

const FlexLayoutWithMain = ({ bgColorBox, bgColorContainer, bgColorMain, bgColorSection, children, directionRowContainer = false, scrollContainer = true }: flexLayoutWithMainProps) => {

    const sections = React.Children.map(children, (child) =>
        <StyledFlexItemSection bgColor={bgColorSection}>
            {child}
        </StyledFlexItemSection>
    );

    return (
        <StyledViewportBox bgColor={bgColorBox}>
            <StyledFlexContainer directionRow={directionRowContainer} scroll={scrollContainer} bgColor={bgColorContainer}>
                <StyledFlexItemMain bgColor={bgColorMain} />
                {sections}
            </StyledFlexContainer>
        </StyledViewportBox>
    );
};

export default FlexLayoutWithMain;