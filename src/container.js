import { injectStyles } from './styles.js';

let container = null;

export function getContainer(position, theme) {
  injectStyles();
  
  if (container && (container.getAttribute('data-position') !== position || container.getAttribute('data-theme') !== theme)) {
    container.parentNode.removeChild(container);
    container = null;
  }

  if (!container) {
    container = document.createElement('div');
    container.className = 'r01st-container';
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Notifications');
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('data-position', position);
    container.setAttribute('data-theme', theme);
    document.body.appendChild(container);
  }

  return container;
}

export function cleanupContainer(activeCount) {
  if (container && activeCount === 0) {
    container.parentNode.removeChild(container);
    container = null;
  }
}

export function getContainerRef() {
  return container;
}
