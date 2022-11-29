import styled from "styled-components";
import { StyledFlexSection } from "../../container/flex/StyledFlex";
import { Media } from "../../../../style/mediaQuery";

const StyledMainArticleBox = styled(StyledFlexSection)`
  
    ${Media.tablet} {
        margin: 0 10% 0 10%;
    }
    ${Media.desktop} {
        margin: 0 10% 0 10%;
    }
    ${Media.overflow} {
        width: 1152px; //1440 * 0.8
        margin-left: auto;
        margin-right: auto;
    }
  
    & .article-kind {
        background-color: #ffffff;
        color: #292929;
      
        border-bottom: 1px solid #e6e6e6;
    }
  
    /* flex 박스는 ex) flex: 0 0 16rem 을 주더라도 가변요소 자식에 의해 16rem 을 넘길 수 있다. min, max 설정 필요. */
    & .contents-box {
        max-height: 16rem;
        border-bottom: 1px solid #e6e6e6;
    }
    & .contents-area {
        max-width: 72%;
    }

    & .contents-date {
        line-height: normal;
        margin: 0 1rem;
        
        overflow: hidden;
        
        color: #BDC3C7;
    }
  
    & .contents-text {
        line-height: normal;
        margin: 0 1rem;
        color: #232323;
        
        overflow: hidden;
    }

    & .contents-title {
        line-height: normal;
        margin: 0 1rem;

        font-family: NotoSansKR-Bold;
        
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
  
    & .contents-category {
      display: inline-block;
      line-height: normal;
      margin: 0 1rem;
      color: #232323;

      overflow: hidden;
    }
`;

export default StyledMainArticleBox;