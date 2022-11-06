import StyledMainArticleBox from "../../styledElement/box/mainPageContents/StyledMainArticleBox";
import StyledFlex from "../../styledElement/container/flex/StyledFlex";
import { StyledFlexParagraph, StyledSpanText } from "../../styledElement/item/text/StyledText";

export default function MainArticleBlock() {

    return (
        <StyledMainArticleBox flex={'0 0 auto'} flexDirection={'column'}>
            <StyledFlex flex={'0 0 auto'} bgColor={'#aaaaaa'}>
                <StyledSpanText margin={'1rem'}>최근 작성한 포스트</StyledSpanText>
            </StyledFlex>

            <StyledFlex flex={'0 0 16rem'}>
                <StyledFlex flex={'0 0 72%'} flexDirection={'column'} justifyContent={'center'} bgColor={'#bbbbbb'} className={'contents-area'}>
                    <StyledFlexParagraph flex={'0 0 13%'} bgColor={'#dddddd'} className={'contents-text'}>
                        22-10-19
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 15%'} fontSize={'1.4rem'} bgColor={'#eeeeee'} className={'contents-title'}>
                        제목제목제목제목제목제목제목제목
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 42%'} bgColor={'#dddddd'} className={'contents-text'}>
                        콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 10%'} bgColor={'#eeeeee'} className={'contents-text'}>
                        카테고리
                    </StyledFlexParagraph>
                </StyledFlex>
                <StyledFlex flex={'0 0 28%'} bgColor={'#cccccc'}>
                </StyledFlex>
            </StyledFlex>

            <StyledFlex flex={'0 0 16rem'}>
                <StyledFlex flex={'0 0 72%'} flexDirection={'column'} justifyContent={'center'} bgColor={'#bbbbbb'}>
                    <StyledFlexParagraph flex={'0 0 13%'} bgColor={'#dddddd'} className={'contents-text'}>
                        22-10-19
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 15%'} fontSize={'1.4rem'} bgColor={'#eeeeee'} className={'contents-text'}>
                        제목제목제목제목제목제목제목제목
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 42%'} bgColor={'#dddddd'} className={'contents-text'}>
                        콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 10%'} bgColor={'#eeeeee'} className={'contents-text'}>
                        카테고리
                    </StyledFlexParagraph>
                </StyledFlex>
                <StyledFlex flex={'0 0 28%'} bgColor={'#cccccc'}>
                </StyledFlex>
            </StyledFlex>

            <StyledFlex flex={'0 0 16rem'}>
                <StyledFlex flex={'0 0 72%'} flexDirection={'column'} justifyContent={'center'} bgColor={'#bbbbbb'}>
                    <StyledFlexParagraph flex={'0 0 13%'} bgColor={'#dddddd'} className={'contents-text'}>
                        22-10-19
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 15%'} fontSize={'1.4rem'} bgColor={'#eeeeee'} className={'contents-text'}>
                        제목제목제목제목제목제목제목제목
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 42%'} bgColor={'#dddddd'} className={'contents-text'}>
                        콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 10%'} bgColor={'#eeeeee'} className={'contents-text'}>
                        카테고리
                    </StyledFlexParagraph>
                </StyledFlex>
                <StyledFlex flex={'0 0 28%'} bgColor={'#cccccc'}>
                </StyledFlex>
            </StyledFlex>

        </StyledMainArticleBox>
    );
}