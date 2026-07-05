/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { cn } from '../../lib/utils';
import { SectionBadge, SectionBadgeAccent } from './SectionBadge';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Lightbulb, 
  BookOpen, 
  Code2, 
  Users, 
  Trophy, 
  HelpCircle 
} from 'lucide-react';

interface SectionHeadingProps {
  badge: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

const getBadgeConfig = (badgeText: string): { icon: any; accentColor: SectionBadgeAccent } => {
  const normalized = badgeText.toLowerCase();
  if (normalized.includes('question') || normalized.includes('faq')) {
    return { icon: HelpCircle, accentColor: 'indigo' };
  }
  if (normalized.includes('speaker') || normalized.includes('mentor') || normalized.includes('faculty')) {
    return { icon: Users, accentColor: 'cyan' };
  }
  if (normalized.includes('project') || normalized.includes('featured')) {
    return { icon: Code2, accentColor: 'cyan' };
  }
  if (normalized.includes('roadmap') || normalized.includes('architecture') || normalized.includes('learn')) {
    return { icon: BookOpen, accentColor: 'green' };
  }
  if (normalized.includes('outcome') || normalized.includes('career') || normalized.includes('milestone')) {
    return { icon: Trophy, accentColor: 'orange' };
  }
  if (normalized.includes('journey') || normalized.includes('coordinate') || normalized.includes('track')) {
    return { icon: Compass, accentColor: 'blue' };
  }
  if (normalized.includes('why') || normalized.includes('advantage') || normalized.includes('join')) {
    return { icon: Lightbulb, accentColor: 'orange' };
  }
  if (normalized.includes('mission') || normalized.includes('purpose') || normalized.includes('dna') || normalized.includes('foundation')) {
    return { icon: Target, accentColor: 'purple' };
  }
  return { icon: Sparkles, accentColor: 'indigo' };
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className
}) => {
  const { icon, accentColor } = getBadgeConfig(badge);

  return (
    <div
      className={cn(
        "max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 space-y-5",
        {
          'text-center': align === 'center',
          'text-left mx-0': align === 'left',
        },
        className
      )}
    >
      <div className={cn("flex", { 'justify-center': align === 'center', 'justify-start': align === 'left' })}>
        <SectionBadge title={badge} icon={icon} accentColor={accentColor} />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-sora font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-650 text-base sm:text-lg leading-relaxed font-sans font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

