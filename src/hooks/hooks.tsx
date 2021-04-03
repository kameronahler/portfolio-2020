export const useCustomProp = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)
