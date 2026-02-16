/**
 * Valid student and employee access codes
 * Mike Kapin HVAC Student Resources
 */

export const VALID_ACCESS_CODES = [
  // Admin Access Only
  '0436277', // Mike Kapin
  '436277',  // Mike Kapin (without leading zero)
];

/**
 * Validate an access code
 */
export function validateAccessCode(code: string): boolean {
  const trimmedCode = code.trim();
  return VALID_ACCESS_CODES.includes(trimmedCode);
}

/**
 * Check if access is still valid (within 7 days)
 */
export function checkAccessValidity(): boolean {
  if (typeof window === 'undefined') return false;

  const accessData = localStorage.getItem('hvac_access');
  if (!accessData) return false;

  try {
    const { code, timestamp } = JSON.parse(accessData);
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    if (now - timestamp > sevenDaysInMs) {
      // Access expired
      localStorage.removeItem('hvac_access');
      return false;
    }

    // Verify the code is still valid
    return validateAccessCode(code);
  } catch (error) {
    localStorage.removeItem('hvac_access');
    return false;
  }
}

/**
 * Grant access and store in localStorage
 */
export function grantAccess(code: string): void {
  if (typeof window === 'undefined') return;

  const accessData = {
    code: code.trim(),
    timestamp: Date.now()
  };

  localStorage.setItem('hvac_access', JSON.stringify(accessData));
}

/**
 * Revoke access (logout)
 */
export function revokeAccess(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('hvac_access');
}
