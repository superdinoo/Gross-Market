import { useState } from "react";

export const useActiveArrowState = () => {
  const [activeArrow, setActiveArrow] = useState({
    left: false,
    right: false,
  });

  return { activeArrow, setActiveArrow };
};
