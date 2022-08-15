import StyledFlexContainer from "../../styledElement/container/flex/StyledFlexContainer";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";

interface headerWithFlexProps {
    bigColorContainer?: string;

    bgColorDiv?: string;
    widthDivLeft?: string;
    widthDivMid?: string;
    widthDivRight?: string;
}

const HeaderWithFlex = ({ bgColorDiv, bigColorContainer, widthDivLeft, widthDivMid, widthDivRight }: headerWithFlexProps) => {

    return (
        <StyledHeaderBox heightP={'5rem'} heightM={'3rem'}>
            <StyledFlexContainer bgColor={bigColorContainer} direction={'column'}>
                <StyledFlexItemDiv width={widthDivLeft} bgColor={bgColorDiv}>(1)</StyledFlexItemDiv>
                <StyledFlexItemDiv width={widthDivMid} bgColor={bgColorDiv}>(2)</StyledFlexItemDiv>
                <StyledFlexItemDiv width={widthDivRight} bgColor={bgColorDiv}>(3)</StyledFlexItemDiv>
            </StyledFlexContainer>
        </StyledHeaderBox>
    );
};

export default HeaderWithFlex;