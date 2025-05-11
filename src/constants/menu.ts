const NAV_MENU = {
  HOW_IT_WORKS: { LINK: "#how-it-works", TEXT: "How It Works" },
  MATERIALS: { LINK: "#materials", TEXT: "Material Options" },
  CONTACT_US: { LINK: "#contact-us", TEXT: "Contact Us" },
  PORTFOLIO: { LINK: "#portfolio", TEXT: "Portfolio" },
  SERVICES: { LINK: "#services", TEXT: "Services" },
  PRICING: { LINK: "#pricing", TEXT: "Pricing" },
  FAQ: { LINK: "#faq", TEXT: "FAQ" },
};

const ADDITIONAL_LINKS = {
  TERMS: { LINK: "/terms-and-conditions", TEXT: "Terms and Conditions" },
  PRIVACY: { LINK: "/privacy-policy", TEXT: "Privacy Policy" },
  PORTFOLIO: { LINK: "/portfolio", TEXT: "View Our Work" },
  HOME: { LINK: "/", TEXT: "Home" },
};

const enumeratedLinks = Object.fromEntries(
  Object.entries(ADDITIONAL_LINKS).map(([key, value]) => [
    key,
    { value, enumerable: false },
  ])
);

type NavMenuType = typeof NAV_MENU & typeof ADDITIONAL_LINKS;

const MENU = Object.defineProperties(NAV_MENU as NavMenuType, enumeratedLinks);

export { MENU };
