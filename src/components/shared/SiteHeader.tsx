import { CONTACTS } from "@/constants/contacts";
import { MENU } from "@/constants/menu";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SiteHeader: React.FC = () => (
  <div className="w-full flex items-center justify-between">
    <Image
      className="rounded object-none h-[65px]"
      src="/images/logo.png"
      width={120}
      height={65}
      alt="Logo"
    />

    <div className="h-[52px] flex items-center justify-between gap-[25px] bg-[#FFFFFF] rounded-full px-[20px]">
      {Object.values(MENU).map(({ LINK, TEXT }, index) => (
        <Link
          className="relative text-[18px] font-semibold tracking-normal after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--primary)]"
          key={index}
          href={LINK}
        >
          {TEXT}
        </Link>
      ))}
    </div>

    <Link
      className="flex items-center gap-2 text-[#FFFFFF] [.header_&]:text-[#000]"
      href={"tel:" + CONTACTS.PHONE.LINK}
    >
      <Phone size={24} />
      <span className="relative text-[#FFFFFF] [.header_&]:text-[#000] text-[22px] font-semibold [.header_&]:after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--primary)]">
        {CONTACTS.PHONE.TEXT}
      </span>
    </Link>
  </div>
);

export { SiteHeader };
