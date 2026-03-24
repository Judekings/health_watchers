'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';

export interface SlideOverProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  side?: 'left' | 'right';
}

const sideMap = {
  right: 'right-0 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
  left:  'left-0  data-[state=open]:slide-in-from-left  data-[state=closed]:slide-out-to-left',
};

export function SlideOver({ open, onClose, title, description, children, className, side = 'right' }: SlideOverProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content
          className={[
            'fixed inset-y-0 z-50 flex w-full max-w-md flex-col bg-neutral-0 shadow-lg focus:outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out duration-300',
            sideMap[side],
            className ?? '',
          ].join(' ')}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-neutral-200 px-6 py-4">
            <div>
              {title && (
                <Dialog.Title className="text-lg font-semibold text-neutral-800">{title}</Dialog.Title>
              )}
              {description && (
                <Dialog.Description className="mt-1 text-sm text-neutral-500">{description}</Dialog.Description>
              )}
            </div>
            <Dialog.Close
              className="ml-4 rounded-md p-1 text-neutral-400 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Dialog.Close>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
