import styled from 'styled-components';
import { gray, white } from 'styles/colors';

export default styled.button`
  height: 100%;
  width: 180px;
  appearance: none;
  border: none;
  font-size: 16px;
  color: ${white};
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  background-color: ${gray};
  outline: none;

  @media (max-width: 768px) {
    font-size: 12px;
    min-width: 110px;
  }
`;
