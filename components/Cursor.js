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
  const [isVisible, setIsVisible] = useState(true);
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

    // requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.removeEventListener("pointerenter", handlePointerEnter);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      document.body.removeEventListener("pointermove", handlePointerMove);
      // cancelAnimationFrame(requestRef.current);
    };
  }, [cursor]);

  if (isMobile) return null;
  if (!isVisible) return <div className="cursor" />;
  return (
    <div className="cursor">
      <motion.div
        // className={`cursor--large ${cursor.hover ? "hover" : ""}`}
        className="cursor--large"
        ref={largeCursor}
        initial={{ x: largeX, y: largeY }}
        animate={{ x: largeX, y: largeY, scale: cursor.hover ? 1.5 : 1 }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 700,
          restDelta: 0.001,

          scale: {
            duration: 0.3,
            type: "tween",
            ease: "backOut",
          },
        }}
        style={{
          // transform: `translate(-50%, -50%) translate3d(${trailX}px, ${trailY}px, 0)`,
          opacity: `${isIdle && !cursor.hover ? 0 : 1}`,
        }}
      />
      <div
        className={`cursor--small ${cursor.hover ? "hover" : ""}`}
        style={{
          transform: `translate(-50%, -50%) translate3d(${clientX}px, ${clientY}px, 0px)`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
