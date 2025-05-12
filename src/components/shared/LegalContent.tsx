import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACTS } from "@/constants/contacts";
import { CONTENT } from "@/constants/content";
import Link from "next/link";

type LegalContent = {
  LONG_DESCRIPTION?: string;
  DESCRIPTION?: string;
  LIST?: Array<string>;
  TITLE?: string;
};

interface Props {
  content: Array<LegalContent>;
}

const LegalContent: React.FC<Props> = ({ content }) => (
  <div className="max-w-3xl mx-auto flex flex-col gap-4">
    {content.map((item, index) => (
      <div key={index} className="flex flex-col gap-4">
        {item.TITLE && <h2 className="text-xl font-bold">{item.TITLE}</h2>}

        {item.DESCRIPTION && (
          <p className="text-sm leading-[21px]">{item.DESCRIPTION}</p>
        )}

        {item.LIST && (
          <ul className="text-primary-grey text-sm pl-8 list-disc">
            {item.LIST.map((listItem, listIndex) => (
              <li key={listIndex} className="mb-3 last:mb-0">
                {listItem}
              </li>
            ))}
          </ul>
        )}

        {item.LONG_DESCRIPTION && (
          <p className="text-primary-grey text-sm leading-[21px]">
            {item.LONG_DESCRIPTION}
          </p>
        )}
      </div>
    ))}

    <div className="flex flex-col gap-4 mt-6">
      <h2 className="text-xl font-bold">{CONTENT.CONTACT_DETAILS_TITLE}</h2>
      <p className="text-black text-sm leading-[21px]">
        {CONTENT.CONTACT_DETAILS_DESCRIPTION}
      </p>
      <ul className="text-primary-grey text-sm list-disc font-semibold">
        <div className="flex flex-col gap-2.5">
          <Link
            href={CONTACTS.EMAIL.LINK}
            className="flex items-center gap-2.5 w-fit"
          >
            <Mail size={18} />
            <span>{CONTACTS.EMAIL.TEXT}</span>
          </Link>
          <Link
            href={CONTACTS.PHONE.LINK}
            className="flex items-center gap-2.5 w-fit"
          >
            <Phone size={18} />
            <span>{CONTACTS.PHONE.TEXT}</span>
          </Link>
          <Link
            href={CONTACTS.LOCATION.LINK}
            className="flex items-center gap-2.5 w-fit"
          >
            <MapPin size={18} />
            <span>{CONTACTS.LOCATION.TEXT}</span>
          </Link>
        </div>
      </ul>
    </div>
  </div>
);

export { LegalContent };
