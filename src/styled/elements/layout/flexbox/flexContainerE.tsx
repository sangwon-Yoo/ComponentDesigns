import styled from "styled-components";
import '../reset.css';

const FlexContainerE = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;       //넘치면 스크롤
  display: flex;          
  flex-direction: column;
  background-color: #fff;
`;

export { FlexContainerE };