import {
  FaqSection,
  PricingSection,
  MaterialSection,
  FenceInfoSection,
  FenceRisksSection,
  HowItWorksSection,
  RequirementsSection,
} from "@/components/sections";
import { Banner } from "@/components/Banner";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <main>
        <MaterialSection />
        <HowItWorksSection />
        <RequirementsSection />
        <FenceInfoSection />
        <PricingSection />
        <FenceRisksSection />
        <FaqSection />
      </main>
    </Fragment>
  );
};

export default Home;
