import type { Config } from "./type";

import { c } from "./utils";

// ? '\n' are important for the formatting of the output, so don't remove them. - @Ruhannn
const config: Config = {
  name: "Ruhan Rouf",
  bio: "\ncosine_similarity(\"fullstack\", \"me\") :3\n",
  about: `Hey, I am Ruhan.I am a ${c.bold.magenta("fullstack")} developer.
I try to make things ${c.bold.magenta("super fast")} and ${c.bold.magenta("beautiful")} as well.
In my free time, I like to read ${c.bold.magenta("books")} a lot and think about my future works.
I particularly enjoy learning about something. I have a passion for ${c.bold.magenta("technologies")}.\n`,
  extra: {
    github: { label: "@Ruhannn", url: "https://github.com/ruhannn" },
    email: { label: "ruhanrouf@proton.me", url: "ruhanrouf@proton.me" },
    website: { label: "ruhann.me", url: "https://ruhann.me" },
    // facebook: { label: "Facebook", url: "https://facebook.com/ruhanrouf" },
  },
  skills: ["C", "TypeScript", "Python", "Next.js", "Node.js", "MongoDB", "Docker", "Git", "Linux"],
};

export default config;
