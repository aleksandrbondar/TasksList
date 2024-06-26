import styled from 'styled-components';

export const BtnGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 25px;
  & > * {
    flex: 1 1 0;
    border-radius: 10px;
  }
`

