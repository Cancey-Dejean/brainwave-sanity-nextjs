import {
  Hero,
  Benefits,
  Collaboration,
  Services,
  Pricing,
  Roadmap,
} from "../components";

export const PageContent = (section: any) => {
  switch (section._type) {
    case "hero":
      return <Hero />;
    case "benefits":
      return <Benefits />;
    case "collaboration":
      return <Collaboration />;
    case "services":
      return <Services />;
    case "pricing":
      return <Pricing />;
    case "roadmap":
      return <Roadmap />;
    default:
      return null;
  }
};
