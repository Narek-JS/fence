"use client";

import { QuoteForm } from "@/components/QuoteForm";
import { PORTFOLIO } from "@/constants/portfolio";
import { CONTENT } from "@/constants/content";
import { useModal } from "@/context/Modal";
import { ArrowLeft } from "lucide-react";
import { MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const WorkDetails: React.FC<Props> = ({ params }) => {
  const workDetail = PORTFOLIO[Number(params.id)];
  const { open } = useModal();

  const openQuoteModal = () => {
    open(
      <div className="w-full flex flex-col items-center gap-4 p-6">
        <h2 className="font-bold text-[32px] text-[#000] text-center">
          {CONTENT.FOOTER_FORM_TITLE}
        </h2>
        <QuoteForm />
      </div>
    );
  };

  return (
    <section className="relative w-full py-10 pt-[var(--header-height)]">
      <div className="container mx-auto flex flex-col gap-2.5 pt-10">
        <Link
          href={MENU.PORTFOLIO.LINK}
          className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] underline"
        >
          <ArrowLeft size={18} /> Back to Portfolio
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

        <div className="mt-10">
          <button
            className="max-w-4xl w-full h-[48px] rounded bg-white border border-[var(--primary)] flex items-center justify-center font-semibold text-[18px] text-[var(--primary)] hover:bg-gray-50 transition cursor-pointer"
            onClick={openQuoteModal}
          >
            {CONTENT.GET_FREE_QUOTE}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
