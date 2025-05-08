import { CONTENT } from "@/constants/content";
import Image from "next/image";

const FANCE_INFO = [
  {
    IMAGE: "/images/fence-info-1.png",
    TITLE: CONTENT.FENCE_INFO_1_SUB_TITLE,
    DESCRIPTION: CONTENT.FENCE_INFO_1_SUB_DESCRIPTION,
  },
  {
    IMAGE: "/images/fence-info-2.jpg",
    TITLE: CONTENT.FENCE_INFO_2_SUB_TITLE,
    DESCRIPTION: CONTENT.FENCE_INFO_2_SUB_DESCRIPTION,
  },
  {
    IMAGE: "/images/fence-info-3.jpg",
    TITLE: CONTENT.FENCE_INFO_3_SUB_TITLE,
    DESCRIPTION: CONTENT.FENCE_INFO_3_SUB_DESCRIPTION,
  },
];

const FenceInfo: React.FC = () => (
  <section className="w-full py-10">
    <div className="relative container mx-auto flex flex-col gap-[20px]">
      <h2 className="font-bold text-[42px] text-center">
        {CONTENT.FENCE_INFO_TITLE}
      </h2>
      <p className="text-[20px] text-center max-w-[1200px] mx-auto">
        {CONTENT.FENCE_INFO_DESCRIPTION}
      </p>

      <div className="w-full flex justify-center gap-5 pt-4">
        {FANCE_INFO.map(({ IMAGE, TITLE, DESCRIPTION }, index) => (
          <div
            className="max-w-[500px] w-full flex flex-col gap-5 border-2 p-5"
            key={index}
          >
            <div className="min-h-[170px] overflow-y-auto  custom-scrollbar flex flex-col gap-5">
              <h4 className="font-semibold text-[22px]">{TITLE}</h4>
              <p>{DESCRIPTION}</p>
            </div>

            <Image
              alt={CONTENT.FENCE_INFO_IMAGE_ALT}
              className="h-full object-cover"
              src={IMAGE}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { FenceInfo };
