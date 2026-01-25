'use client';

import { useState, useEffect } from 'react';
import { checkAccessValidity } from '@/lib/accessCodes';
import AccessGate from './AccessGate';

interface AccessWrapperProps {
  children: React.ReactNode;
}

export default function AccessWrapper({ children }: AccessWrapperProps) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has valid access
    const isValid = checkAccessValidity();
    setHasAccess(isValid);
    setIsChecking(false);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="min-h-screen bg-claude-dark-bg flex items-center justify-center">
        <div className="text-claude-dark-text-secondary">Loading...</div>
      </div>
    );
  }

  // Show access gate if no valid access
  if (!hasAccess) {
    return <AccessGate onAccessGranted={handleAccessGranted} />;
  }

  // Show content if access is granted
  return <>{children}</>;
}
