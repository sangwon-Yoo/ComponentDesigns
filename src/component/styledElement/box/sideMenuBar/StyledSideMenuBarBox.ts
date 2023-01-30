import styled from "styled-components";
import StyledFlex from "../../container/flex/StyledFlex";

const StyledSideMenuBarBox = styled.div`
    
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.4); //dim
    overflow: scroll;
  
    & .side-wrapper {
      width: 260px;
      height: 100%;
      overflow-y: scroll;
      background-color: #111111;
    }
  
    & .anchor-logo {
      height: 2.4rem;
      margin-right: 1rem;
    }

    & .img-contain {
      object-fit: contain;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      height: 2.4rem;
      width: 2.4rem;
    }
  
    & .side-titleBlock {
      padding: 13px 16px;
      border-bottom: 1.2px solid rgba(255, 255, 255, 0.08);
    }
  
    & .side-categoryBlock {
      padding: 13px 16px 3px 16px;
      border-bottom: 1.2px solid rgba(255, 255, 255, 0.08);
    }

    & .titleBlock-title {
      display: flex;
      color: #ffffff;
      font-size: 1rem;
      align-items: center;
    }
  
    & .category-title {
      color: #ffffff;
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
  
    & .contents-title {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.8rem;
      margin-bottom: 0.8rem;
    }
`;

export default StyledSideMenuBarBox;