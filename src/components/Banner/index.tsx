import { FencesAnimation } from "./FencesAnimation";
import { SiteHeader } from "../shared/SiteHeader";
import { CONTENT } from "@/constants/content";
import Image from "next/image";

const Banner: React.FC = () => (
  <div className="relative w-full h-screen overflow-clip">
    <Image
      className="object-cover absolute inset-0 -z-10"
      src="/images/banner.png"
      alt="Banner"
      priority
      fill
    />
    <div className="bg-black/50 absolute inset-0 -z-10" />

    <div className="container mx-auto flex flex-col gap-6 sm:gap-8 py-6 sm:py-10">
      <SiteHeader />

      <h1 className="text-white text-[52px] lg:text-[92px] text-center font-semibold mt-6">
        {CONTENT.TITLE}
      </h1>

      <p className="text-white text-[20px] lg:text-[24px] text-center max-w-[700px] mx-auto">
        {CONTENT.DESCRIPTION}
      </p>

      <div className="flex flex-col items-center gap-4 sm:gap-5 mt-8 sm:mt-10">
        <button className="max-w-[380px] w-full h-[44px] sm:h-[48px] rounded bg-white flex items-center justify-center font-semibold text-[18px] text-[var(--primary)] cursor-pointer">
          {CONTENT.VIEW_OUR_WORK}
        </button>
        <button className="max-w-[380px] w-full h-[44px] sm:h-[48px] rounded bg-white flex items-center justify-center font-semibold text-[18px] text-[var(--primary)] cursor-pointer">
          {CONTENT.GET_FREE_QUOTE}
        </button>
      </div>
    </div>

    <FencesAnimation />
  </div>
);

export { Banner };
