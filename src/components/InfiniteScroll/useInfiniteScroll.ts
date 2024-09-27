import { useState, useCallback } from "react";

// useInfiniteScroll 커스텀 Hook
const useInfiniteScroll = (initialImages: string[]) => {
  const [images, setImages] = useState<string[]>(initialImages);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchNextPage = useCallback(() => {
    setIsLoading(true);
    const newImages = Array.from(
      { length: 20 },
      (_, index) =>
        `https://picsum.photos/200/300?random=${images.length + index}`
    );
    setTimeout(() => {
      setImages((prev) => [...prev, ...newImages]);
      setIsLoading(false);
    }, 1000);
  }, [images.length]);

  return { images, isLoading, fetchNextPage };
};

export default useInfiniteScroll;
