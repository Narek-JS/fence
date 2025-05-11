import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type ReturnT = { active: boolean };

const useHeaderAnimation = (activePosition = 100): ReturnT => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname !== "/");

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > activePosition);

    if (pathname === "/") {
      onScroll();
      window.addEventListener("scroll", onScroll);
    } else {
      setActive(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [activePosition, pathname]);

  return { active };
};

export { useHeaderAnimation };
