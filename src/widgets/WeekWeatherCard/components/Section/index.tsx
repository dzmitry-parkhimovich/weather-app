import React from 'react';
import styled from 'styled-components';

interface IProps {
  label: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Label = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

const Section: React.FC<IProps> = ({ label, children }) => (
  <Container>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Container>
)

export default Section