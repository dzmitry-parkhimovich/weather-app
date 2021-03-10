import styled from 'styled-components';
import { dark, gray } from 'styles/colors';

export default styled.input`
  width: 100%;
  height: 100%;
  appearance: none;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  color: ${dark};
  outline: none;
  &::placeholder {
    color: ${gray};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;
