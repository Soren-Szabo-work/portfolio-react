import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { CursorContext } from "./CursorContextProvider";
import useDeviceDetext from "../utils/useDeviceDetect";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { useFollowPointer } from "../utils/useFollowPointer";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  const largeCursor = useRef(null);
  const { x: largeX, y: largeY } = useFollowPointer(largeCursor);

  const { isMobile } = useDeviceDetext();
  const [isVisible, setIsVisible] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const lastMove = useRef(null);
  const timeoutDelay = 2000;

  useEffect(() => {
    const handlePointerEnter = () => setIsVisible(true);
    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerMove = () => {
      setIsIdle(false);
      clearTimeout(lastMove.current);
      lastMove.current = setTimeout(() => setIsIdle(true), timeoutDelay);
    };

    document.body.addEventListener("pointerenter", handlePointerEnter);
    document.body.addEventListener("pointerleave", handlePointerLeave);
    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointerenter", handlePointerEnter);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [cursor]);

  if (isMobile) return null;
  return (
    <div className="cursor">
      <motion.div
        // className={`cursor--large ${cursor.hover ? "hover" : ""}`}
        className="cursor--large"
        ref={largeCursor}
        initial={{ x: largeX, y: largeY }}
        animate={{
          x: largeX,
          y: largeY,
          scale: !isVisible ? 0 : cursor.hover ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 700,
          restDelta: 0.001,

          scale: {
            duration: 0.3,
            type: "tween",
            ease: isVisible ? "backOut" : "linear",
          },
        }}
        style={{
          opacity: `${isIdle && !cursor.hover ? 0 : 1}`,
        }}
      />
      <div
        className={`cursor--small ${cursor.hover ? "hover" : ""}`}
        style={{
          scale: `${isVisible ? 1 : 0}`,
          transform: `translate(-50%, -50%) translate3d(${clientX}px, ${clientY}px, 0px)`,
        }}
      />
    </div>
  );
};

export default Cursor;
