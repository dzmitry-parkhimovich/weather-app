import styled from 'styled-components';
import { gray } from 'styles/colors';

export default styled.h2`
  margin: 40px 0;
  font-size: 32px;
  text-align: center;
  color: ${gray};

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 25px 0;
  }
`;