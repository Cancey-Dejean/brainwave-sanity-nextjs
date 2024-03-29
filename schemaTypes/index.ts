import page from "./pages/page";
import { hero } from "./sections/hero";
import { benefits } from "./sections/benefits";
import { collaboration } from "./sections/collaboration";
import { services } from "./sections/services";
import { pricing } from "./sections/pricing";
import { roadmap } from "./sections/roadmap";
import siteSettings from "./globals/siteSettings";
import { header } from "./globals/header";
import { footer } from "./globals/footer";
import { navLink } from "./components/navLink";
import { button } from "./components/button";
import { imageLink } from "./components/imageLink";
import { gradientCard } from "./components/gradientCard";
import { checkTextRow } from "./components/checkTextRow";
import { collabApp } from "./components/collabApp";
import { pricingCard } from "./components/pricingCard";
import { roadmapCard } from "./components/roadmapCard";

export const schemaTypes = [
  page,
  hero,
  benefits,
  collaboration,
  services,
  pricing,
  roadmap,
  siteSettings,
  button,
  header,
  footer,
  navLink,
  imageLink,
  gradientCard,
  checkTextRow,
  collabApp,
  pricingCard,
  roadmapCard,
];
