import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, ...props }, ref) => (
    <input type={type} ref={ref} {...props} />
  ),
);

Input.displayName = "Input";

export { Input };

