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
import { Header } from "@/components/Header";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Header />
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
