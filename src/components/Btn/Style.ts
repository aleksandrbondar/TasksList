import styled from 'styled-components';

const btn = `
  height: 100%;
  padding: 10px 40px;
  border: none;
  font-size: 24px;
  transition: 0.5s;
`

export const StyledBtnSubmit = styled.button`
  ${btn}
  background-color: rgba(0, 255, 0, 0.2);
  &:hover {
  background-color: rgba(0, 255, 0, 1);
  }
`

export const StyledBtnClear = styled.button`
  ${btn}
  background-color: rgba(255, 0, 0, 0.2);
  &:hover {
  background-color: rgba(255, 0, 0, 1);
  }
`

export const StyledBtnEdit = styled.button`
  ${btn}
  background-color: rgba(255, 255, 0, 0.2);
  &:hover {
  background-color: rgba(255, 255, 0, 1);
  }
`