import { useState, useEffect } from "react";

// https://stackoverflow.com/a/74080935
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  /**
   * Could also replace the <div></div> with
   * <></> and remove ...delegated if no need
   */
  return <div {...delegated}>{children}</div>;
}

export default ClientOnly;
