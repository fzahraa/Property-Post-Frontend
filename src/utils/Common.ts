export const isServer = typeof window === "undefined";

/**
 * Disable body scroll
 * @param disable
 */
export const disableBodyScroll = (disable: boolean) => {
  const body = document?.documentElement;
  if (disable) {
    body.classList.add("property-post-body--disable");
  } else {
    body.classList.remove("property-post-body--disable");
  }
};

export const isSSR = typeof window === undefined;
