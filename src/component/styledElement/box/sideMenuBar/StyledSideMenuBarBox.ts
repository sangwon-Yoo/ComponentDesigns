import styled from "styled-components";
import StyledFlex from "../../container/flex/StyledFlex";

const StyledSideMenuBarBox = styled.div`
    
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.4); //dim
  
    & .side-wrapper {
      width: 260px;
      height: 100%;
      overflow-y: scroll;
      background-color: #111111;
    }
  
    & .logo {
      height: 2rem;
    }

    & .img-contain {
      object-fit: contain;
      border-radius: 2.5px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      height: 2rem;
      width: 2rem;
    }
  
    & .side-categoryBlock {
      padding: 13px 16px 3px 16px;
      border-bottom: 1.2px solid rgba(255, 255, 255, 0.08);
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