'use client';

import React from 'react';

interface ActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ActivationModal - Disabled for Mike Kapin's free version
 * No activation codes needed - everything is free for everyone
 */
const ActivationModal: React.FC<ActivationModalProps> = ({ isOpen, onClose }) => {
  // Everything is free - no activation needed
  return null;
};

export default ActivationModal;
