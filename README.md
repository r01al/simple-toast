# Simple Toast

A lightweight, framework-agnostic toast notification library with zero dependencies. Perfect for displaying non-blocking notifications that give users quick feedback without interrupting their flow.

## Features

- 🚀 **Zero dependencies** - Pure vanilla JavaScript
- 💎 **No CSS files** - Styles injected automatically via JavaScript
- 🎨 **Multiple notification types** - success, error, info, warning
- ⏱️ **Auto-dismiss** - Configurable timers
- 📍 **Flexible positioning** - 9 position options
- 📚 **Stacking behavior** - Multiple toasts stack nicely
- 🌓 **Theming** - Light, dark themes built-in
- ✨ **Smooth animations** - Opacity and margin transitions
- ♿ **Accessibility** - ARIA labels and keyboard support
- 🧹 **Clean DOM** - Container and styles removed when no toasts visible
- 📦 **Tiny footprint** - ~13KB unminified (includes all styles)

## Installation

```bash
npm install simple-toast
```

Or use via CDN:

```html
<script src="https://unpkg.com/simple-toast/dist/simple-toast.umd.js"></script>
<!-- That's it! No CSS file needed - styles are injected automatically! -->
```

## Usage

### Basic Example

**ES Modules:**
```javascript
import { toast } from 'simple-toast';
// No CSS import needed - styles are auto-injected on first use!

// Show different toast types
toast.success('Operation completed successfully!');
toast.error('Something went wrong!');
toast.info('Here is some information.');
toast.warning('Please be careful!');
```

**Browser (UMD):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Toast Demo</title>
</head>
<body>
  <button onclick="showToast()">Show Toast</button>
  
  <script src="simple-toast.umd.js"></script>
  <script>
    function showToast() {
      SimpleToast.toast.success('Hello World!');
    }
  </script>
</body>
</html>
```

**CommonJS:**
```javascript
const { toast } = require('simple-toast');
toast.info('This works in Node too!');
```

### Advanced Configuration

```javascript
import { toast, configure } from 'simple-toast';

// Global configuration
configure({
  position: 'top-right',
  duration: 3000,
  theme: 'dark',
  maxToasts: 5
});

// Per-toast configuration
toast.success('Custom toast', {
  duration: 5000,
  position: 'bottom-center',
  dismissible: true
});
```

## API

### `toast(message, options)`

Display a toast notification.

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | `'info'` | Type of toast: `'success'`, `'error'`, `'info'`, `'warning'` |
| `duration` | number | `3000` | Auto-dismiss duration in ms (0 = no auto-dismiss) |
| `position` | string | `'top-right'` | Position: `'top-left'`, `'top-center'`, `'top-right'`, `'bottom-left'`, `'bottom-center'`, `'bottom-right'`, `'middle-left'`, `'middle-center'`, `'middle-right'` |
| `dismissible` | boolean | `true` | Show close button |
| `theme` | string | `'light'` | Theme: `'light'`, `'dark'`, `'custom'` |
| `className` | string | `''` | Custom CSS class |

### Shorthand Methods

```javascript
toast.success(message, options)
toast.error(message, options)
toast.info(message, options)
toast.warning(message, options)
```

### Configuration

```javascript
configure(options) // Set global defaults
```

### Manual Dismissal

```javascript
const toastId = toast.info('This is a toast');
toast.dismiss(toastId); // Dismiss specific toast
toast.dismissAll(); // Dismiss all toasts
```

## Theming

### Using Built-in Themes

```javascript
// Light theme (default)
configure({ theme: 'light' });

// Dark theme
configure({ theme: 'dark' });
```

### Theme Colors

**Light Theme:**
- Success: `#10b981` (green)
- Error: `#ef4444` (red)
- Info: `#3b82f6` (blue)
- Warning: `#f59e0b` (orange)

**Dark Theme:**
- Success: `#059669` (darker green)
- Error: `#dc2626` (darker red)
- Info: `#2563eb` (darker blue)
- Warning: `#d97706` (darker orange)

### Custom Styling

Since styles are injected via JavaScript, you can override them with your own CSS:

```css
/* Add after library loads */
.simple-toast-success {
  background-color: #your-color !important;
}

.simple-toast {
  border-radius: 16px !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
}
```

Or modify the injected styles programmatically before first use.

## Architecture

Simple Toast uses a modular architecture with separate concerns:

- **`index.js`** - Main API exports
- **`config.js`** - Configuration management
- **`container.js`** - DOM container lifecycle
- **`toast-manager.js`** - Toast state and lifecycle management
- **`toast-creator.js`** - DOM element creation
- **`animations.js`** - Show/hide animations
- **`icons.js`** - SVG icon definitions
- **`styles.js`** - CSS injection (auto-injected on first use)

Total: ~539 lines of JavaScript (includes all CSS as string)

## How It Works

1. Import the library: `import { toast } from 'simple-toast'`
2. Call `toast.success('Message')`
3. On first toast, styles are injected into `<head>` via `<style>` tag
4. Container div is added to `<body>`
5. Toast element is created and animated in
6. After duration, toast animates out and is removed
7. When no toasts remain, container is removed from DOM
8. **Zero DOM footprint when inactive!**

## Browser Support

Works in all browsers with ES6+ support:
- Chrome 49+
- Firefox 31+
- Safari 10+
- Edge 15+
- IE 9+ (with transpilation)

No CSS custom properties required - styles use simple selectors and values.

## Build Formats

- **CommonJS** (`simple-toast.cjs.js`) - For Node.js and bundlers
- **ES Module** (`simple-toast.esm.js`) - For modern bundlers and browsers
- **UMD** (`simple-toast.umd.js`) - For direct browser usage via `<script>` tag

All formats include styles bundled - no separate CSS file needed!

## TypeScript Support

Full TypeScript definitions included:

```typescript
import { toast, configure, ToastOptions } from 'simple-toast';

const options: ToastOptions = {
  type: 'success',
  duration: 5000,
  position: 'top-center',
  dismissible: true,
  theme: 'dark'
};

toast('Hello TypeScript!', options);
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## License

MIT
