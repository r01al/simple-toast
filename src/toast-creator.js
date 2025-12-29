import { getIcon } from './icons.js';

export function createToastElement(message, type, dismissible, className, id, onClose) {
  const toastEl = document.createElement('div');
  toastEl.className = 'r01st r01st-' + type + (className ? ' ' + className : '');
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('data-toast-id', id);

  const content = document.createElement('div');
  content.className = 'r01st-content';
  
  const icon = document.createElement('span');
  icon.className = 'r01st-icon';
  icon.innerHTML = getIcon(type);
  icon.setAttribute('aria-hidden', 'true');
  content.appendChild(icon);

  const messageEl = document.createElement('span');
  messageEl.className = 'r01st-message';
  messageEl.textContent = message;
  content.appendChild(messageEl);

  if (dismissible) {
    const layoutTable = document.createElement('table');
    layoutTable.className = 'r01st-table';
    const layoutRow = document.createElement('tr');

    const messageCell = document.createElement('td');
    messageCell.className = 'r01st-cell r01st-message-cell';
    messageCell.appendChild(content);

    const closeCell = document.createElement('td');
    closeCell.className = 'r01st-cell r01st-close-cell';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'r01st-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.onclick = onClose;
    closeCell.appendChild(closeBtn);

    layoutRow.appendChild(messageCell);
    layoutRow.appendChild(closeCell);
    layoutTable.appendChild(layoutRow);
    toastEl.appendChild(layoutTable);
  } else {
    toastEl.appendChild(content);
  }

  return toastEl;
}
