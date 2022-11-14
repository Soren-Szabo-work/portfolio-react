import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { CursorContext } from "./CursorContextProvider";
import useDeviceDetext from "../utils/useDeviceDetect";
import useMousePosition from "../utils/useMousePosition";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const { isMobile } = useDeviceDetext();

  const [isVisible, setIsVisible] = useState(true);
  const [isIdle, setIsIdle] = useState(false);

  const [trailX, setTrailX] = useState(0);
  const [trailY, setTrailY] = useState(0);
  const trailSpeed = 20;

  const oldClientRef = useRef({ x: 0, y: 0 });
  const lastMove = useRef(null);
  const timeoutDelay = 1500;

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const handleIdle = useCallback(
    (time) => {
      if (lastMove.current === null) {
        lastMove.current = time;
        return;
      }

      if (
        cursor.hover ||
        clientX != oldClientRef.current.x ||
        clientY != oldClientRef.current.y
      ) {
        if (isIdle) setIsIdle(false);
        lastMove.current = time;
        oldClientRef.current = { x: clientX, y: clientY };

        return;
      }

      if (!isIdle && time - lastMove.current >= timeoutDelay) setIsIdle(true);
    },
    [clientX, clientY, cursor.hover, isIdle]
  );

  const animate = useCallback(
    (time) => {
      if (isVisible && previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        let deltaSpeed = (deltaTime * trailSpeed) / 1000;
        // Pass on a function to the setter of the state
        // to make sure we always have the latest state
        // setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);

        setTrailX((trail) => trail + (clientX - trail) * deltaSpeed);
        setTrailY((trail) => trail + (clientY - trail) * deltaSpeed);

        handleIdle(time);
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [clientX, clientY, handleIdle, isVisible]
  );

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, [animate, cursor]);

  if (isMobile) return null;
  return (
    <div className="cursor">
      <div
        className={`cursor--large ${isVisible ? "" : "hidden"} ${
          cursor.hover ? "hover" : ""
        }`}
        style={{
          transform: `translate(-50%, -50%) translate3d(${trailX}px, ${trailY}px, 0)`,
          opacity: `${isIdle ? 0 : 1}`,
        }}
      ></div>
      <div
        className={`cursor--small ${isVisible ? "" : "hidden"} ${
          cursor.hover ? "hover" : ""
        }`}
        style={{
          transform: `translate(-50%, -50%) translate3d(${clientX}px, ${clientY}px, 0px)`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
