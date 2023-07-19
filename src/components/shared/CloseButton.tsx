import React from "react";

interface Props {
  clickHandler: () => void;
}

const CloseButton = ({ clickHandler }: Props) => {
  return (
    <div
      onClick={clickHandler}
      className="absolute right-0 -top-2 font-extrabold text-white rotate-45 p-2 hover:cursor-pointer"
    >+</div>
  )
}

export default CloseButton;
