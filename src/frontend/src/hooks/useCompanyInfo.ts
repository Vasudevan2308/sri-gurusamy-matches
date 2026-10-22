import type { CompanyInfo } from "@/types";

export function useCompanyInfo(): { data: CompanyInfo; isLoading: boolean } {
  // Static company data — backend schema matches this shape exactly
  const data: CompanyInfo = {
    name: "Sri Gurusamy Matches Unit",
    tagline:
      "LIGHT UP YOUR WORLD WITH OUR SAFEST MATCHES - EVERY STRIKE, SAFE AND BRIGHT",
    address: "3/760-B, Naranapuram Road, Anuppankulam, Sivakasi - 626 189",
    phones: ["9443375091", "9443375191", "9489311091"],
    email: "srigurusamymatchesunit@gmail.com",
    foundingYear: 2007,
    description:
      "We are in the Market Since 2007 Manufacturing and Supplying the Best Quality Safety Matches All Over India and Exporting Outside India Based on the requirement of Dealers and Customers.",
  };

  return { data, isLoading: false };
}
