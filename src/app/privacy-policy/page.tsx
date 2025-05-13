import { LegalContent } from "@/components/shared/LegalContent";
import { PRIVACY_POLICY } from "@/constants/privacyPolicy";
import { CONTENT } from "@/constants/content";

const PrivacyPolicy: React.FC = () => (
  <main className="relative w-full py-10 pt-[var(--header-height)]">
    <div className="container mx-auto flex flex-col justify-center gap-[20px] pt-10">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.PRIVACY_TITLE}
      </h2>

      <LegalContent content={PRIVACY_POLICY} />
    </div>
  </main>
);

export default PrivacyPolicy;
