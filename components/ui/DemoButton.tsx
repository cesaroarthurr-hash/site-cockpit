"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Icon from "./Icon";

const CAL_LINK = "arthur-cesaro-2bgnnx/30min";
const CAL_NS = "30min";

export default function DemoButton({
  children = "Demander une démo",
  variant = "primary",
  withArrow = false,
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "white" | "dark";
  withArrow?: boolean;
  className?: string;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NS });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const styles: Record<string, string> = {
    primary:
      "bg-[#8DC63F] text-white hover:bg-[#6fa32e] shadow-lg shadow-[#8DC63F]/25 hover:shadow-[#8DC63F]/40",
    dark: "bg-night text-white hover:bg-night-50 shadow-lg shadow-black/20",
    white:
      "bg-white text-night hover:bg-gray-50 shadow-lg shadow-black/10",
    ghost:
      "bg-white/5 text-white border border-white/15 hover:bg-white/10 backdrop-blur",
  };

  return (
    <button
      data-cal-namespace={CAL_NS}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${styles[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}
