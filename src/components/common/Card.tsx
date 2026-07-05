/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'accent';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'glass',
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 relative overflow-hidden",
        {
          // Glassmorphism premium light layout
          'border-white/60 bg-white/45 backdrop-blur-xl shadow-xl shadow-slate-200/5': variant === 'glass',
          // Solid light layout
          'border-slate-150 bg-white/75 shadow-lg shadow-slate-100/50': variant === 'solid',
          // Glow or Accent border styling
          'border-indigo-100/50 bg-indigo-50/20 shadow-lg shadow-indigo-100/10': variant === 'accent',
        },
        {
          'hover:scale-[1.02] hover:border-indigo-300/40 hover:shadow-2xl hover:shadow-indigo-500/5 hover:bg-white/70': hoverEffect,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
