import { useEffect, useState } from "react";

type ReturnT = { active: boolean };

const useHeaderAnimation = (activePosition = 100): ReturnT => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > activePosition);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activePosition]);

  return { active };
};

export { useHeaderAnimation };
