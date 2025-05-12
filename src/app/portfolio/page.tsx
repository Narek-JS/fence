import { PORTFOLIO } from "@/constants/portfolio";
import { CONTENT } from "@/constants/content";
import { MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

const Portfolio: React.FC = () => (
  <section className="relative w-full py-10 pt-[var(--header-height)]">
    <div className="container mx-auto flex flex-col gap-2.5 pt-10">
      <h1 className="font-bold text-[32px] sm:text-[42px] text-center">
        {CONTENT.PORTFOLIO_TITLE}
      </h1>
      <p className="text-[20px] text-center">{CONTENT.PORTFOLIO_DESCRIPTION}</p>

      <div className="w-full flex justify-center flex-wrap gap-7 mt-5">
        {PORTFOLIO.map(({ ID, IMAGE, TITLE, SHORT_DESCRIPTION }, index) => (
          <div
            className="max-w-[320px] flex flex-col gap-4 rounded-md shadow-md"
            key={index}
          >
            <Image
              className="w-full rounded-tl-md rounded-tr-md h-[240px]"
              src={"/portfolio-images/" + IMAGE}
              height={300}
              width={378}
              alt={TITLE}
            />
            <div className="pt-0 p-5 flex flex-col gap-2.5">
              <h4 className="font-semibold text-[22px] -tracking-tight">
                {TITLE}
              </h4>
              <p className="tracking-normal">{SHORT_DESCRIPTION}</p>
              <Link
                className="mt-1 w-full h-[48px] flex items-center justify-center rounded-md bg-[var(--primary)] text-[#FFFFFF] font-semibold cursor-pointer"
                href={MENU.PORTFOLIO.LINK + "/" + ID}
              >
                {CONTENT.PORTFOLIO_CARD_BUTTON}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
