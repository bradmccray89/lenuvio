'use client';

import React from 'react';
import { NavItem } from '@/app/types/navigation';
import { NavLink } from './NavLink';
import { cn } from '@/app/lib/utils';

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fade-in'
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 mobile-menu backdrop-blur-custom border-l border-theme z-50 md:hidden',
          'transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0 animate-slide-in' : 'translate-x-full'
        )}>
        <div className='flex flex-col p-6 pt-20'>
          <div className='flex justify-between items-center mb-8'>
            <span className='text-2xl font-bold gradient-text'>Lenuvio</span>
            <button
              onClick={onClose}
              className='text-theme-secondary hover:text-theme-primary p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded'
              aria-label='Close menu'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <nav className='flex flex-col space-y-6' role='navigation'>
            {items.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                onClick={onClose}
                className='text-lg py-2'>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
