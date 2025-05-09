import { CONTENT } from "@/constants/content";
import Image from "next/image";

const FANCE_RISKS = [
  {
    IMAGE: "/images/" + CONTENT.FANCE_RISK_1_IMAGE,
    DESCRIPTION: CONTENT.FANCE_RISK_1_DESCRIPTION,
    TITLE: CONTENT.FANCE_RISK_1_TITLE,
  },
  {
    IMAGE: "/images/" + CONTENT.FANCE_RISK_2_IMAGE,
    DESCRIPTION: CONTENT.FANCE_RISK_2_DESCRIPTION,
    TITLE: CONTENT.FANCE_RISK_2_TITLE,
  },
  {
    IMAGE: "/images/" + CONTENT.FANCE_RISK_3_IMAGE,
    DESCRIPTION: CONTENT.FANCE_RISK_3_DESCRIPTION,
    TITLE: CONTENT.FANCE_RISK_3_TITLE,
  },
];

const FenceRisks: React.FC = () => {
  return (
    <section className="w-full py-10">
      <div className="relative container mx-auto w-full max-w-[1250px] shadow-xl rounded-xl p-7 flex flex-wrap justify-between gap-10">
        {FANCE_RISKS.map(({ DESCRIPTION, IMAGE, TITLE }, index) => (
          <div className="flex gap-5 max-w-[560px]" key={index}>
            <Image
              className="min-h-[200px] h-[200px] min-w-[280px] object-cover rounded-2xl"
              alt={CONTENT.FENCE_RISK_IMAGE_ALT}
              height={200}
              width={280}
              src={IMAGE}
            />
            <div className="flex flex-col justify-evenly">
              <h5 className="font-semibold text-[22px]">{TITLE}</h5>
              <p>{DESCRIPTION}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { FenceRisks };
