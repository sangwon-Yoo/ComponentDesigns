import React from "react";
import HeaderBlock from "../component/block/header/HeaderBlock";
import MainRepresentativeBlock from "../component/block/mainPageContents/MainRepresentativeBlock";
import StyledFlex from "../component/styledElement/container/flex/StyledFlex";
import MainArticleBlock from "../component/block/mainPageContents/MainArticleBlock";
import SideMenuBarBlock from "../component/block/sideMenuBar/SideMenuBarBlock";

//한 피쳐/페이지의 시작은 컨테이너로 시작해서 가장 하위자식들로 타고 들어가면 마찬가지로 그 자식들도 컨테이너로 시작해야 한다.
export default function BlogHome() {

    return (
        <>
            <HeaderBlock />
            {/*<SideMenuBarBlock />*/}
            <StyledFlex flexDirection={'column'} bgColor={'#678678'}>
                <MainRepresentativeBlock />
                <MainArticleBlock />
                {/*<MainArticleBlock />*/}
                {/*<StyledFlexSection>
                </StyledFlexSection>
                <StyledFlexSection>
                </StyledFlexSection>*/}
            </StyledFlex>
        </>
    );
}