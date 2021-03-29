import React from "react";

export function eventValue(fn?: Function) {
  return function (e?: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if (!fn || !e) {
      return;
    }

    if (e.target.value) {
      return fn(e.target.value);
    }

    if (e.target && !e.target.value) {
      return fn("");
    }
  };
}
