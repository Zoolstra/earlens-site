import { ProviderResearch } from "@/components/provider/ProviderResearch";
import { PageHero } from "@/components/PageHero";
import { ProviderCTA } from "@/components/provider/ProviderCTA";

export const metadata = {
  title: "Earlens Research — Peer-Reviewed Clinical Evidence",
  description: "Explore peer-reviewed studies, trade journal articles, and conference presentations supporting Earlens technology.",
};

export default function ProviderResearchPage() {
  return (
    <>
      <PageHero
        gradient
        label="Clinical Evidence"
        title="Research & Publications"
        subtitle="Over a decade of peer-reviewed research, clinical studies, and published trade journal articles."
      />
      <ProviderResearch />
      <ProviderCTA />
    </>
  );
}
