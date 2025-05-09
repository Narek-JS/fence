"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import classNames from "classnames";

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left cursor-pointer"
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown
          className={classNames("h-5 w-5 transform transition-transform", {
            "rotate-180": open,
          })}
        />
      </button>
      <div
        className={classNames(
          "overflow-hidden transition-all duration-300 text-gray-600",
          { "max-h-40 mt-2 mr-10": open, "max-h-0": !open }
        )}
      >
        <p className="text-base">{answer}</p>
      </div>
    </div>
  );
};
