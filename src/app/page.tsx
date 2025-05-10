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
import { Footer } from "@/components/Footer";
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
      <Footer />
    </Fragment>
  );
};

export default Home;
