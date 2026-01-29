import { useState, useRef, useEffect } from "react";
function useReverse() {
  const projectRef = useRef(null);
  const [leftDirection, setLeftDirection] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        setLeftDirection(!entries.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "1000px" },
    );
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
  }, []);
  return [leftDirection, projectRef];
}

export default useReverse;
