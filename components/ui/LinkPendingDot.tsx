'use client';

import { useLinkStatus } from 'next/link';

export default function LinkPendingDot() {
  const { pending } = useLinkStatus();
  return (
    <span
      aria-hidden
      className={`link-pending-dot${pending ? ' is-pending' : ''}`}
    />
  );
}
