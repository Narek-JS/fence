import {
  MaterialSection,
  HowItWorksSection,
  RequirementsSection,
} from "@/components/sections";
import { Banner } from "@/components/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <MaterialSection />
      <HowItWorksSection />
      <RequirementsSection />
    </>
  );
};

export default Home;
