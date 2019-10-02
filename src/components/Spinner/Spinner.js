import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg) }

  to { transform: rotate(360deg) }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 10px;
  border-top: 2px solid white 
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 2px solid transparent;

  animation: ${rotate360} 2s linear infinite;
`;

export default Spinner;
