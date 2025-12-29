// Import the library
import { toast, configure } from 'simple-toast';
// No CSS import needed - styles are injected automatically!

// Configure global settings (optional)
configure({
  position: 'tr',
  duration: 3000,
  theme: 'l',
  maxToasts: 5
});

// Basic usage - shorthand methods
toast.success('Profile updated successfully!');
toast.error('Failed to save changes');
toast.info('You have 3 new messages');
toast.warning('Your session will expire in 5 minutes');

// With custom options
toast.success('File uploaded!', {
  duration: 5000,
  position: 'bc'
});

// No auto-dismiss
const toastId = toast.info('This will stay until dismissed', {
  duration: 0
});

// Manually dismiss
setTimeout(() => {
  toast.dismiss(toastId);
}, 10000);

// Dismiss all toasts
toast.dismissAll();

// Different themes
configure({ theme: 'd' });
toast.success('Dark theme enabled!');

// Custom positioning
toast.info('Centered message', {
  position: 'mc',
  duration: 2000
});
