import React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, asChild, size = "md", variant = "default", className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const sizeClasses = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const variantClasses = {
      default: "bg-green-600 text-white hover:bg-green-700",
      outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
    };

    const combinedClassName = `${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`.trim();

    return (
      <Comp ref={ref} className={combinedClassName} {...props}>
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

