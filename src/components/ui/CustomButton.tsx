
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isGlowing?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({
  variant = 'default',
  size = 'md',
  isGlowing = false,
  children,
  className,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      className={cn(
        "relative transition-all duration-300 font-medium overflow-hidden group",
        {
          "bg-gradient-purple-blue hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] border-0": variant === 'default',
          "bg-transparent border border-neon-purple/30 hover:border-neon-purple text-white": variant === 'outline',
          "bg-transparent hover:bg-dark-300/50 text-white": variant === 'ghost',
          "text-sm px-4 py-2": size === 'sm',
          "text-base px-6 py-3": size === 'md',
          "text-lg px-8 py-4": size === 'lg',
          "animate-glow": isGlowing,
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {variant === 'default' && (
        <span className="absolute inset-0 bg-gradient-purple-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      )}
    </Button>
  );
};

export default CustomButton;
