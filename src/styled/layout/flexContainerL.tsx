import styled from "styled-components";
import './reset.css';

const FlexContainerL = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;           //양쪽 여백이 생길 경우 auto를 통해 가운데 정렬
  max-width: 1440px;
  overflow-y: auto;       //넘치면 스크롤
  display: flex;          
  flex-direction: column;
  background-color: #fff;
`;

export { FlexContainerL };