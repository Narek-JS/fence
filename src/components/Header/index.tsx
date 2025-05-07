"use client";

import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import { SiteHeader } from "../shared/SiteHeader";
import classNames from "classnames";

const Header: React.FC = () => {
  const { active } = useHeaderAnimation();

  return (
    <header
      className={classNames(
        "header w-full flex items-center h-[var(--header-height)] fixed z-10 -translate-y-[var(--header-height)] transition-all duration-300 bg-[#FFFFFF] shadow",
        { "translate-y-0": active }
      )}
    >
      <div className="container mx-auto">
        <SiteHeader />
      </div>
    </header>
  );
};

export { Header };
