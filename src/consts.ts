import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Henry Khaung",
  EMAIL: "henrykhaung23@gmail.com",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my personal website.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/hkhaung"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/henrykhaung",
  }
];
