import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledFlex from "../../styledElement/flex/StyledFlex";

export default function HeaderBlock() {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox justifyContent={'space-between'}>
            <StyledFlex flex={'0 0 30%'} justifyContent={'flex-start'}>
                <StyledFlexItemDiv className={'header-item'}>
                    <img src={'/img/wonny.jpeg'} className={'img-contain'} alt={'블로그 로고'} />
                </StyledFlexItemDiv>
                <StyledFlexItemDiv className={'header-item'}>
                    <img src={'/img/hamburger.svg'} className={'img-contain'} alt={'메뉴'} />
                </StyledFlexItemDiv>
            </StyledFlex>
            <StyledFlex flex={'1 1 40%'} />
            <StyledFlex flex={'0 0 30%'} justifyContent={'flex-end'}>
                <StyledFlex className={'header-item'}>
                    <img src={'/img/email.png'} className={'img-contain'} alt={'이메일'} />
                </StyledFlex>
                <StyledFlexItemDiv className={'header-item'}>
                    <img src={'/img/instagram.svg'} className={'img-contain'} alt={'인스타그램'} />
                </StyledFlexItemDiv>
            </StyledFlex>
        </StyledHeaderBox>
    );
};