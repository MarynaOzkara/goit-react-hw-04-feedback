import styled from 'styled-components';

export const WrapOptions = styled.div`
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: teal;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: transparent;
    border: 2px solid teal;
    color: teal;
  }
`;
