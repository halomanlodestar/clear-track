/** @format */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedLoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const AnimatedLoadingButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedLoadingButtonProps
>(
  (
    { className, variant, size, loading = false, disabled, children, ...props },
    ref,
  ) => {
    return (
      <Button
        className={cn("relative", className)}
        variant={variant}
        size={size}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: loading ? 0 : 1,
            y: loading ? -20 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: loading ? 1 : 0,
            y: loading ? 0 : 20,
          }}
          transition={{ duration: 0.2 }}
        >
          <Loader2 className="w-4 h-4 animate-spin" />
        </motion.span>
      </Button>
    );
  },
);

AnimatedLoadingButton.displayName = "AnimatedLoadingButton";

export { AnimatedLoadingButton };
