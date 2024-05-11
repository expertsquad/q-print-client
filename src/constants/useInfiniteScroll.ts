import { useEffect } from "react";

const useInfiniteScroll = (
  buffer: number,
  condition: (
    scrollHeight: number,
    clientHeight: number,
    scrollTop: number,
    buffer: number
  ) => boolean,
  callback: () => void,
  dependencies: React.DependencyList = []
) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const scrollPosition = scrollTop + clientHeight;

      if (condition(scrollHeight, clientHeight, scrollTop, buffer)) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [buffer, condition, callback, dependencies]);
};

export default useInfiniteScroll;
