import { ProviderHero } from "@/components/provider/ProviderHero";
import { ProviderStats } from "@/components/provider/ProviderStats";
import { ProviderHappyPatients } from "@/components/provider/ProviderHappyPatients";
import { ProviderCTA } from "@/components/provider/ProviderCTA";
import { ProviderTestimonialVideos } from "@/components/provider/ProviderTestimonialVideos";

export const metadata = {
  title: "Earlens for Providers — Differentiate Your Practice",
  description: "Join the Earlens provider network. Access breakthrough hearing technology backed by 10+ years of peer-reviewed research.",
};

export default function ProviderPage() {
  return (
    <>
      <ProviderHero />
      <ProviderStats />
      <ProviderHappyPatients />
      <ProviderTestimonialVideos />
      <ProviderCTA />
    </>
  );
}
