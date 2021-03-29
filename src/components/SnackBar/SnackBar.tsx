import React, { useState, useCallback, useEffect } from "react";

import SnackReactions from "primitives/SnackReactions/SnackReactions";

import { SnackBarWrapper } from "./styles";

interface SnackBarPropsInterface {
  type: "success" | "error";
  message: string;
  isOpened: boolean;
}

const SnackBar = ({ type, message, isOpened }: SnackBarPropsInterface) => {
  const [isClosed, setIsClosed] = useState(isOpened);

  useEffect(() => {
    setTimeout(() => setIsClosed(false), 1500);
  });

  return (
    <SnackBarWrapper isOpen={!isClosed}>
      <SnackReactions type={type} message={message} onClose={useCallback(() => setIsClosed(!isClosed), [isClosed])} />
    </SnackBarWrapper>
  );
};

export default React.memo(SnackBar);
