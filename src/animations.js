export function showToast(element) {
  requestAnimationFrame(() => {
    element.className = element.className + ' r01st-show';
  });
}

export function hideToast(element, callback) {
  element.className = element.className.replace(' r01st-show', '');

  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    if (callback) callback();
  }, 300);
}
