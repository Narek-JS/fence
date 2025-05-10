"use client";

import { CONTENT } from "@/constants/content";
import { useForm } from "react-hook-form";

type FormValues = {
  company_name: string;
  full_name: string;
  message: string;
  email: string;
  phone: string;
};

const QuoteForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      className="w-full flex flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-2.5">
        <div className="relative w-full">
          <input
            className="w-full h-[48px] rounded bg-[#FFFFFF] p-3"
            placeholder={CONTENT.QUOTE_FULL_NAME_PLACEHOLDER}
            {...register("full_name", { required: "Full name is required" })}
          />
          {errors.full_name && (
            <p className="absolute -bottom-6 text-[#DC2626]">
              {errors.full_name.message}
            </p>
          )}
        </div>
        <div className="relative w-full">
          <input
            className="w-full h-[48px] rounded bg-[#FFFFFF] p-3"
            placeholder={CONTENT.QUOTE_COMPANY_NAME_PLACEHOLDER}
            {...register("company_name", {
              required: "Company name is required",
            })}
          />
          {errors.company_name && (
            <p className="absolute -bottom-6 text-[#DC2626]">
              {errors.company_name.message}
            </p>
          )}
        </div>
      </div>
      <div className="relative w-full">
        <input
          className="w-full h-[48px] rounded bg-[#FFFFFF] p-3"
          placeholder={CONTENT.QUOTE_EMAIL_PLACEHOLDER}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="absolute -bottom-6 text-[#DC2626]">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative w-full">
        <input
          className="w-full h-[48px] rounded bg-[#FFFFFF] p-3"
          placeholder={CONTENT.QUOTE_PHONE_PLACEHOLDER}
          {...register("phone", {
            required: "Phone number is required",
            minLength: { value: 10, message: "Phone number too short" },
          })}
        />
        {errors.phone && (
          <p className="absolute -bottom-6 text-[#DC2626]">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className="relative w-full">
        <textarea
          className="w-full rounded bg-[#FFFFFF] resize-none p-3 h-[120px]"
          placeholder={CONTENT.QUOTE_TEXTAREA_PLACEHOLDER}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="absolute -bottom-4 text-[#DC2626]">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="h-[48px] rounded text-[var(--primary)] font-semibold text-[18px] cursor-pointer bg-[#FFFFFF] shadow"
      >
        {CONTENT.QUOTE_SUBMIT}
      </button>
    </form>
  );
};

export { QuoteForm };
