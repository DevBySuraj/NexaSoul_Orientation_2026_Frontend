/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
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
  return (
    <button
      className={cn(
        "rounded-xl font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-center cursor-pointer",
        // Sizes
        {
          'px-4 py-2.5 text-xs sm:text-sm': size === 'sm',
          'px-7 py-4 text-base sm:text-[1.025rem]': size === 'md',
          'px-9 py-4.5 text-lg sm:text-[1.125rem]': size === 'lg',
        },
        // Variants
        {
          'bg-indigo-600 text-white shadow-lg shadow-indigo-600/15 hover:bg-indigo-700 hover:scale-[1.02]':
            variant === 'primary',
          'bg-slate-50 border border-slate-200/80 text-slate-750 hover:bg-slate-100 hover:text-slate-950':
            variant === 'secondary',
          'bg-white/70 border border-slate-150 backdrop-blur-md text-slate-700 hover:bg-white hover:text-slate-900':
            variant === 'glass',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
