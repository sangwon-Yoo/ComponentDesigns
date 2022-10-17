import StyledMainArticleBox from "../../styledElement/box/mainPageContents/StyledMainArticleBox";
import StyledFlex from "../../styledElement/container/flex/StyledFlex";

export default function MainArticleBlock() {

    return (
        <StyledMainArticleBox flex={'0 0 500px'}>
            <StyledFlex flex={'0 0 70%'} bgColor={'#aaaaaa'}></StyledFlex>
            <StyledFlex flex={'0 0 30%'}></StyledFlex>
        </StyledMainArticleBox>
    );
}