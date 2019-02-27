import React from 'react';
import styled from 'styled-components/macro';

// styled
const H2 = styled.h2`
  color: tomato;
  font-weight: 300;

  &::first-letter {
    font-weight: 900;
  }
`;

export default function Logo() {
  return (
    <H2>Read.it</H2>
  );
}