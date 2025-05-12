import { QuoteButton } from "@/components/UI/QuoteButton";
import { PORTFOLIO } from "@/constants/portfolio";
import { CONTENT } from "@/constants/content";
import { ArrowLeft } from "lucide-react";
import { MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const WorkDetails = async ({ params }: Props) => {
  const { id } = await params;

  const workDetail = PORTFOLIO[Number(id)];

  return (
    <section className="relative w-full py-10 pt-[var(--header-height)]">
      <div className="container mx-auto flex flex-col gap-2.5 pt-10">
        <Link
          href={MENU.PORTFOLIO.LINK}
          className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] underline"
        >
          <ArrowLeft size={18} />
          <span>{CONTENT.BACK_TO_PORTFOLIO}</span>
        </Link>

        <h1 className="font-bold text-[32px] sm:text-[42px] mt-3">
          {workDetail.TITLE}
        </h1>
        <p className="text-[20px] max-w-4xl">{workDetail.DESCRIPTION}</p>

        <div className="mt-6 max-w-4xl">
          <Image
            className="w-full max-h-[56rem] rounded-xl border border-gray-200 shadow-sm"
            src={`/portfolio-images/${workDetail.IMAGE}`}
            alt={workDetail.TITLE}
            width={1000}
            height={600}
            priority
          />
        </div>

        <QuoteButton className="!max-w-4xl border border-[var(--primary)] mt-10">
          {CONTENT.GET_FREE_QUOTE}
        </QuoteButton>
      </div>
    </section>
  );
};

export default WorkDetails;
