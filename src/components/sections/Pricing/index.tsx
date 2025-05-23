import { CONTENT } from "@/constants/content";
import { MENU } from "@/constants/menu";

const PRICEING_RULES = [
  CONTENT.PRICEING_RULE_1,
  CONTENT.PRICEING_RULE_2,
  CONTENT.PRICEING_RULE_3,
];

const Pricing: React.FC = () => (
  <section className="w-full py-10" id={MENU.PRICING.ID}>
    <div className="relative container mx-auto flex flex-col gap-[20px]">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.PRICEING_TITLE}
      </h2>
      <p className="text-[20px] text-center">{CONTENT.PRICEING_DESCRIPTION}</p>

      <div className="w-full flex flex-col justify-center gap-5 pt-4">
        {PRICEING_RULES.map((text, index) => (
          <div
            className="relative max-w-[500px] w-full  h-[60px] sm:h-[40px] mx-auto flex items-center px-[20px] shadow after:absolute after:top-1/2 after:-translate-1/2 after:left-[10px] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[var(--primary)]"
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Pricing };
