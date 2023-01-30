import StyledMainArticleBox from "../../styledElement/box/mainPageContents/StyledMainArticleBox";
import StyledFlex from "../../styledElement/container/flex/StyledFlex";
import {
    StyledFlexLineClampParagraph,
    StyledFlexParagraph,
    StyledSpanText
} from "../../styledElement/item/text/StyledText";

export default function MainArticleBlock() {

    return (
        <StyledMainArticleBox flex={'0 0 auto'} flexDirection={'column'}>
            <StyledFlex flex={'0 0 auto'} className={'article-kind'}>
                <StyledSpanText margin={'1rem'}>최근 작성한 포스트</StyledSpanText>
            </StyledFlex>

            <StyledFlex flex={'0 0 16rem'} className={'contents-box'}>
                <StyledFlex flex={'0 0 72%'} flexDirection={'column'} justifyContent={'center'} bgColor={'#ffffff'} className={'contents-area'}>
                    <StyledFlexParagraph flex={'0 0 12%'} bgColor={'#ffffff'} className={'contents-date'}>
                        Sep. 19. 22
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 16%'} fontSize={'1.4rem'} bgColor={'#ffffff'} className={'contents-title'}>
                        Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?
                    </StyledFlexParagraph>
                    <StyledFlexLineClampParagraph flex={'0 0 40%'} bgColor={'#ffffff'} lineClamp={3} className={'contents-text'}>
                        콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용
                    </StyledFlexLineClampParagraph>
                    <StyledFlexParagraph flex={'0 0 12%'} bgColor={'#ffffff'} className={'contents-category'}>
                        카테고리
                    </StyledFlexParagraph>
                </StyledFlex>
                <StyledFlex flex={'0 0 28%'} bgColor={'#ffffff'} flexDirection={'column'} justifyContent={'center'}>
                    <StyledFlex flex={'0 0 56%'} bgColor={'#ffffff'} className={'img-container'}>
                        <img src={'/img/wonny.jpeg'} className={'contents-img'} alt={'콘텐츠 대표 이미지'} />
                    </StyledFlex>
                </StyledFlex>
            </StyledFlex>

            <StyledFlex flex={'0 0 16rem'} className={'contents-box'}>
                <StyledFlex flex={'0 0 72%'} flexDirection={'column'} justifyContent={'center'} bgColor={'#ffffff'} className={'contents-area'}>
                    <StyledFlexParagraph flex={'0 0 12%'} bgColor={'#ffffff'} className={'contents-date'}>
                        Sep. 19. 22
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 16%'} fontSize={'1.4rem'} bgColor={'#ffffff'} className={'contents-title'}>
                        Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?
                    </StyledFlexParagraph>
                    <StyledFlexLineClampParagraph flex={'0 0 40%'} bgColor={'#ffffff'} lineClamp={3} className={'contents-text'}>
                        콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용
                    </StyledFlexLineClampParagraph>
                    <StyledFlexParagraph flex={'0 0 12%'} bgColor={'#ffffff'} className={'contents-category'}>
                        카테고리
                    </StyledFlexParagraph>
                </StyledFlex>
                <StyledFlex flex={'0 0 28%'} bgColor={'#ffffff'} flexDirection={'column'} justifyContent={'center'}>
                    <StyledFlex flex={'0 0 56%'} bgColor={'#ffffff'} className={'img-container'}>
                        <img src={'/img/wonny.jpeg'} className={'contents-img'} alt={'콘텐츠 대표 이미지'} />
                    </StyledFlex>
                </StyledFlex>
            </StyledFlex>

            <StyledFlex flex={'0 0 16rem'} className={'contents-box'}>
                <StyledFlex flex={'0 0 72%'} flexDirection={'column'} justifyContent={'center'} bgColor={'#bbbbbb'} className={'contents-area'}>
                    <StyledFlexParagraph flex={'0 0 12%'} bgColor={'#dddddd'} className={'contents-date'}>
                        Sep. 19. 22
                    </StyledFlexParagraph>
                    <StyledFlexParagraph flex={'0 0 16%'} fontSize={'1.4rem'} bgColor={'#eeeeee'} className={'contents-title'}>
                        Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?
                    </StyledFlexParagraph>
                    <StyledFlexLineClampParagraph flex={'0 0 40%'} bgColor={'#dddddd'} lineClamp={3} className={'contents-text'}>
                        콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용 콘텐츠 내용
                    </StyledFlexLineClampParagraph>
                    <StyledFlexParagraph flex={'0 0 12%'} bgColor={'#eeeeee'} className={'contents-category'}>
                        카테고리
                    </StyledFlexParagraph>
                </StyledFlex>
                <StyledFlex flex={'0 0 28%'} bgColor={'#cccccc'} flexDirection={'column'} justifyContent={'center'}>
                    <StyledFlex flex={'0 0 56%'} bgColor={'#dddddd'} className={'img-container'}>
                        <img src={'/img/wonny.jpeg'} className={'contents-img'} alt={'콘텐츠 대표 이미지'} />
                    </StyledFlex>
                </StyledFlex>
            </StyledFlex>

        </StyledMainArticleBox>
    );
}