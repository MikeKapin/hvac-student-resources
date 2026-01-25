'use client';

import React, { createContext, useContext, ReactNode } from 'react';

export type SubscriptionMode = 'free';

interface SubscriptionContextType {
  mode: SubscriptionMode;
  setMode: (mode: SubscriptionMode) => void;
  hasAIAccess: boolean;
  messagesUsed: number;
  messageLimit: number;
  daysRemaining: number;
  isExpiringSoon: boolean;
  incrementMessageCount: () => void;
  resetMessageCount: () => void;
  activateStudentCode: (code: string) => boolean;
  isStudentMode: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

interface SubscriptionProviderProps {
  children: ReactNode;
}

export function SubscriptionProvider({ children }: SubscriptionProviderProps) {
  // Everything is free - no limits, no paywalls, no subscriptions
  // This is Mike Kapin's free educational resource
  const value = {
    mode: 'free' as SubscriptionMode,
    setMode: () => {}, // No-op since it's always free
    hasAIAccess: true, // Always have full AI access
    messagesUsed: 0,
    messageLimit: Infinity, // Unlimited messages
    daysRemaining: Infinity, // Never expires
    isExpiringSoon: false,
    incrementMessageCount: () => {}, // No-op - no counting needed
    resetMessageCount: () => {}, // No-op
    activateStudentCode: () => false, // No codes needed - it's free for everyone
    isStudentMode: false
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}
