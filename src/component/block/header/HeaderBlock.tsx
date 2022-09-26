import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledFlexContainer from "../../styledElement/container/flex/StyledFlexContainer";

export default function HeaderBlock() {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox heightP={'5rem'} heightM={'3rem'}>
            <StyledFlexContainer flexDirection={"row"} justifyContent={'space-between'} bgColor={'#111111'}>
                <StyledFlexItemDiv>
                    <StyledFlexContainer flexDirection={"row"} justifyContent={'flex-start'} bgColor={'#111111'}>
                        <StyledFlexItemDiv size={'3rem'}>메인로고</StyledFlexItemDiv>
                        <StyledFlexItemDiv size={'3rem'}>메뉴</StyledFlexItemDiv>
                    </StyledFlexContainer>
                </StyledFlexItemDiv>
                <StyledFlexItemDiv size={'50%'}>중간</StyledFlexItemDiv>
                <StyledFlexItemDiv>
                    <StyledFlexContainer flexDirection={"row"} justifyContent={'flex-end'} bgColor={'#111111'}>
                        <StyledFlexItemDiv>SNS</StyledFlexItemDiv>
                        <StyledFlexItemDiv>국가</StyledFlexItemDiv>
                    </StyledFlexContainer>
                </StyledFlexItemDiv>
            </StyledFlexContainer>
        </StyledHeaderBox>
    );
};