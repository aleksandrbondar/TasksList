import styled, { css, keyframes } from 'styled-components';
import { BtnGroupStyled as BtnGroup } from '../BtnGroup/Style';

const createFadeInOut = (height: string) => keyframes`
  0% {
    padding-block: 10px;
    height: ${height};
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  90% {
    height: 0;
    opacity: 0;
    padding-block: 0;
  }
  100% {
    height: 0;
    opacity: 0;
    padding-block: 0;
  }
`;

const returnFadeInOut = (height: string) => keyframes`
  0% {
    height: 0;
    opacity: 0;
    padding-block: 0;
  }
  50% {
    opacity: 0;
    padding-block: 0;
  }
  90% {
    height: ${height};
    padding-block: 10px;
  }
  100% {
    height: ${height};
    padding-block: 10px;
    opacity: 1;
  }
`;

export const Task = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 4px solid black;
  transition: 0.5s;
`;


export const TaskWrapper = styled.div<{ hide: string | null, height: string }>`

  padding-block: 10px;
  transition: 0.5s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  &:focus-within {
    opacity: 1;
  }

  & > ${Task} > ${BtnGroup} {
    transition: 0.5s;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

  &:hover > ${Task} > ${BtnGroup},
  &:focus-within > ${Task} > ${BtnGroup},
  &:focus > ${Task} > ${BtnGroup} {
    opacity: 1;
    height: 60px;
  }
    ${props => props.hide === "hide" && css`
    animation: ${createFadeInOut(props.height)} 1s ease-in-out forwards;
  `}
   ${props => props.hide === "show" && css`
    animation: ${returnFadeInOut(props.height)} 1s ease-in-out forwards;
  `}
`

export const TaskTitle = styled.h3`
  display: block;
  font-size: 24px;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
  margin-bottom: 0;
`
export const TaskInput = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  background-color: transparent;
`


export const TaskTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
