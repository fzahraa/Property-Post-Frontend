export interface IBEMComponent<
  M extends string | undefined = undefined,
  S extends string | undefined = undefined
> {
  modifier?: M | M[];
  state?: S | S[];
}

type StyleModule = {
  readonly [key: string]: string;
};

/**
 * Extract all css styles
 * @param styles
 * @returns
 */
export const createModuleStyleExtractor = (styles: StyleModule) => {
  return (
    key: string | (undefined | string)[],
    conditional?: Record<string, boolean>,
    additional: (string | undefined)[] = []
  ) => {
    const moduleStyles = Array.isArray(key)
      ? key.filter(Boolean).map((k) => styles[k as any])
      : [styles[key]];

    if (conditional) {
      Object.keys(conditional).forEach((style) => {
        if (conditional[style]) {
          moduleStyles.push(styles[style]);
        }
      });
    }

    return additional.filter(Boolean).concat(moduleStyles).join(" ");
  };
};
