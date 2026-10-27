import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names while resolving Tailwind conflicts.
 *
 * Example:
 * cn("px-4", isActive && "bg-red-500", "px-8")
 * => "bg-red-500 px-8"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}