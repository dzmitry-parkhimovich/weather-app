import React from 'react';
import styled from 'styled-components';
import { gray } from 'styles/colors';

import { kelvinToCelsius } from 'utils';

interface IProps {
  label: string
  children: number
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  margin: 10px 0;
`;

const Label = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0;
  color: ${gray};
`;

const Value = styled.p`
  font-size: 12px;
  margin: 5px 0 0;
`;

const Temp: React.FC<IProps> = ({ label, children }) => (
  <Container>
    <Label>{label}</Label>
    <Value>{kelvinToCelsius(children)}°</Value>
  </Container>
)

export default Temp