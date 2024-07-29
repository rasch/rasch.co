import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const reno = {
  title: "reno",
  summary: md`the biggest little static site generator in the world!`,
  image: "/clip/the-wizard.jpg",
  alt: "The neon sign proclaims, &quot;Reno The Biggest Little City In The World&quot;, from the 1989 film &quot;The Wizard&quot;",
  x: -1260,
  links: [
    {
      title: "npm",
      url: "https://www.npmjs.com/package/@rasch/reno",
      icon: "package",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/reno",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/reno",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/reno",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/reno",
      icon: "gitlab",
    },
  ],
  description: md`
Reno started as an ultra-minimal module to build HTML components using
JavaScript template literals. This 61 byte identity function actually does
nothing except enable syntax highlighting in supported text editors. 

\`\`\`javascript
export const html = (s, ...v) => String.raw({ raw: s }, ...v)
\`\`\`

\`\`\`javascript
import { html } from "@rasch/reno"
export const heading = title => html\`<h1>\${title}</h1>\`
\`\`\`

After building a small website using just this function, I decided to expand
Reno to enable CSS and Markdown components and to give it blogging abilities. To
keep things simple, templates and posts are just [dynamic imports][1]. Now with
only 69 lines of code (excluding comments and blank lines), Reno is used to
generate my personal website and blog. [Check out the code for rasch.co here!][2]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
[2]: https://git.sr.ht/~rasch/rasch.co/tree`
}
