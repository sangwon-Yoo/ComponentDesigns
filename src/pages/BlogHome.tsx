import StyledFlexContainer from "../component/styledElement/container/flex/StyledFlexContainer";
import StyledFlexItemMain from "../component/styledElement/item/flex/StyledFlexItemMain";
import React from "react";
import StyledFlexItemSection from "../component/styledElement/item/flex/StyledFlexItemSection";
import HeaderBlock from "../component/block/header/HeaderBlock";

//한 피쳐/페이지의 시작은 컨테이너로 시작해서 가장 하위자식들로 타고 들어가면 마찬가지로 그 자식들도 컨테이너로 시작해야 한다.
export default function BlogHome() {

    return (
        <>
            <HeaderBlock />
            <StyledFlexContainer direction={'column'} bgColor={'#333333'}>
                <StyledFlexItemMain bgColor={'#444444'}>
                </StyledFlexItemMain>
                <StyledFlexItemSection bgColor={'#555555'}>
                </StyledFlexItemSection>
                <StyledFlexItemSection bgColor={'#666666'}>
                </StyledFlexItemSection>
            </StyledFlexContainer>
        </>
    );
}