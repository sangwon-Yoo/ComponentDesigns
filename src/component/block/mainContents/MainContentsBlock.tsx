import StyledMainContentsBox from "../../styledElement/box/mainContents/StyledMainContentsBox";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledText from "../../styledElement/text/StyledText";
import StyledFlexContainer from "../../styledElement/container/flex/StyledFlexContainer";
import StyledFlex from "../../styledElement/flex/StyledFlex";

export default function MainContentsBlock() {

    return (
        <StyledMainContentsBox flex={'0 0 600px'} justifyContent={'center'} alignItem={'center'}>
            <StyledFlex flex={'0 0 50%'} flexDirection={'column'} justifyContent={'center'}>
                <StyledFlex flex={'0 0 3rem'} justifyContent={'center'} alignItem={'center'}>
                    <StyledText fontColor={'#ffffff'} fontSize={'2rem'}>Yoo's Blog</StyledText>
                </StyledFlex>
                <StyledFlex flex={'0 0 3rem'} justifyContent={'center'} alignItem={'center'}>
                    <StyledText fontColor={'#ffffff'} fontSize={'2rem'}>Yoo's Blog</StyledText>
                </StyledFlex>
            </StyledFlex>
        </StyledMainContentsBox>
    );
}