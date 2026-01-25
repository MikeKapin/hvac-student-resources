'use client';

import React from 'react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onActivateStudent: () => void;
}

/**
 * PricingModal - Disabled for Mike Kapin's free version
 * Everything is free - no pricing tiers or subscriptions needed
 */
const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, onActivateStudent }) => {
  // Everything is free - no modal needed
  return null;
};

export default PricingModal;
