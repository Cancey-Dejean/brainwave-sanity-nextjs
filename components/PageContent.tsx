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
      return <Hero key={section._key} {...section} />;
    case "benefits":
      return <Benefits key={section._key} {...section} />;
    case "collaboration":
      return <Collaboration key={section._key} {...section} />;
    case "services":
      return <Services key={section._key} {...section} />;
    case "pricing":
      return <Pricing key={section._key} {...section} />;
    case "roadmap":
      return <Roadmap key={section._key} {...section} />;
    default:
      return <div className="py-10 text-center"><h1>Add Section content to page in Sanity CMS</h1></div>;
  }
};
