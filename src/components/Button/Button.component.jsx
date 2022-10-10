import { Buttons } from "./Button.styles";
export const BTNS_TYPES = {
  base: "base",
  hoverable: "hoverable",
};
const getBtn = (type = BTNS_TYPES.base) =>
  ({
    [BTNS_TYPES.base]: Buttons.base,
    [BTNS_TYPES.hoverable]: Buttons.hoverable,
  }[type]);

export const Button = ({ styleType, children, ...others }) => {
  const Btn = getBtn(styleType);

  return <Btn {...others}>{children}</Btn>;
};
