const NAV_MENU = {
  MATERIALS: {
    TEXT: "Material Options",
    LINK: "/#materials",
    ID: "materials",
  },
  HOW_IT_WORKS: {
    LINK: "/#how-it-works",
    TEXT: "How It Works",
    ID: "how-it-works",
  },
  SERVICES: {
    LINK: "/#services",
    TEXT: "Services",
    ID: "services",
  },
  PRICING: {
    LINK: "/#pricing",
    TEXT: "Pricing",
    ID: "pricing",
  },
  FAQ: {
    LINK: "/#faq",
    TEXT: "FAQ",
    ID: "faq",
  },
  CONTACT_US: {
    LINK: "/#contact-us",
    TEXT: "Contact Us",
    ID: "contact-us",
  },
};

const ADDITIONAL_LINKS = {
  TERMS: {
    LINK: "/terms-and-conditions",
    TEXT: "Terms and Conditions",
    ID: "terms-and-conditions",
  },
  PRIVACY: {
    LINK: "/privacy-policy",
    TEXT: "Privacy Policy",
    ID: "privacy-policy",
  },
  PORTFOLIO: {
    TEXT: "View Our Work",
    LINK: "/portfolio",
    ID: "portfolio",
  },
  HOME: {
    TEXT: "Home",
    ID: "home",
    LINK: "/",
  },
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
