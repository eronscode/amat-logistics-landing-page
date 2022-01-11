import React from "react";

type Props = {
  toggleVisibility: () => void;
  show: boolean;
};

function Backdrop(props: Props) {
  const { show, toggleVisibility } = props;

  return show ? (
    <div onClick={toggleVisibility} className="backdrop"></div>
  ) : null;
}

export default Backdrop;
