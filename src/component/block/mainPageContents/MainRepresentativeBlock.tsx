import StyledMainRepresentativeBox from "../../styledElement/box/mainPageContents/StyledMainRepresentativeBox";
import { StyledSpanText } from "../../styledElement/item/text/StyledText";
import StyledFlex from "../../styledElement/container/flex/StyledFlex";
import { StyledTransparentAnchor } from "../../styledElement/item/button&anchor/StyledAnchor";

export default function MainRepresentativeBlock() {

    return (
        <StyledMainRepresentativeBox flex={'0 0 600px'} justifyContent={'center'} alignItem={'center'}>
            <StyledFlex flex={'0 0 50%'} flexDirection={'column'} justifyContent={'center'}>
                <StyledFlex flex={'0 0 3rem'} justifyContent={'center'} alignItem={'center'}>
                    <StyledSpanText fontColor={'#ffffff'} fontSize={'2rem'}>Yoo's Blog</StyledSpanText>
                </StyledFlex>
                <StyledFlex flex={'0 0 3rem'} justifyContent={'center'} alignItem={'center'}>
                    <StyledSpanText fontColor={'#ffffff'} fontSize={'2rem'}>Yoo's Blog</StyledSpanText>
                </StyledFlex>
                <StyledFlex justifyContent={'center'} alignItem={'center'} className={'button-area'}>
                    <StyledTransparentAnchor width={'10rem'} height={'2.8rem'} fontSize={'1.4rem'}>sdf</StyledTransparentAnchor>
                    <StyledTransparentAnchor width={'10rem'} height={'2.8rem'} fontSize={'1.4rem'}>sdf</StyledTransparentAnchor>
                </StyledFlex>
            </StyledFlex>
        </StyledMainRepresentativeBox>
    );
}