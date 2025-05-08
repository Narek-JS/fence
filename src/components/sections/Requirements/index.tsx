import { TreePine, Wrench } from "lucide-react";
import { CONTENT } from "@/constants/content";

const REQUIREMENTS = [
  {
    DESCRIPTION: CONTENT.REQUIREMENTS_STEP_1_DESCRIPTION,
    TITLE: CONTENT.REQUIREMENTS_STEP_1_TITLE,
    ICON: TreePine,
  },
  {
    DESCRIPTION: CONTENT.REQUIREMENTS_STEP_2_DESCRIPTION,
    TITLE: CONTENT.REQUIREMENTS_STEP_2_TITLE,
    ICON: Wrench,
  },
];

const Requirements: React.FC = () => (
  <section className="w-full py-10">
    <div className="relative container mx-auto flex flex-col gap-[20px]">
      <h2 className="font-bold text-[42px] text-center">
        {CONTENT.REQUIREMENTS_TITLE}
      </h2>
      <p className="text-[20px] text-center">
        {CONTENT.REQUIREMENTS_DESCRIPTION}
      </p>

      <div className="w-full flex justify-center gap-5 pt-10">
        {REQUIREMENTS.map(
          ({ DESCRIPTION, TITLE, ICON: IconComponent }, index) => (
            <div
              className="relative max-w-[500px] flex flex-col gap-5 shadow-xl py-10 px-6"
              key={index}
            >
              <div className="absolute -top-7 left-5 w-14 h-14 flex items-center justify-center rounded-full bg-[var(--primary)]">
                <IconComponent size={25} color="#FFFFFF" />
              </div>
              <h4 className="text-[var(--primary)] font-bold text-[24px]">
                {TITLE}
              </h4>
              <p className="text-[var(--primary)] text-[18px] -tracking-wide">
                {DESCRIPTION}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export { Requirements };
