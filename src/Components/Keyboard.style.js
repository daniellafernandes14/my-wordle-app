import styled from 'styled-components';

export const Key = styled.button`
  font-size: 80%;
  font-weight: bold;
  border: 0;
  padding: 1rem;
  margin: 0 0.1rem;
  border-radius: 0.5rem;
  font-family: inherit;
  background-color: #d3d6da;
  &:hover {
    background-color: #a4a7ab;
    cursor: pointer;
  }
  &:active {
    transform: translateY(3px);
  }
`;
