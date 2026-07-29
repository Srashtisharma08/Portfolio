import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-indigo-600",
        secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-indigo-600 underline-offset-4 hover:underline",
        neon: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/35 hover:scale-[1.02] active:scale-95",
        "neon-outline": "border-2 border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50 shadow-sm",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
