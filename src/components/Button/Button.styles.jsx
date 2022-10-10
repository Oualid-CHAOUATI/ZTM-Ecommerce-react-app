import styled from "styled-components";

const redTxt = styled.span`
  color: red;
`;

const ButtonBase = styled.button`
  padding: 0.5em 1em;
  background: yellow;

  ${redTxt} {
    display: inline-block;
    padding: 1em;
  }
`;

const ButtonHoverable = styled(ButtonBase)`
  &:hover {
    background: blue;
  }
`;

export const Buttons = { base: ButtonBase, hoverable: ButtonHoverable };
