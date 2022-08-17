import StyledFlexContainer from "../../styledElement/container/flex/StyledFlexContainer";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledHeaderContainer from "../../styledElement/container/flex/StyledHeaderContainer";

interface headerWithFlexProps {
    bigColorContainer?: string;

    bgColorDiv?: string;
    widthDivLeft?: string;
    widthDivMid?: string;
    widthDivRight?: string;
}

export default function HeaderBlock({ bgColorDiv, bigColorContainer, widthDivLeft, widthDivMid, widthDivRight }: headerWithFlexProps) {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox heightP={'5rem'} heightM={'3rem'}>
            <StyledHeaderContainer bgColor={bigColorContainer} direction={'row'}>
                <StyledFlexItemDiv width={widthDivLeft} bgColor={bgColorDiv}>(1)</StyledFlexItemDiv>
                <StyledFlexItemDiv width={widthDivMid} bgColor={bgColorDiv}>(2)</StyledFlexItemDiv>
                <StyledFlexItemDiv width={widthDivRight} bgColor={bgColorDiv}>(3)</StyledFlexItemDiv>
            </StyledHeaderContainer>
        </StyledHeaderBox>
    );
};