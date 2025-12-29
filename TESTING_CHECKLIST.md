# Testing Checklist

Use this checklist to verify all features work correctly before publishing.

## ✅ Basic Functionality

- [ ] Success toast displays with green background
- [ ] Error toast displays with red background  
- [ ] Info toast displays with blue background
- [ ] Warning toast displays with orange/yellow background
- [ ] Toast messages display correctly
- [ ] Icons appear for each type
- [ ] Close button appears and works
- [ ] Toasts auto-dismiss after duration

## ✅ Positioning (Test all 9 positions)

- [ ] `top-left` - Toast appears in top-left corner
- [ ] `top-center` - Toast appears centered at top
- [ ] `top-right` - Toast appears in top-right corner
- [ ] `middle-left` - Toast appears vertically centered on left
- [ ] `middle-center` - Toast appears in center of screen
- [ ] `middle-right` - Toast appears vertically centered on right
- [ ] `bottom-left` - Toast appears in bottom-left corner
- [ ] `bottom-center` - Toast appears centered at bottom
- [ ] `bottom-right` - Toast appears in bottom-right corner

## ✅ Animations

- [ ] Toast slides in smoothly
- [ ] Toast fades in with opacity transition
- [ ] Toast slides out smoothly when dismissed
- [ ] Multiple toasts animate independently
- [ ] No visual glitches during animation

## ✅ Stacking Behavior

- [ ] Multiple toasts stack vertically
- [ ] New toasts appear in correct position (top positions = newest on top)
- [ ] Bottom positions stack correctly (newest at bottom)
- [ ] Toast spacing is consistent
- [ ] Maximum toast limit works (default 10)
- [ ] Oldest toast removed when limit exceeded

## ✅ Duration & Dismissal

- [ ] 1 second duration works
- [ ] 3 second duration works (default)
- [ ] 5+ second duration works
- [ ] Duration = 0 prevents auto-dismiss
- [ ] Manual dismiss with close button works
- [ ] `toast.dismiss(id)` works programmatically
- [ ] `toast.dismissAll()` removes all toasts
- [ ] Dismissal animation completes before removal

## ✅ Themes

- [ ] Light theme displays correctly
- [ ] Dark theme displays correctly
- [ ] Theme colors match specification
- [ ] Close button hover state works
- [ ] Text is readable in both themes

## ✅ Configuration

- [ ] Global `configure()` sets defaults
- [ ] Per-toast options override global config
- [ ] Position changes apply to new toasts
- [ ] Theme changes apply to new toasts
- [ ] Duration changes apply correctly
- [ ] Max toasts limit works

## ✅ DOM Management

- [ ] Container created on first toast
- [ ] Container has correct ARIA attributes
- [ ] Container removed when all toasts dismissed
- [ ] No leftover DOM elements after dismissal
- [ ] Position attribute updates on container
- [ ] Theme attribute updates on container

## ✅ Accessibility

- [ ] Container has `role="region"` and `aria-label`
- [ ] Toasts have `role="alert"`
- [ ] Close button has `aria-label="Close notification"`
- [ ] Icons have `aria-hidden="true"`
- [ ] Close button focusable with keyboard
- [ ] Close button has focus outline
- [ ] Tab navigation works correctly
- [ ] Enter/Space activates close button

## ✅ Responsive Design

- [ ] Works on mobile screens (< 480px)
- [ ] Toasts stretch to full width on mobile
- [ ] Padding appropriate for mobile
- [ ] Touch tap on close button works
- [ ] No horizontal scrolling caused

## ✅ Browser Testing

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS)
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] No console errors in any browser

## ✅ Edge Cases

- [ ] Very long message wraps correctly
- [ ] Very short message looks good
- [ ] Rapid clicking creates multiple toasts
- [ ] Dismissing while entering works
- [ ] Changing position while toasts active works
- [ ] No memory leaks with many toasts
- [ ] Special characters display correctly
- [ ] Empty message handled gracefully

## ✅ Integration Testing

### ES Module
- [ ] Import works: `import { toast } from 'simple-toast'`
- [ ] CSS import works: `import 'simple-toast/dist/simple-toast.css'`
- [ ] All methods accessible
- [ ] TypeScript types work (if using TS)

### UMD (Browser)
- [ ] Script tag loads without errors
- [ ] `SimpleToast.toast` accessible globally
- [ ] All methods work via `SimpleToast` namespace
- [ ] CSS link tag loads styles

### CommonJS (Node)
- [ ] Require works: `const { toast } = require('simple-toast')`
- [ ] All methods accessible

## ✅ Performance

- [ ] Smooth 60fps animations
- [ ] No lag when showing multiple toasts
- [ ] Memory released after dismissal
- [ ] CSS transitions GPU-accelerated
- [ ] No layout thrashing

## ✅ Reduced Motion

- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Animations simplified/disabled
- [ ] Toasts still functional
- [ ] No jarring transitions

## ✅ Print Styles

- [ ] Toast container hidden when printing
- [ ] No visual artifacts in print preview

## ✅ Documentation

- [ ] README is clear and accurate
- [ ] Code examples work when copied
- [ ] API documentation complete
- [ ] TypeScript definitions accurate
- [ ] Examples in `example/` folder work

## 📝 Test Notes

Date: _______________
Tester: _______________

Issues Found:
_________________________________
_________________________________
_________________________________

Additional Comments:
_________________________________
_________________________________
_________________________________
