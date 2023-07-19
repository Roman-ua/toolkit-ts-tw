import React from "react";

interface Props {
  clickHandler: () => void;
  disabled: boolean;
}

const CloseButton = ({ clickHandler, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={clickHandler}
      className="absolute right-0 -top-2 font-extrabold text-white rotate-45
       p-2 hover:cursor-pointer disabled:opacity-50"
    >+</button>
  )
}

export default CloseButton;
