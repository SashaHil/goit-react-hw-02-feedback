import styled from 'styled-components';

export const ButtonsLayout = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const Buttons = styled.button`
  padding: 3px 15px;

  background-color: transparent;

  border-radius: 4px;
  border: 1px solid grey;

  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: blue;

    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;
