import styled from 'styled-components';

export const StyledForm = styled.form`
display: block;
position: relative;
transition: 0.5s;
opacity: 0.6;
&:focus,
 &:hover,
 &:focus-within {
 scale: 1.05;
}
&:focus>div,
 &:hover>div,
 &:focus-within>div {
      opacity: 1;
    };
`