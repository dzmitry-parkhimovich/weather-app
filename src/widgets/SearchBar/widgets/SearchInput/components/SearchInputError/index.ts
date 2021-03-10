import styled from 'styled-components';
import { red, white } from 'styles/colors';

export default styled.p`
  font-size: 10px;
  text-align: right;
  margin: 10px 10px 0;
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${white};
  background-color: ${red};
  padding: 3px 6px;
  border-radius: 3px;

  @media (max-width: 768px) {
    bottom: -100%;
    margin: 10px 0 0;
  }
`;
