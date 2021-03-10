import styled from 'styled-components';
import { gray } from 'styles/colors';

export default styled.p`
  font-size: 22px;
  color: ${gray};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;