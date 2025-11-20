const NAVBAR_OFFSET = 96;
const SCROLL_STORAGE_KEY = "obsilab:pending-scroll-target";

const normalizeHash = (hash?: string | null) => {
  if (!hash) return null;
  return hash.startsWith("#") ? hash : `#${hash}`;
};

export const scrollToHash = (hash: string) => {
  const target = normalizeHash(hash);
  if (typeof document === "undefined" || !target) {
    return false;
  }

  const element = document.querySelector(target);
  if (!element) {
    return false;
  }

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    NAVBAR_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });
  return true;
};

export const queueScrollTarget = (hash: string) => {
  if (typeof window === "undefined") return;
  const target = normalizeHash(hash);
  if (!target) return;
  window.sessionStorage.setItem(SCROLL_STORAGE_KEY, target);
};

export const getQueuedScrollTarget = () => {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(SCROLL_STORAGE_KEY);
};

export const clearQueuedScrollTarget = () => {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(SCROLL_STORAGE_KEY);
};
