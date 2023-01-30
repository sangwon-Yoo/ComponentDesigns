import StyledSideMenuBarBox from "../../styledElement/box/sideMenuBar/StyledSideMenuBarBox";
import StyledFlex from "../../styledElement/container/flex/StyledFlex";
import { StyledFlexIconAnchor } from "../../styledElement/item/button&anchor/StyledAnchor";

export default function SideMenuBarBlock() {

    return (
        <StyledSideMenuBarBox>
            <StyledFlex className={'side-wrapper'} flexDirection={'column'}>
                <StyledFlex className={'side-titleBlock'} >
                    <StyledFlexIconAnchor flex={'0 0 2.4rem'} className={'anchor-logo'} alignItem={'center'} noHover={true}>
                        <img src={'/img/wonny.jpeg'} width={'2.4rem'} height={'2.4rem'} className={'img-contain'} alt={'블로그 로고'} />
                    </StyledFlexIconAnchor>
                    <b className={'titleBlock-title'}>상원's Blog</b>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
                <StyledFlex className={'side-categoryBlock'} flexDirection={'column'}>
                    <b className={'category-title'}>Hello</b>
                    <a className={'contents-title'}>sfds</a>
                    <a className={'contents-title'}>hello1</a>
                    <a className={'contents-title'}>hello2</a>
                    <a className={'contents-title'}>hello3</a>
                </StyledFlex>
            </StyledFlex>
        </StyledSideMenuBarBox>
    );
}