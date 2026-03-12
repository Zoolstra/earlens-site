import { PatientHero } from "@/components/patient/PatientHero";
import { WhatIsEarlens } from "@/components/patient/WhatIsEarlens";
import { Comparison } from "@/components/patient/Comparison";
import { HowItWorks } from "@/components/patient/HowItWorks";
import { LifeWith } from "@/components/patient/LifeWith";
import { PatientStories } from "@/components/patient/PatientStories";
import { PatientFAQ } from "@/components/patient/PatientFAQ";
import { PatientCTA } from "@/components/patient/PatientCTA";

export const metadata = {
  title: "Earlens for Patients — Rediscover the Sounds You've Been Missing",
  description: "Learn how Earlens uses a tiny lens on your eardrum to deliver the richest, most natural sound of any hearing aid.",
};

export default function PatientPage() {
  return (
    <>
      <PatientHero />
      <WhatIsEarlens />
      <Comparison />
      <HowItWorks />
      <LifeWith />
      <PatientStories />
      <PatientFAQ />
      <PatientCTA />
    </>
  );
}
