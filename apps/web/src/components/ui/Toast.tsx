'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
  duration?: number;
}

export function Toast({ message, type = 'info', onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (!onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-neutral-800',
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white shadow-lg ${colors[type]}`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className="ml-2 opacity-70 hover:opacity-100 focus:outline-none"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export function Toaster() {
  return null;
}

export const toast = {
  success: (message: string) => console.log('[toast:success]', message),
  error: (message: string) => console.error('[toast:error]', message),
};
