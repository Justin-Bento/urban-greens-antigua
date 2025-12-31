import { twMerge } from "tailwind-merge";

export const shared_styles = {
  btn_primary: twMerge(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all hover:underline",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "text-green-50 border bg-green-700 shadow-xs hover:bg-green-600 hover:text-gray-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    "h-8 p-5.5 has-[>svg]:px-3"
  ),
  btn_grayscale: twMerge(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all hover:underline",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "text-gray-50 border bg-gray-800 shadow-xs hover:bg-gray-600 hover:text-gray-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    "h-8 p-5.5 has-[>svg]:px-3"
  ),
};
