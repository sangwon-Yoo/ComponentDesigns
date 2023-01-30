import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledFlex from "../../styledElement/container/flex/StyledFlex";
import { StyledFlexIconButton } from "../../styledElement/item/button&anchor/StyledButton";
import { StyledFlexIconAnchor } from "../../styledElement/item/button&anchor/StyledAnchor";
import {
    StyledIconGithub,
    StyledIconInstagram,
    StyledIconMail,
    StyledIconMenu
} from "../../styledElement/item/button&anchor/StyledIcon";

export default function HeaderBlock() {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox justifyContent={'space-between'}>
            <StyledFlex flex={'0 0 30%'} justifyContent={'flex2-start'} alignItem={'center'}>
                <StyledFlexIconAnchor className={'header-item'} justifyContent={'center'} alignItem={'center'} noHover={true}>
                    <img src={'/img/wonny.jpeg'} width={'2rem'} height={'2rem'} className={'img-contain'} alt={'블로그 로고'} />
                </StyledFlexIconAnchor>
                <StyledFlexIconButton className={'header-item'} justifyContent={'center'} alignItem={'center'}>
                    <StyledIconMenu title={'메뉴'} width={'100%'} height={'2rem'} className={'hover-able'} />
                </StyledFlexIconButton>
            </StyledFlex>
            <StyledFlex flex={'1 1 40%'} />
            <StyledFlex flex={'0 0 30%'} justifyContent={'flex-end'} alignItem={'center'}>
                {/*<StyledFlexIconButton className={'header-item'} justifyContent={'center'} alignItem={'center'}>
                    <StyledIconMail title={'메일주소'} width={'100%'} height={'2rem'} className={'hover-able'} />
                </StyledFlexIconButton>*/}
                <StyledFlexIconAnchor className={'header-item'} justifyContent={'center'} alignItem={'center'}>
                    <StyledIconInstagram title={'인스타그램'} width={'100%'} height={'2rem'} className={'hover-able'} />
                </StyledFlexIconAnchor>
                <StyledFlexIconAnchor className={'header-item'} justifyContent={'center'} alignItem={'center'}>
                    <StyledIconGithub title={'깃허브'} width={'100%'} height={'2rem'} className={'hover-able'} />
                </StyledFlexIconAnchor>
            </StyledFlex>
        </StyledHeaderBox>
    );
};