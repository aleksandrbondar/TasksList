import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  border: 3px solid black;
  padding: 20px;
  border-radius: 50px;
  font-size: 24px;
  width: 100%;
  padding-right: 300px;
  &:focus {
    outline: none;
  }
`

export const BtnWrapper = styled.div`
  position: absolute;
  height: calc(100% - 6px);
  top: 3px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  border-radius: 0 50px 50px 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
  :first-child {
  border-right: 1px solid black;
  };
  :last-child {
  }
`