import {
  CalendarDays as HOW_IT_WORKS_STEP_1_ICON,
  Hammer as HOW_IT_WORKS_STEP_3_ICON,
  Wrench as HOW_IT_WORKS_STEP_4_ICON,
  Boxes as HOW_IT_WORKS_STEP_2_ICON,
} from "lucide-react";
import { CONTENT } from "@/constants/content";

const HOW_IT_WORKS = [
  { TEXT: CONTENT.HOW_IT_WORKS_STEP_1, ICON: HOW_IT_WORKS_STEP_1_ICON },
  { TEXT: CONTENT.HOW_IT_WORKS_STEP_2, ICON: HOW_IT_WORKS_STEP_2_ICON },
  { TEXT: CONTENT.HOW_IT_WORKS_STEP_3, ICON: HOW_IT_WORKS_STEP_3_ICON },
  { TEXT: CONTENT.HOW_IT_WORKS_STEP_4, ICON: HOW_IT_WORKS_STEP_4_ICON },
];

const HowItWorks: React.FC = () => (
  <section className="w-full py-10 -mt-[20px]">
    <div className="relative container mx-auto flex flex-col gap-[20px]">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.HOW_IT_WORKS_TITLE}
      </h2>

      <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-4">
        {HOW_IT_WORKS.map(({ TEXT, ICON: IconComponent }, index) => (
          <div
            key={index}
            className="flex-1 min-h-[150px] sm:min-h-full min-w-[300px] sm:min-w-[260px] max-w-[300px] flex flex-col items-center gap-2.5 border p-4 rounded-xl bg-white shadow-md"
          >
            <div className="border-2 p-3 rounded-full border-[var(--primary)]">
              <IconComponent size={28} className="text-[var(--primary)]" />
            </div>
            <h4 className="text-[var(--primary)] text-center font-bold text-[18px] sm:text-[20px] md:text-[24px]">
              {TEXT}
            </h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { HowItWorks };
