import { configure } from './config.js';
import { createToast, dismissToast, dismissAllToasts } from './toast-manager.js';

/**
 * Display a toast notification
 * @param {string} message - The message to display
 * @param {Object} options - Toast options
 * @returns {number} Toast ID
 */
export function toast(message, options = {}) {
  return createToast(message, options);
}

// Shorthand methods
toast.success = (message, options = {}) => toast(message, { ...options, type: 'success' });
toast.error = (message, options = {}) => toast(message, { ...options, type: 'error' });
toast.info = (message, options = {}) => toast(message, { ...options, type: 'info' });
toast.warning = (message, options = {}) => toast(message, { ...options, type: 'warning' });

// Export dismiss methods
toast.dismiss = dismissToast;
toast.dismissAll = dismissAllToasts;

// Export configure
export { configure };

// Default export
export default toast;
