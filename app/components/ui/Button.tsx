'use client';

import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses =
    'font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 active:scale-95';

  const variants = {
    primary:
      'gradient-bg text-white hover:shadow-lg hover:shadow-cyan-400/25 hover:-translate-y-0.5',
    secondary:
      'border border-theme text-theme-secondary hover:border-cyan-400 hover:text-cyan-400',
    ghost: 'text-theme-secondary hover:text-cyan-400',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}>
      {children}
    </button>
  );
};
