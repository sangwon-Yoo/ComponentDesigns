import React from "react";
import HeaderBlock from "../component/block/header/HeaderBlock";
import MainContentsBlock from "../component/block/mainContents/MainContentsBlock";
import StyledFlex from "../component/styledElement/flex/StyledFlex";
import StyledFlexSection from "../component/styledElement/item/flex/StyledFlexItemSection";

//한 피쳐/페이지의 시작은 컨테이너로 시작해서 가장 하위자식들로 타고 들어가면 마찬가지로 그 자식들도 컨테이너로 시작해야 한다.
export default function BlogHome() {

    return (
        <>
            <HeaderBlock />
            <StyledFlex flexDirection={'column'} bgColor={'#678678'}>
                <MainContentsBlock />
                <StyledFlexSection>
                </StyledFlexSection>
                <StyledFlexSection>
                </StyledFlexSection>
            </StyledFlex>
        </>
    );
}