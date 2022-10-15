import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledFlex from "../../styledElement/flex/StyledFlex";
import { Menu, MailSend, Instagram } from "@styled-icons/remix-fill";
import {myBlogTheme} from "../../../style/themes";

export default function HeaderBlock() {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox justifyContent={'space-between'}>
            <StyledFlex flex={'0 0 30%'} justifyContent={'flex-start'}>
                <StyledFlex className={'header-logo'}>
                    <img src={'/img/wonny.jpeg'} className={'img-contain'} alt={'블로그 로고'} />
                </StyledFlex>
                <StyledFlex className={'header-item'} >
                    <Menu title={'메뉴'} color={myBlogTheme.color.bg.primary} width={'100%'} />
                </StyledFlex>
            </StyledFlex>
            <StyledFlex flex={'1 1 40%'} />
            <StyledFlex flex={'0 0 30%'} justifyContent={'flex-end'}>
                <StyledFlex className={'header-item'}>
                    <MailSend title={'이메일'} color={myBlogTheme.color.bg.primary} width={'100%'} />
                </StyledFlex>
                <StyledFlex className={'header-item'}>
                    <Instagram title={'인스타그램'} color={myBlogTheme.color.bg.primary} width={'100%'} />
                </StyledFlex>
            </StyledFlex>
        </StyledHeaderBox>
    );
};