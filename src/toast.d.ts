export interface ToastOptions {
  /**
   * Type of toast notification
   * @default 'info'
   */
  type?: 'success' | 'error' | 'info' | 'warning';

  /**
   * Duration in milliseconds before auto-dismiss (0 = no auto-dismiss)
   * @default 3000
   */
  duration?: number;

  /**
   * Position of the toast on screen
   * @default 'bc'
   */
  position?: 
    | 'tl' 
    | 'tc' 
    | 'tr' 
    | 'ml' 
    | 'mc' 
    | 'mr' 
    | 'bl' 
    | 'bc' 
    | 'br';

  /**
   * Whether to show a close button
   * @default true
   */
  dismissible?: boolean;

  /**
   * Theme to apply
   * @default 'l'
   */
  theme?: 'l' | 'd' | string;

  /**
   * Custom CSS class to add to the toast
   */
  className?: string;
}

export interface ToastConfig extends ToastOptions {
  /**
   * Maximum number of toasts to show at once
   * @default 10
   */
  maxToasts?: number;
}

/**
 * Configure global toast settings
 */
export function configure(config: ToastConfig): void;

/**
 * Display a toast notification
 * @param message - The message to display
 * @param options - Toast options
 * @returns Toast ID
 */
export function toast(message: string, options?: ToastOptions): number;

export namespace toast {
  /**
   * Display a success toast
   */
  export function success(message: string, options?: ToastOptions): number;

  /**
   * Display an error toast
   */
  export function error(message: string, options?: ToastOptions): number;

  /**
   * Display an info toast
   */
  export function info(message: string, options?: ToastOptions): number;

  /**
   * Display a warning toast
   */
  export function warning(message: string, options?: ToastOptions): number;

  /**
   * Dismiss a specific toast by ID
   */
  export function dismiss(id: number): void;

  /**
   * Dismiss all active toasts
   */
  export function dismissAll(): void;
}

/**
 * Dismiss a specific toast by ID
 */
export function dismiss(id: number): void;

/**
 * Dismiss all active toasts
 */
export function dismissAll(): void;

export default toast;
