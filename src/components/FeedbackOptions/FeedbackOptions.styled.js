import styled from 'styled-components';

export const ButtonsLayout = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const Buttons = styled.button`
  padding: 3px 15px;

  background-color: #2196f3;
  color: #ffffff;

  border-radius: 4px;
  border: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
