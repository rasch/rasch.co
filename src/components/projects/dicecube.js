import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const dicecube = {
  title: "dicecube",
  summary: md`dice and shuffle images on HTML canvas`,
  image: "clip/diced-sedum.png",
  alt: "",
  x: -1060,
  links: [
    {
      title: "Website",
      url: "https://rasch.co/dicecube",
      icon: "globe",
    },
    {
      title: "npm",
      url: "https://www.npmjs.com/package/dicecube",
      icon: "package",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/dicecube",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/dicecube",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/dicecube",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/dicecube",
      icon: "gitlab",
    },
  ],
  description: md`
\`Dicecube\` is a JavaScript module for generating tiles from an image and
rendering them on an HTML Canvas. The image can be rendered with gaps, shuffled,
or even drawn/erased one tile at a time. [Check out the live demo][1] to see a
few examples of \`Dicecube\` in action!

Why is it called \`Dicecube\`? The image tiles are technically squares! I know,
\`Dicecube\` is currently stuck in flatland, but I wanted to keep my options open in
case another plane is discovered.

[1]: https://rasch.co/dicecube`
}
