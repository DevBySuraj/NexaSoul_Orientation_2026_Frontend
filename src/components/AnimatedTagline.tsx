import React, { useState, useEffect } from 'react';

export interface TaglineWord {
  text: string;
  colorClass: string;
  glowColor: string; // e.g., 'rgba(37, 99, 235, 0.5)'
}

interface AnimatedTaglineProps {
  words?: TaglineWord[];
  typingSpeedMs?: number; // Speed per character when typing
  deletingSpeedMs?: number; // Speed per character when deleting
  className?: string;
}

const DEFAULT_WORDS: TaglineWord[] = [
  { text: 'Code.', colorClass: 'text-blue-600', glowColor: 'rgba(37, 99, 235, 0.5)' },
  { text: ' Connect.', colorClass: 'text-orange-500', glowColor: 'rgba(249, 115, 22, 0.5)' },
  { text: ' Conquer.', colorClass: 'text-emerald-600', glowColor: 'rgba(16, 185, 129, 0.6)' },
];

export const AnimatedTagline: React.FC<AnimatedTaglineProps> = ({
  words = DEFAULT_WORDS,
  typingSpeedMs = 55,
  deletingSpeedMs = 30,
  className = '',
}) => {
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeGlowWord, setActiveGlowWord] = useState<number | null>(null);
  const [shimmer, setShimmer] = useState(false);

  // Calculate cumulative character length
  const totalLength = words.reduce((acc, word) => acc + word.text.length, 0);

  useEffect(() => {
    let timer: any;

    // 1. If we are deleting
    if (isDeleting) {
      if (typedLength > 0) {
        timer = setTimeout(() => {
          setTypedLength((prev) => prev - 1);
        }, deletingSpeedMs);
      } else {
        // Entirely erased, pause 500ms then start typing again
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    } 
    // 2. If we are typing
    else {
      if (typedLength < totalLength) {
        // Calculate word boundaries to check if a word was completed
        let currentBound = 0;
        let boundaryIndex = -1;
        let wordIdx = -1;

        for (let i = 0; i < words.length; i++) {
          currentBound += words[i].text.length;
          if (typedLength === currentBound) {
            boundaryIndex = currentBound;
            wordIdx = i;
            break;
          }
        }

        // Check if we just completed a word
        if (boundaryIndex !== -1 && wordIdx < words.length - 1) {
          // Trigger glow for this completed word for 300ms
          setActiveGlowWord(wordIdx);
          const glowTimeout = setTimeout(() => {
            setActiveGlowWord(null);
          }, 300);

          // Pause 500ms at word boundary
          timer = setTimeout(() => {
            setTypedLength((prev) => prev + 1);
            clearTimeout(glowTimeout);
          }, 500);
        } else {
          // Regular typing character tick
          timer = setTimeout(() => {
            setTypedLength((prev) => prev + 1);
          }, typingSpeedMs);
        }
      } else {
        // Reached the end (entire sentence typed!)
        setActiveGlowWord(words.length - 1);
        const glowTimeout = setTimeout(() => {
          setActiveGlowWord(null);
        }, 300);

        // Trigger subtle shimmer effect across container once
        setShimmer(true);
        const shimmerTimeout = setTimeout(() => {
          setShimmer(false);
        }, 1500);

        // Keep full sentence visible with blinking cursor for 2.8 seconds, then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
          clearTimeout(glowTimeout);
          clearTimeout(shimmerTimeout);
        }, 2800);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [typedLength, isDeleting, words, typingSpeedMs, deletingSpeedMs, totalLength]);

  return (
    <div className={`relative text-xl sm:text-2xl md:text-3xl font-mono tracking-wider font-extrabold flex items-center flex-wrap select-none py-1 px-0.5 min-h-[3.2rem] ${className}`}>
      {/* Premium Shimmer overlay once text is fully typed */}
      {shimmer && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent pointer-events-none z-10 animate-shimmer"
        />
      )}

      {/* Render typed words */}
      {words.map((word, wordIdx) => {
        // Calculate cumulative length of previous words
        let prevWordsLength = 0;
        for (let i = 0; i < wordIdx; i++) {
          prevWordsLength += words[i].text.length;
        }

        const isGlowActive = activeGlowWord === wordIdx;
        
        // Determine typed slice of this word
        const relativeTypedLength = Math.max(0, Math.min(word.text.length, typedLength - prevWordsLength));

        if (relativeTypedLength === 0) {
          return null;
        }

        const visibleText = word.text.slice(0, relativeTypedLength);

        return (
          <span
            key={wordIdx}
            style={{
              textShadow: isGlowActive
                ? `0 0 16px ${word.glowColor}, 0 0 4px ${word.glowColor}`
                : 'none',
              transition: 'text-shadow 0.3s ease-out'
            }}
            className={`${word.colorClass} relative inline-flex items-center transition-colors duration-300`}
          >
            {visibleText.replace(/ /g, '\u00A0')}
            
            {/* Blinking cursor at the end of the typed portion */}
            {typedLength > prevWordsLength && typedLength <= prevWordsLength + word.text.length && (
              <span className="w-[3px] h-[1.15em] bg-indigo-600 ml-0.5 inline-block shrink-0 align-middle shadow-[0_0_8px_rgba(79,70,229,0.65)] animate-[blink_0.75s_step-end_infinite]" />
            )}
          </span>
        );
      })}

      {/* If nothing is typed yet, show cursor at start */}
      {typedLength === 0 && (
        <span className="w-[3px] h-[1.15em] bg-indigo-600 inline-block shrink-0 align-middle shadow-[0_0_8px_rgba(79,70,229,0.65)] animate-[blink_0.75s_step-end_infinite]" />
      )}

      <style>{`
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer-move 1.4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};
