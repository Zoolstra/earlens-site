import { ProviderHero } from "@/components/provider/ProviderHero";
import { ProviderStats } from "@/components/provider/ProviderStats";
import { ProviderResearch } from "@/components/provider/ProviderResearch";
import { ProviderFAQ } from "@/components/provider/ProviderFAQ";
import { ProviderCTA } from "@/components/provider/ProviderCTA";

export const metadata = {
  title: "Earlens for Providers — Differentiate Your Practice",
  description: "Join the Earlens provider network. Access breakthrough hearing technology backed by 10+ years of peer-reviewed research.",
};

export default function ProviderPage() {
  return (
    <>
      <ProviderHero />
      <ProviderStats />
      <ProviderResearch />
      <ProviderFAQ />
      <ProviderCTA />
    </>
  );
}
