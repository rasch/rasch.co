import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const speed = {
  title: "speed",
  summary: md`speed reading in the terminal`,
  image: "/clip/speed.gif",
  alt: "animated gif of the speed reader displaying the poem, &quot;When I Heard the Learn’d Astronomer&quot; by Walt Whitman",
  x: -1460,
  links: [
    {
      title: "npm",
      url: "https://www.npmjs.com/package/@rasch/speed",
      icon: "package",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/speed",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/speed",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/speed",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/speed",
      icon: "gitlab",
    },
  ],
  description: md`
Speed reading is definitely not my favorite way to read anything and it's nearly
impossible to consume non-fiction materials with adequate comprehension. Try
learning data structures when only a single word is displayed at a time. Ha!
Since audiobooks are my preferred method for reading Stephen King novels, then
what do I actually use this speed reader for? For training to reduce
subvocalization of course! With enough practice it *might* improve reading speed.`
}
