"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type PreviewItem = { src: string; alt: string };

type HoverPreviewContextValue = {
  activeIndex: number;
  enter: (index: number) => void;
  leave: () => void;
};

const HoverPreviewContext = createContext<HoverPreviewContextValue>({
  activeIndex: -1,
  enter: () => {},
  leave: () => {},
});

/**
 * Editorial hover preview: as the cursor moves across list rows, a
 * floating photograph follows it — the image gliding between entries.
 * Pointer-only (hidden on touch), honors prefers-reduced-motion.
 */
export function HoverImagePreview({
  items,
  children,
  className,
}: {
  items: PreviewItem[];
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.6 });
  const y = useSpring(my, { stiffness: 140, damping: 22, mass: 0.6 });
  const frame = useRef<HTMLDivElement>(null);

  const enter = useCallback((index: number) => {
    setActiveIndex(index);
    setVisible(true);
  }, []);

  const leave = useCallback(() => {
    setVisible(false);
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = frame.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    },
    [mx, my]
  );

  return (
    <HoverPreviewContext.Provider value={{ activeIndex, enter, leave }}>
      <div
        ref={frame}
        onMouseMove={handleMove}
        onMouseLeave={leave}
        className={cn("relative", className)}
      >
        {children}

        {/* Floating preview — pointer devices only */}
        <AnimatePresence>
          {visible && activeIndex >= 0 && items[activeIndex] && !reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute z-30 hidden lg:block"
              style={{ x, y, top: 0, left: 0 }}
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="relative h-[280px] w-[210px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_30px_80px_rgba(24,23,19,0.35)]"
                initial={false}
                animate={{ rotate: activeIndex % 2 === 0 ? -2 : 2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={activeIndex}
                    src={items[activeIndex].src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </HoverPreviewContext.Provider>
  );
}

/** Row that activates the floating preview while hovered. */
export function HoverPreviewRow({
  index,
  children,
  className,
}: {
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  const { activeIndex, enter, leave } = useContext(HoverPreviewContext);
  const active = activeIndex === index;

  return (
    <div
      onMouseEnter={() => enter(index)}
      onFocus={() => enter(index)}
      onBlur={leave}
      className={cn(
        "group relative cursor-pointer transition-colors duration-500",
        className
      )}
      data-active={active || undefined}
    >
      {children}
    </div>
  );
}
