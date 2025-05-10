import { CONTACTS } from "@/constants/contacts";
import { MenuIcon, Phone } from "lucide-react";
import { MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

const SiteHeader: React.FC = () => (
  <div className="w-full flex items-center justify-between gap-[20px]">
    <Image
      className="rounded object-none h-[65px] min-w-[120px]"
      src="/images/logo.png"
      width={120}
      height={65}
      alt="Logo"
    />

    <div className="hidden lg:flex items-center justify-between gap-[25px] h-[52px] bg-[#FFFFFF] rounded-full px-[20px]">
      {Object.values(MENU).map(({ LINK, TEXT }, index) => (
        <Link
          className="relative text-[18px] text-nowrap font-semibold tracking-normal after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--primary)]"
          key={index}
          href={LINK}
        >
          {TEXT}
        </Link>
      ))}
    </div>

    <div className="flex items-center gap-[20px]">
      <Link
        className="flex items-center gap-2 text-[#FFFFFF] text-nowrap [.header_&]:text-[#000]"
        href={"tel:" + CONTACTS.PHONE.LINK}
      >
        <Phone size={24} />
        <span className="relative text-[#FFFFFF] [.header_&]:text-[#000] text-[22px] font-semibold [.header_&]:after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--primary)]">
          {CONTACTS.PHONE.TEXT}
        </span>
      </Link>

      <button className="lg:hidden text-white">
        <MenuIcon size={28} className="[.header_&]:text-[#000]" />
      </button>
    </div>
  </div>
);

export { SiteHeader };
