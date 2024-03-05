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
];
