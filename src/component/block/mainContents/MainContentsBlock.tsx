import StyledMainContentsBox from "../../styledElement/box/mainContents/StyledMainContentsBox";
import StyledText from "../../styledElement/text/StyledText";
import StyledFlex from "../../styledElement/flex/StyledFlex";
import { StyledTransparentAnchor } from "../../styledElement/item/button&anchor/StyledAnchor";

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
                <StyledFlex justifyContent={'center'} alignItem={'center'} className={'button-area'}>
                    <StyledTransparentAnchor width={'10rem'} height={'2.8rem'} fontSize={'1.4rem'}>sdf</StyledTransparentAnchor>
                    <StyledTransparentAnchor width={'10rem'} height={'2.8rem'} fontSize={'1.4rem'}>sdf</StyledTransparentAnchor>
                </StyledFlex>
            </StyledFlex>
        </StyledMainContentsBox>
    );
}