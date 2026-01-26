import { useState, useRef, useEffect } from "react";
function useReverse() {
  const projectRef = useRef(null);
  const [leftDirection, setLeftDirection] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        setLeftDirection(!entries.isIntersecting);
      },
      { threshold: 1 },
    );
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
  }, []);
  return [leftDirection, projectRef];
}

export default useReverse;
