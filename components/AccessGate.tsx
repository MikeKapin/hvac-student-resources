'use client';

import { useState, FormEvent } from 'react';
import { validateAccessCode, grantAccess } from '@/lib/accessCodes';

interface AccessGateProps {
  onAccessGranted: () => void;
}

export default function AccessGate({ onAccessGranted }: AccessGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validate the code
    if (validateAccessCode(code)) {
      grantAccess(code);
      onAccessGranted();
    } else {
      setError('Invalid student or employee number. Please check your ID and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div data-theme="dark" className="min-h-screen bg-gradient-to-br from-brand-dark-bg via-brand-dark-secondary to-brand-dark-bg flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-dark-text mb-2">
            HVAC Student Resources
          </h1>
          <p className="text-brand-dark-text-secondary">
            Professional educational resources for Gas Technician students
          </p>
        </div>

        {/* Access Form */}
        <div className="bg-brand-dark-secondary border border-brand-dark-border rounded-lg p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mike-orange/10 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-mike-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-brand-dark-text mb-2">
              Student Access Required
            </h2>
            <p className="text-sm text-brand-dark-text-secondary">
              Enter your student or employee number to access the resources
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="accessCode"
                className="block text-sm font-medium text-brand-dark-text mb-2"
              >
                Student / Employee Number
              </label>
              <input
                type="text"
                id="accessCode"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your ID number"
                className="w-full px-4 py-3 bg-brand-dark-bg border border-brand-dark-border rounded-lg text-brand-dark-text placeholder-brand-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-mike-orange focus:border-transparent"
                disabled={isSubmitting}
                autoComplete="off"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !code.trim()}
              className="w-full bg-mike-orange hover:bg-mike-orange/90 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Verifying...' : 'Access Resources'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-brand-dark-border">
            <p className="text-xs text-brand-dark-text-secondary text-center">
              Access is granted for 7 days. Your ID is securely stored locally on your device.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-brand-dark-text-secondary">
            Created by <span className="text-mike-orange font-semibold">Mike Kapin</span>
          </p>
          <p className="text-xs text-brand-dark-text-secondary mt-1">
            HVAC Educator | Professional Educational Resources
          </p>
        </div>
      </div>
    </div>
  );
}