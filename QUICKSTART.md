# Quick Start Guide

Get started with Simple Toast in under 2 minutes!

## Installation

### via npm
```bash
npm install simple-toast
```

### via CDN
```html
<script src="https://unpkg.com/simple-toast/dist/simple-toast.umd.js"></script>
<!-- No CSS file needed! -->
```

## Basic Usage

### ES Modules
```javascript
import { toast } from 'simple-toast';
// Styles are injected automatically - no CSS import needed!

toast.success('Hello World!');
```

### UMD (Browser)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Simple Toast</title>
</head>
<body>
  <button onclick="showToast()">Click Me</button>
  
  <script src="path/to/simple-toast.umd.js"></script>
  <script>
    function showToast() {
      SimpleToast.toast.success('Button clicked!');
    }
  </script>
</body>
</html>
```

## Examples

### Show Different Types
```javascript
toast.success('Success message');
toast.error('Error message');
toast.info('Info message');
toast.warning('Warning message');
```

### Custom Duration
```javascript
toast.info('Quick message', { duration: 1000 }); // 1 second
toast.info('Long message', { duration: 10000 }); // 10 seconds
toast.info('Permanent', { duration: 0 }); // No auto-dismiss
```

### Different Positions
```javascript
toast.success('Top Right', { position: 'top-right' });
toast.info('Bottom Center', { position: 'bottom-center' });
toast.warning('Middle Left', { position: 'middle-left' });
```

### Dark Theme
```javascript
import { configure, toast } from 'simple-toast';

configure({ theme: 'dark' });
toast.success('Dark theme enabled!');
```

### Manual Dismissal
```javascript
// Dismiss specific toast
const id = toast.info('This is dismissible');
toast.dismiss(id);

// Dismiss all toasts
toast.dismissAll();
```

## Global Configuration

Set defaults for all toasts:

```javascript
import { configure } from 'simple-toast';

configure({
  position: 'top-right',
  duration: 3000,
  theme: 'light',
  dismissible: true,
  maxToasts: 10
});
```

## Key Features

✅ **Zero dependencies** - Pure vanilla JavaScript  
✅ **Tiny size** - Less than 3KB gzipped  
✅ **Framework agnostic** - Works with React, Vue, Angular, or vanilla JS  
✅ **TypeScript support** - Full type definitions included  
✅ **Accessible** - ARIA labels and keyboard support  
✅ **Clean DOM** - Container auto-removed when empty  
✅ **Themeable** - Light, dark, or custom themes  

## Next Steps

- Check out the [full demo](example/index.html)
- Read the [complete documentation](README.md)
- View [examples](example/)

## Need Help?

- Report bugs on [GitHub Issues](#)
- Read [contributing guidelines](CONTRIBUTING.md)
- Check [changelog](CHANGELOG.md) for updates
