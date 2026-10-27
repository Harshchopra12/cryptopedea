import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { ButtonProps } from "./button.types";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-[var(--cp-radius-lg)]",
    "font-semibold",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--cp-focus-ring)]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
    "cursor-pointer",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--cp-button-primary)]",
          "text-[var(--cp-button-primary-text)]",
          "hover:bg-[var(--cp-button-primary-hover)]",
        ].join(" "),

        secondary: [
          "bg-[var(--cp-button-secondary)]",
          "text-[var(--cp-button-secondary-text)]",
          "hover:bg-[var(--cp-button-secondary-hover)]",
        ].join(" "),

        outline: [
          "border",
          "border-[var(--cp-border)]",
          "bg-transparent",
          "text-[var(--cp-text-primary)]",
          "hover:bg-[var(--cp-surface)]",
        ].join(" "),

        ghost: [
          "bg-transparent",
          "text-[var(--cp-text-primary)]",
          "hover:bg-[var(--cp-surface)]",
        ].join(" "),

        link: [
          "bg-transparent",
          "p-0",
          "text-[var(--cp-color-accent)]",
          "hover:underline",
        ].join(" "),
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6 text-base",

        lg: "h-14 px-8 text-lg",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {leftIcon && (
          <span className="mr-2 flex items-center">
            {leftIcon}
          </span>
        )}

        {loading ? "Loading..." : children}

        {rightIcon && (
          <span className="ml-2 flex items-center">
            {rightIcon}
          </span>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;