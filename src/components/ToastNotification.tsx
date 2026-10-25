import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
  duration?: number;
}

export const ToastNotification: React.FC<ToastProps> = ({
  message,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-cyan-500/40 text-slate-100 shadow-[0_0_25px_rgba(0,242,254,0.25)]">
        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
        <span className="text-xs sm:text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors ml-2"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
