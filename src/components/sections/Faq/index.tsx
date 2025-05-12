import { CONTENT } from "@/constants/content";
import { MENU } from "@/constants/menu";
import { FAQItem } from "./Item";

const FAQS = [
  { QUESTION: CONTENT.FAQ_1_QUESTION, ANSWER: CONTENT.FAQ_1_ANSWER },
  { QUESTION: CONTENT.FAQ_2_QUESTION, ANSWER: CONTENT.FAQ_2_ANSWER },
  { QUESTION: CONTENT.FAQ_3_QUESTION, ANSWER: CONTENT.FAQ_3_ANSWER },
  { QUESTION: CONTENT.FAQ_4_QUESTION, ANSWER: CONTENT.FAQ_4_ANSWER },
  { QUESTION: CONTENT.FAQ_5_QUESTION, ANSWER: CONTENT.FAQ_5_ANSWER },
  { QUESTION: CONTENT.FAQ_6_QUESTION, ANSWER: CONTENT.FAQ_6_ANSWER },
];

const Faq: React.FC = () => (
  <section className="w-full py-10" id={MENU.FAQ.ID}>
    <div className="relative container w-full flex flex-col gap-[20px]">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.FAQ_TITLE}
      </h2>

      {FAQS.map(({ ANSWER, QUESTION }, index) => (
        <FAQItem question={QUESTION} answer={ANSWER} key={index} />
      ))}
    </div>
  </section>
);

export { Faq };
