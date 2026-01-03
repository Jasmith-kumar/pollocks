import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-pollocks-blue to-pollocks-blue-dark text-white 
      shadow-[0_4px_15px_rgba(110,200,240,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] 
      hover:shadow-[0_6px_25px_rgba(110,200,240,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] 
      hover:scale-[1.02] active:scale-[0.98]
      border-transparent
    `,
    secondary: `
      bg-gradient-to-r from-pollocks-navy to-[#1a3a5c] text-white 
      shadow-[0_4px_15px_rgba(15,39,68,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] 
      hover:shadow-[0_6px_25px_rgba(15,39,68,0.4)] 
      hover:scale-[1.02] active:scale-[0.98]
      border-transparent
    `,
    outline: `
      border-2 border-pollocks-black/20 text-pollocks-black bg-white/50 backdrop-blur-sm
      hover:bg-pollocks-black hover:text-white hover:border-pollocks-black
      shadow-sm hover:shadow-md
    `,
    ghost: `
      bg-transparent text-pollocks-black hover:bg-pollocks-blue/10 
      border-transparent
    `,
    white: `
      bg-white/90 backdrop-blur-sm text-pollocks-black 
      shadow-[0_4px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] 
      hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,0.15)]
      hover:scale-[1.02] active:scale-[0.98]
      border border-white/50
    `,
    glass: `
      bg-white/20 backdrop-blur-xl text-white border border-white/30
      shadow-[0_4px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]
      hover:bg-white/30 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
  };

  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 px-4 py-1 text-sm",
    lg: "h-14 px-8 py-3 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pollocks-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
