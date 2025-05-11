import { CONTENT } from "@/constants/content";
import Image from "next/image";

const FANCE_INFO = [
  {
    DESCRIPTION: CONTENT.FENCE_INFO_1_SUB_DESCRIPTION,
    TITLE: CONTENT.FENCE_INFO_1_SUB_TITLE,
    IMAGE: "/images/fence-info-1.png",
  },
  {
    DESCRIPTION: CONTENT.FENCE_INFO_2_SUB_DESCRIPTION,
    TITLE: CONTENT.FENCE_INFO_2_SUB_TITLE,
    IMAGE: "/images/fence-info-2.jpg",
  },
  {
    DESCRIPTION: CONTENT.FENCE_INFO_3_SUB_DESCRIPTION,
    TITLE: CONTENT.FENCE_INFO_3_SUB_TITLE,
    IMAGE: "/images/fence-info-3.jpg",
  },
];

const FenceInfo: React.FC = () => (
  <section className="w-full py-10">
    <div className="relative container mx-auto flex flex-col gap-[20px]">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.FENCE_INFO_TITLE}
      </h2>
      <p className="text-[20px] text-center">
        {CONTENT.FENCE_INFO_DESCRIPTION}
      </p>

      <div className="w-full flex flex-col lg:flex-row justify-center gap-5 pt-4">
        {FANCE_INFO.map(({ IMAGE, TITLE, DESCRIPTION }, index) => (
          <div
            className="lg:w-[500px] flex flex-col justify-between gap-5 border-2 p-5"
            key={index}
          >
            <div className="min-h-[170px] overflow-y-auto custom-scrollbar flex flex-col gap-5">
              <h4 className="font-semibold text-[22px]">{TITLE}</h4>
              <p>{DESCRIPTION}</p>
            </div>

            <Image
              className="h-full max-h-[200px] xl:max-h-[340px] w-full object-cover"
              alt={CONTENT.FENCE_INFO_IMAGE_ALT}
              height={340}
              src={IMAGE}
              width={700}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { FenceInfo };
