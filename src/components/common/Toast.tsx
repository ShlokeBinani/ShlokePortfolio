import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastData {
  id: number;
  message: string;
  type?: 'success' | 'info';
}

type ToastListener = (toast: ToastData | null) => void;
const listeners = new Set<ToastListener>();

let toastId = 0;
let currentTimer: ReturnType<typeof setTimeout> | null = null;

export function showToast(message: string, type: 'success' | 'info' = 'success') {
  if (currentTimer) clearTimeout(currentTimer);
  const data: ToastData = { id: ++toastId, message, type };
  listeners.forEach((listener) => listener(data));
  currentTimer = setTimeout(() => {
    listeners.forEach((listener) => listener(null));
  }, 2800);
}

export const ToastContainer: React.FC = () => {
  const [currentToast, setCurrentToast] = useState<ToastData | null>(null);

  useEffect(() => {
    const handler: ToastListener = (t) => setCurrentToast(t);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none select-none">
      <AnimatePresence>
        {currentToast && (
          <motion.div
            key={currentToast.id}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#121217]/95 backdrop-blur-md border border-white/15 text-[#F5F5F7] text-xs sm:text-sm font-mono shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
          >
            {currentToast.type === 'info' ? (
              <Info className="w-4 h-4 text-[#D7E2EA] shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <span>{currentToast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
