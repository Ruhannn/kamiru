export type Config = {
  name: string;
  bio: string;
  about: string;
  // education: string;
  // projects: links ,blog
  skills: string[];
  extra: {
    email: { label: string; url: string };
    website: { label: string; url: string };
    github: { label: string; url: string };
    // facebook: { label: string; url: string };
    // linkedIn: string;
  };
};
