import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const today = {
  title: "today",
  summary: md`a todo list and calendar with support for recurring tasks`,
  image: "/clip/mallrats.jpg",
  alt: "",
  layout: "featured",
  x: -320,
  links: [
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/today",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/today",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/today",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/today",
      icon: "gitlab",
    },
  ],
  description: md`COMING SOON!`
}
