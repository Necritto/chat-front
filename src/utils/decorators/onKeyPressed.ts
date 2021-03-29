import React from "react";

interface OnKeyPressedOptionsInterface {
  ctrl?: boolean;
}

export function onKeyPressed(key: string, fn: Function, options?: OnKeyPressedOptionsInterface) {
  return function (e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (options?.ctrl && e.key === key && e.ctrlKey) {
      return fn();
    }

    if (!options && e.key === key) {
      // Do something
      return;
    }
  };
}
