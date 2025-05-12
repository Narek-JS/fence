import { MapPin, Mail, Phone } from "lucide-react";
import { QuoteModal } from "../Modals/QuoteModal";
import { CONTACTS } from "@/constants/contacts";
import { CONTENT } from "@/constants/content";
import { MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="footer relative w-full pt-10 pb-4">
    <Image
      className="object-cover absolute inset-0 -z-10"
      src="/images/banner.webp"
      alt="Banner"
      priority
      fill
    />
    <div className="bg-black/80 absolute inset-0 -z-10" />

    <div className="container mx-auto flex flex-col gap-10">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-20">
        <div
          className="md:max-w-[450px] w-full flex flex-col gap-8"
          id={MENU.CONTACT_US.ID}
        >
          <h2 className="font-bold text-[#FFFFFF] text-[32px] sm:text-[42px]">
            {CONTENT.FOOTER_CONTACT_US_TITLE}
          </h2>
          <p className="text-[#FFFFFF] text-[20px]">
            {CONTENT.FOOTER_CONTACT_US_DESCRIPTION}
          </p>
          <div className="flex flex-col gap-5">
            <Link
              href={CONTACTS.EMAIL.LINK}
              className="flex items-center gap-2.5 text-[18px] text-[#FFFFFF] w-fit"
            >
              <Mail />
              <span>{CONTACTS.EMAIL.TEXT}</span>
            </Link>
            <Link
              href={CONTACTS.PHONE.LINK}
              className="flex items-center gap-2.5 text-[18px] text-[#FFFFFF] w-fit"
            >
              <Phone />
              <span>{CONTACTS.PHONE.TEXT}</span>
            </Link>
            <Link
              href={CONTACTS.LOCATION.LINK}
              className="flex items-center gap-2.5 text-[18px] text-[#FFFFFF] w-fit"
            >
              <MapPin />
              <span>{CONTACTS.LOCATION.TEXT}</span>
            </Link>
          </div>
        </div>
        <div className="md:max-w-[550px] w-full flex flex-col items-center gap-8">
          <QuoteModal />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-2">
        <div className="flex items-center justify-center gap-2.5 text-[#FFFFFF] text-[15px] sm:text-[17px]">
          <Link href={MENU.PRIVACY.LINK}>{MENU.PRIVACY.TEXT}</Link>
          <Link href={MENU.TERMS.LINK}>{MENU.TERMS.TEXT}</Link>
        </div>
        <p className="text-[#FFFFFF] text-center -mb-0.5 text-[12.5px] sm:text-[14px]">
          {CONTENT.FOOTER_COPYRIGHT}
        </p>
        <p className="text-[#FFFFFF] text-center text-[11px] sm:text-[11.5px]">
          {CONTENT.FOOTER_OWNERSHIP_NOTICE}
        </p>
      </div>
    </div>
  </footer>
);
export { Footer };
