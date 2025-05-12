import { LegalContent } from "@/components/shared/LegalContent";
import { TERMS_CONDITIONS } from "@/constants/termsConditions";
import { CONTENT } from "@/constants/content";

const TermsConditions: React.FC = () => (
  <main className="relative w-full py-10 pt-[var(--header-height)]">
    <div className="container mx-auto flex flex-col gap-[20px]">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.TERMS_TITLE}
      </h2>

      <LegalContent content={TERMS_CONDITIONS} />
    </div>
  </main>
);

export default TermsConditions;
