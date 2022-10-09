import StyledHeaderBox from "../../styledElement/box/header/StyledHeaderBox";
import StyledFlexItemDiv from "../../styledElement/item/flex/StyledFlexItemDiv";
import StyledFlexContainer from "../../styledElement/container/flex/StyledFlexContainer";

export default function HeaderBlock() {

    /* feature로 쓸 경우 여기에 비즈니스 로직을 사용 */

    return (
        <StyledHeaderBox heightP={'5rem'} heightM={'3rem'}>
            <StyledFlexContainer flexDirection={"row"} justifyContent={'space-between'} bgColor={'#111111'}>
                <StyledFlexItemDiv flex={'0 0 30%'}>
                    <StyledFlexContainer flexDirection={"row"} justifyContent={'flex-start'} bgColor={'#111111'}>
                        <StyledFlexItemDiv className={'padding01'}>
                            <img src={'/img/wonny.jpeg'} className={'img-contain'} alt={'블로그 로고'} />
                        </StyledFlexItemDiv>
                        <StyledFlexItemDiv className={'padding02'}>
                            <img src={'/img/hamburger.svg'} className={'img-contain'} alt={'메뉴'} />
                        </StyledFlexItemDiv>
                    </StyledFlexContainer>
                </StyledFlexItemDiv>
                <StyledFlexItemDiv flex={'1 1 40%'} />
                <StyledFlexItemDiv flex={'0 0 30%'}>
                    <StyledFlexContainer flexDirection={"row"} justifyContent={'flex-end'} bgColor={'#111111'}>
                        <StyledFlexItemDiv className={'padding01'}>
                            <img src={'/img/email.png'} className={'img-contain'} alt={'이메일'} />
                        </StyledFlexItemDiv>
                        <StyledFlexItemDiv className={'padding01'}>
                            <img src={'/img/instagram.svg'} className={'img-contain'} alt={'인스타그램'} />
                        </StyledFlexItemDiv>
                    </StyledFlexContainer>
                </StyledFlexItemDiv>
            </StyledFlexContainer>
        </StyledHeaderBox>
    );
};