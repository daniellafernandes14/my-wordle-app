import styled from 'styled-components';

export const Tile = styled.div`
  border: 2px solid grey;
  height: 2.5rem;
  width: 2.5rem;
  margin: 2px !important;
`;

export const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2px;
  width: 12rem;
  justify-content: center;
  margin: 0 auto;
`;
