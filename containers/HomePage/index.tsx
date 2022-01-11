import Layout from "components/Layout";
import HeroSection from "components/Hero";
import KeyFeatures from "components/KeyFeatures";
import SubscribeCTA from "components/SubscribeCTA";
import TestimonialSection from "components/Testimonials";
import SneakPeak from "components/SneakPeak";
import { Seo } from "components/Seo";

const HomePage = () => {
  return (
    <>
      <Seo type="website" />
      <Layout>
        <HeroSection />
        <KeyFeatures />
        <TestimonialSection />
        <SubscribeCTA />
        <SneakPeak />
      </Layout>
    </>
  );
};

export default HomePage;
