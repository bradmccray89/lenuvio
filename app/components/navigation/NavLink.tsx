'use client';

import { cn } from '@/app/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive = false,
  onClick,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'relative text-theme-secondary hover:text-cyan-400 transition-colors duration-300',
        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
        'after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500',
        'after:transition-all after:duration-300',
        'hover:after:w-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50',
        isActive && 'text-cyan-400 after:w-full',
        className
      )}>
      {children}
    </a>
  );
};
