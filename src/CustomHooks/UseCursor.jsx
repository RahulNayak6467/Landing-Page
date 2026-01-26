import { useRef, useEffect } from "react";
function useCursor() {
  const x = useRef(null);
  const y = useRef(null);
  useEffect(() => {
    const body = document.querySelector("body");
    const controller = document.querySelector(".controller");
    body.addEventListener("mousemove", function (e) {
      x.current = e.clientX;
      y.current = e.clientY;
      controller.style.left = `${x.current - 20}px`;
      controller.style.top = `${y.current - 16}px`;
    });
  }, []);
}

export default useCursor;
