"use client";

import {
  PanelTopClose as MATERIAL_SLIDE_1_ICON,
  TreePine as MATERIAL_SLIDE_3_ICON,
  Layers as MATERIAL_SLIDE_5_ICON,
  Boxes as MATERIAL_SLIDE_2_ICON,
  Link as MATERIAL_SLIDE_4_ICON,
  Cog as MATERIAL_SLIDE_6_ICON,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useCarousel } from "@/hooks/useCarousel";
import { CONTENT } from "@/constants/content";

import useEmblaCarousel from "embla-carousel-react";

const MATERIALS = [
  { TEXT: CONTENT.MATERIAL_SLIDE_1, ICON: MATERIAL_SLIDE_1_ICON },
  { TEXT: CONTENT.MATERIAL_SLIDE_2, ICON: MATERIAL_SLIDE_2_ICON },
  { TEXT: CONTENT.MATERIAL_SLIDE_3, ICON: MATERIAL_SLIDE_3_ICON },
  { TEXT: CONTENT.MATERIAL_SLIDE_4, ICON: MATERIAL_SLIDE_4_ICON },
  { TEXT: CONTENT.MATERIAL_SLIDE_5, ICON: MATERIAL_SLIDE_5_ICON },
  { TEXT: CONTENT.MATERIAL_SLIDE_6, ICON: MATERIAL_SLIDE_6_ICON },
];

const Material: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { onNext, onPrev, nextDisabled, prevDisabled } = useCarousel(emblaApi);

  return (
    <section className="relative w-full py-10">
      <div className="container mx-auto flex flex-col gap-[20px]">
        <h2 className="font-bold text-[42px] text-center">
          {CONTENT.MATERIAL_TITLE}
        </h2>
        <p className="text-[20px] text-center">
          {CONTENT.MATERIAL_DESCRIPTION}
        </p>

        <div
          className="relative max-w-[984px] mx-auto p-2.5 overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-8">
            {MATERIALS.map(({ ICON: IconComponent, TEXT }, index) => (
              <div
                className="min-w-[300px] h-[200px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-white shadow-md"
                key={index}
              >
                <div className="border-2 border-[var(--primary)] p-3 rounded-full">
                  <IconComponent size={32} className="text-[var(--primary)]" />
                </div>
                <p className="text-[var(--primary)] font-bold text-[24px]">
                  {TEXT}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4 justify-center">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-default"
            disabled={prevDisabled}
            onClick={onPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-default"
            disabled={nextDisabled}
            onClick={onNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Material };
