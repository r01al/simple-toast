import { getConfig } from './config.js';
import { getContainer, cleanupContainer } from './container.js';
import { createToastElement } from './toast-creator.js';
import { showToast, hideToast } from './animations.js';

let toastCounter = 0;
const activeToasts = new Map();

export function createToast(message, options = {}) {
  const config = { ...getConfig(), ...options };
  const { position, duration, dismissible, theme, className, type = 'info' } = config;

  const id = ++toastCounter;

  if (activeToasts.size >= getConfig().maxToasts) {
    const firstToast = activeToasts.keys().next().value;
    dismissToast(firstToast);
  }

  const container = getContainer(position, theme);

  const handleClose = () => dismissToast(id);

  const toastEl = createToastElement(message, type, dismissible, className, id, handleClose);

  container.appendChild(toastEl);

  showToast(toastEl);

  const toastData = {
    element: toastEl,
    timeoutId: null
  };

  if (duration > 0) {
    toastData.timeoutId = setTimeout(() => dismissToast(id), duration);
  }

  activeToasts.set(id, toastData);

  return id;
}

export function dismissToast(id) {
  const toastData = activeToasts.get(id);
  if (!toastData) return;

  const { element, timeoutId } = toastData;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  activeToasts.delete(id);

  hideToast(element, () => {
    cleanupContainer(activeToasts.size);
  });
}

export function dismissAllToasts() {
  const ids = Array.from(activeToasts.keys());
  ids.forEach(id => dismissToast(id));
}
