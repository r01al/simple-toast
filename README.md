# @r01al/simple-toast

Lightweight, framework-agnostic toast notifications with zero dependencies.

![npm](https://img.shields.io/npm/v/@r01al/simple-toast)
![bundle size](https://img.shields.io/bundlephobia/min/@r01al/simple-toast)
![license](https://img.shields.io/npm/l/@r01al/simple-toast)

## Benefits (why you'll like it) 😍
- ⚡ **Tiny & fast**: no dependencies, minimal runtime overhead.
- 🧩 **Framework-agnostic**: use with vanilla JS, React, Vue, Svelte, or anything.
- 🧼 **Zero setup CSS**: styles are injected automatically.
- 🎛️ **Flexible config**: global defaults + per-toast overrides.
- ♿ **Accessible by default**: ARIA roles and polite announcements included.

## Install 📦

```bash
npm install @r01al/simple-toast
```

## Quick start 🚀

```js
import toast from '@r01al/simple-toast';

toast('Hello there!');
toast.success('Saved successfully');
toast.error('Something went wrong');
```

## Examples 🧪

Run the demo pages locally:

```bash
npm run build
```

- Full demo page: open `example/index.html` in your browser.
- Minimal demo page: open `example/minimal.html` in your browser.
- Scripted usage sample: see `example/usage.js`.

## Usage (detailed) 🧭

### 1) Import styles (you don’t have to)
`simple-toast` injects styles automatically the first time you show a toast.

### 2) Show a toast
```js
import toast from '@r01al/simple-toast';

toast('I am a basic toast');
```

### 3) Use a type helper
```js
toast.success('Payment received');
toast.info('New message');
toast.warning('Storage almost full');
toast.error('Upload failed');
```

### 4) Customize per-toast
```js
toast('Custom toast', {
  type: 'success',
  duration: 5000,
  position: 'tr',
  dismissible: true,
  theme: 'l',
  className: 'my-toast'
});
```

### 5) Configure global defaults
```js
import { configure } from '@r01al/simple-toast';

configure({
  position: 'bc',
  duration: 4000,
  theme: 'l',
  dismissible: true,
  maxToasts: 6
});
```

### 6) Dismiss toasts
```js
const id = toast('I will be removed');

// Later...
toast.dismiss(id);

toast.dismissAll();
```

## API Reference 📚

### `toast(message, options?)`
- **message**: `string`
- **options**: `ToastOptions`
- **returns**: `number` (toast id)

### `toast.success(message, options?)`
### `toast.error(message, options?)`
### `toast.info(message, options?)`
### `toast.warning(message, options?)`
Same as `toast()` but forces the `type`.

### `toast.dismiss(id)`
Dismiss a specific toast by id.

### `toast.dismissAll()`
Dismiss all active toasts.

### `configure(config)`
Set global defaults for all future toasts.

## Options 🔧

### `ToastOptions`
| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'success' | 'error' | 'info' | 'warning'` | `'info'` | Visual style + icon. |
| `duration` | `number` | `3000` | Auto-dismiss after N ms. Use `0` to disable. |
| `position` | `'tl' | 'tc' | 'tr' | 'ml' | 'mc' | 'mr' | 'bl' | 'bc' | 'br'` | `'bc'` | Screen position (see map below). |
| `dismissible` | `boolean` | `true` | Show a close button. |
| `theme` | `'l' | 'd' | string` | `'l'` | `l` = light, `d` = dark, or a custom theme key. |
| `className` | `string` | `undefined` | Extra class added to the toast element. |

Note: built-in styles use the short position codes and the `l`/`d` theme keys shown above.

### `ToastConfig`
Includes all `ToastOptions`, plus:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `maxToasts` | `number` | `10` | Maximum toasts shown at once. Oldest is dismissed first. |

## Position map 🗺️
Short codes map to screen locations:

- `tl` = top-left
- `tc` = top-center
- `tr` = top-right
- `ml` = middle-left
- `mc` = middle-center
- `mr` = middle-right
- `bl` = bottom-left
- `bc` = bottom-center
- `br` = bottom-right

## Themes 🎨
Built-in themes are `l` (light) and `d` (dark). To create your own theme:

```css
/* Example: theme = 'custom' */
.r01st-container[data-theme="custom"] .r01st-success {
  background: #16a34a;
}

.r01st-container[data-theme="custom"] .r01st-error {
  background: #dc2626;
}

.r01st-container[data-theme="custom"] .r01st-info {
  background: #2563eb;
}

.r01st-container[data-theme="custom"] .r01st-warning {
  background: #f59e0b;
}
```

Then use:
```js
toast('Custom theme', { theme: 'custom' });
```

## Custom styling ✨
Add a `className` and style it yourself:

```js
toast('Styled toast', { className: 'my-toast' });
```

```css
.my-toast {
  border: 2px solid #fff;
  backdrop-filter: blur(6px);
}
```

## Accessibility ♿
- Container uses `role="region"` and `aria-live="polite"`.
- Each toast uses `role="alert"`.
- Close button has `aria-label="Close notification"`.

## Browser build (UMD) 🌐
If you prefer a direct script tag, use the UMD build (global name: `SimpleToast`).

```html
<script src="https://unpkg.com/@r01al/simple-toast/dist/simple-toast.min.js"></script>
<script>
  SimpleToast.toast('Hello from the browser build');
  SimpleToast.toast.success('It works!');
</script>
```

## TypeScript ✅
Type definitions are included. If you need them directly:

```ts
import toast, { configure, ToastOptions } from '@r01al/simple-toast';
```

## Common patterns 🧠

### Keep it on screen until the user dismisses it
```js
toast('Please confirm this action', { duration: 0 });
```

### Override global config for one toast
```js
configure({ duration: 5000, position: 'tr' });

toast('Overrides only this toast', { duration: 1000, position: 'bl' });
```

### Limit spammy notifications
```js
configure({ maxToasts: 3 });
```

## Development (for contributors) 🛠️
```bash
npm run build
npm run dev
```

---

MIT © r01al
