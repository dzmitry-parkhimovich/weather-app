import styled from 'styled-components';
import { gray, white } from 'styles/colors';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${white};
  box-shadow: 0 0 10px ${gray};
  border-radius: 5px;
  height: 50px;
`;
