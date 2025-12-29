# Project Structure

## Modular Architecture

The library has been refactored into separate, focused modules:

### Source Files (`src/`)

```
src/
├── index.js          (28 lines)  - Main entry point, exports API
├── config.js         (27 lines)  - Configuration management
├── container.js      (54 lines)  - DOM container lifecycle + style injection
├── toast-manager.js  (91 lines)  - Toast state and lifecycle
├── toast-creator.js  (50 lines)  - Toast DOM element creation
├── animations.js     (27 lines)  - Show/hide animations
├── icons.js          (14 lines)  - SVG icon definitions
├── styles.js         (248 lines) - CSS injected via JavaScript
└── toast.d.ts        (110 lines) - TypeScript definitions
```

**Total:** 539 lines of JavaScript + 110 lines TypeScript = 649 lines total

**No CSS files!** Styles are injected via JavaScript automatically.

### Module Responsibilities

#### `index.js`
- Main API export point
- Creates `toast()` function with shorthand methods
- Exports `configure()` for global settings
- Thin wrapper around core functionality

#### `config.js`
- Stores global configuration
- Provides `configure()` to update settings
- Provides `getConfig()` to read settings
- Default values: position, duration, theme, etc.

#### `container.js`
- Creates/manages the toast container DOM element
- Handles container positioning and theming
- Automatically removes container when empty (zero DOM footprint)
- Single responsibility: container lifecycle

#### `toast-manager.js`
- Manages toast state (Map of active toasts)
- Creates new toasts via `createToast()`
- Dismisses toasts via `dismissToast()` and `dismissAllToasts()`
- Enforces max toast limit
- Handles auto-dismiss timers

#### `toast-creator.js`
- Pure DOM element creation
- Builds toast HTML structure
- No state management
- Attaches event handlers

#### `animations.js`
- Simple show/hide animations
- Uses CSS classes for transitions
- Timing constants for animation duration

#### `styles.js`
- Injects CSS into `<style>` tag in document head
- Only injects once (tracks state)
- Simple vanilla CSS (no flexbox, no grid, no CSS vars)
- Includes all toast styles, themes, animations
- Can be removed for cleanup (exported `removeStyles()`)

#### `toast.css`
- ❌ **Removed!** No separate CSS file needed

### Build Output (`dist/`)

```
dist/
├── simple-toast.cjs.js   (13KB) - CommonJS format (includes styles)
├── simple-toast.esm.js   (13KB) - ES Module format (includes styles)
├── simple-toast.umd.js   (14KB) - Browser UMD format (includes styles)
└── toast.d.ts            (2.1KB) - TypeScript definitions
```

**No CSS file in dist!** All styles injected via JavaScript.

### Build System

- **Rollup** - JavaScript bundling only
- **No CSS files** - Styles injected via JS
- **No preprocessors** - Pure vanilla
- Entry: `src/index.js`
- Outputs: CJS, ESM, UMD formats

### Benefits of This Structure

1. **Separation of Concerns**
   - Each module has one clear responsibility
   - Easy to understand and maintain
   - Can modify one part without affecting others

2. **No External CSS Required**
   - Single JS import - that's it!
   - No `<link>` tags needed
   - No CSS bundler configuration
   - Styles auto-inject on first use

3. **Small File Sizes**
   - Each module is focused and small
   - Easy to read entire file at once
   - Average ~40 lines per module

4. **Zero Dependencies**
   - Only build-time deps (Rollup)
   - No runtime dependencies
   - Pure vanilla JavaScript and CSS

5. **Clean Imports**
   - Clear dependency graph
   - No circular dependencies
   - Tree-shakeable

### Dependency Graph

```
index.js
  ├── config.js
  ├── toast-manager.js
  │   ├── config.js
  │   ├── container.js
  │   │   └── styles.js (injects CSS on first use)
  │   ├── toast-creator.js
  │   │   └── icons.js
  │   └── animations.js
  └── (exports)
```

### Testing Strategy

Each module can be tested independently:
- `config.js` - Test get/set configuration
- `container.js` - Test DOM creation/cleanup
- `icons.js` - Test SVG output
- `toast-creator.js` - Test element creation
- `animations.js` - Test class manipulation
- `toast-manager.js` - Test state management
- `index.js` - Integration tests

### Browser Compatibility

With simple CSS (no flexbox/grid):
- IE 9+
- Chrome (all versions)
- Firefox (all versions)
- Safari 6+
- Edge (all versions)
- Mobile browsers

### Performance

- No CSS parsing overhead
- Simple DOM operations
- Efficient inline-block layout
- GPU-accelerated opacity transitions
- Minimal reflows/repaints
