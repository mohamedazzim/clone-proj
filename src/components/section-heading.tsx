import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`mb-5 inline-flex rounded-md px-2.5 py-1 text-sm font-medium ${
            inverse ? "bg-white/10 text-white" : "bg-gold/10 text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-balance font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-[52px] ${inverse ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      {description && (
        <div className={`mt-5 text-base leading-7 sm:text-lg ${inverse ? "text-white/70" : "text-black/65"}`}>
          {description}
        </div>
      )}
    </div>
  );
}
