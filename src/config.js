export const defaultConfig = {
  position: 'tr',
  duration: 3000,
  theme: 'l',
  dismissible: true,
  maxToasts: 10
};

export let globalConfig = { ...defaultConfig };

export function configure(config) {
  globalConfig = { ...globalConfig, ...config };
}

export function getConfig() {
  return globalConfig;
}
