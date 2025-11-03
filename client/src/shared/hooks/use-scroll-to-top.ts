export const useScrollToTop = () => {
  typeof window !== "undefined"
    ? window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    : null;
};
