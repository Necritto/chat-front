import React from "react";

import { SnackReactionsWrapper } from "./styles";

interface SnackReactionsPropsInterface {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const SnackReactions = ({
  type,
  message,
  onClose,
}: SnackReactionsPropsInterface) => {
  return (
    <SnackReactionsWrapper isError={type === "error"}>
      {type === "success" ? <span>&#128504;</span> : <span>&#128711;</span>}
      <p>{message}</p>
      <button onClick={onClose}>&times;</button>
    </SnackReactionsWrapper>
  );
};

export default React.memo(SnackReactions);
