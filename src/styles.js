let stylesInjected = false;

export function injectStyles() {
  if (stylesInjected) return;
  
  const style = document.createElement('style');
  style.setAttribute('data-r01st', '');
  style.textContent = `
.r01st-container {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  padding: 16px;
}
.r01st-container[data-position="tl"] {
  top: 0;
  left: 0;
}

.r01st-container[data-position="tc"] {
  top: 0;
  left: 50%;
  margin-left: -210px;
}

.r01st-container[data-position="tr"] {
  top: 0;
  right: 0;
}
.r01st-container[data-position="ml"] {
  top: 50%;
  left: 0;
  margin-top: -50px;
}

.r01st-container[data-position="mc"] {
  top: 50%;
  left: 50%;
  margin-left: -210px;
  margin-top: -50px;
}

.r01st-container[data-position="mr"] {
  top: 50%;
  right: 0;
  margin-top: -50px;
}
.r01st-container[data-position="bl"] {
  bottom: 0;
  left: 0;
}

.r01st-container[data-position="bc"] {
  bottom: 0;
  left: 50%;
  margin-left: -210px;
}

.r01st-container[data-position="br"] {
  bottom: 0;
  right: 0;
}
.r01st {
  pointer-events: auto;
  position: relative;
  min-width: 280px;
  max-width: 420px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.3s ease, margin-top 0.3s ease;
  margin-top: -20px;
}
.r01st-show {
  opacity: 1;
  margin-top: 0;
}
.r01st-container[data-theme="l"] .r01st-success {
  background-color: #10b981;
}

.r01st-container[data-theme="l"] .r01st-error {
  background-color: #ef4444;
}

.r01st-container[data-theme="l"] .r01st-info {
  background-color: #3b82f6;
}

.r01st-container[data-theme="l"] .r01st-warning {
  background-color: #f59e0b;
}
.r01st-container[data-theme="d"] .r01st-success {
  background-color: #059669;
}

.r01st-container[data-theme="d"] .r01st-error {
  background-color: #dc2626;
}

.r01st-container[data-theme="d"] .r01st-info {
  background-color: #2563eb;
}

.r01st-container[data-theme="d"] .r01st-warning {
  background-color: #d97706;
}
.r01st-content {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  padding-right: 30px;
}
.r01st-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 12px;
}

.r01st-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.r01st-message {
  display: inline-block;
  vertical-align: middle;
  word-wrap: break-word;
  max-width: calc(100% - 32px);
}
.r01st-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 4px;
  opacity: 0.8;
}

.r01st-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.r01st-close:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}
.r01st-container[data-position^="b"] .r01st {
  margin-top: 0;
  margin-bottom: -20px;
}

.r01st-container[data-position^="b"] .r01st-show {
  margin-bottom: 16px;
}
@media (max-width: 480px) {
  .r01st-container {
    left: 0 !important;
    right: 0 !important;
    margin-left: 0 !important;
    padding: 8px;
  }

  .r01st {
    min-width: auto;
    max-width: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .r01st {
    transition: opacity 0.2s;
    margin-top: 0;
  }
}
@media print {
  .r01st-container {
    display: none;
  }
}
`;
  
  document.head.appendChild(style);
  stylesInjected = true;
}

export function removeStyles() {
  const style = document.querySelector('style[data-r01st]');
  if (style) {
    style.parentNode.removeChild(style);
    stylesInjected = false;
  }
}
