import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledHeaderContainer from "../../styledElement/container/flex/StyledHeaderContainer";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";

export default function HeaderBlock() {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox heightP={'5rem'} heightM={'3rem'}>
            <StyledHeaderContainer direction={'row'}>
                <StyledFlexItemDiv>(1)</StyledFlexItemDiv>
                <StyledFlexItemDiv>(2)</StyledFlexItemDiv>
                <StyledFlexItemDiv>(3)</StyledFlexItemDiv>
            </StyledHeaderContainer>
        </StyledHeaderBox>
    );
};