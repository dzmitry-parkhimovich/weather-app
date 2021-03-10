import React from 'react';
import styled from 'styled-components';
import { gray } from 'styles/colors';

interface IProps {
  label: string
}

const Container = styled.div`
  min-width: 170px;

  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

const Label = styled.p`
  font-size: 18px;
  color: ${gray};
  margin: 0 0 3px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Value = styled.p`
  font-size: 18px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Group: React.FC<IProps> = ({ label, children }) => (
  <Container>
    <Label>{label}</Label>
    <Value>{children}</Value>
  </Container>
)

export default Group