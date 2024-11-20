import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const bf = {
  title: "bf",
  summary: md`brainfuck interpreter in 249 bytes of JavaScript`,
  image: "/clip/taffy.gif",
  alt: "Taffy Dare (&quot;Captain Caveman and the Teen Angels&quot;) coming up with &quot;Another Daffy Taffy Plan&quot;",
  x: -1160,
  links: [
    {
      title: "Blog Post",
      url: "/writing/code-golf-bf/",
      icon: "edit-2",
    },
    {
      title: "Demo",
      url: "https://rasch.srht.site/bf/demo/",
      icon: "zap",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/bf",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/bf",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/bf",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/bf",
      icon: "gitlab",
    },
  ],
  description: md`
Zowie! Code golf is a fun way to get to know a language. It's a chance to break
all of the rules just to see what happens. And when you're ready to follow the
rules again, the documentation for your favorite linter is a great tool to learn
the problem areas within a language.

With a bit of [golfing][1], I was able to create a [brainfuck][2] interpreter
within a single, bodyless, JavaScript \`for\` loop. There's probably someone out
there that can make an even smaller version, and if you're that person, please
share it in the comments of my [blog post][3]. Here is my unminified
implementation of the brainfuck [esoteric language][4].

\`\`\`javascript
for($=Array(3e4),_=[],f=u=c=k=0;
k<B[F='length'];
C=B[U='charCodeAt'](k++)-44,
u&&(u+=0|1/(48-C),C=3),
K=$[f]=~~$[f]-~~(1/C),
f+=0|1/(C-17),
C||I[F]>c&&($[f]=I[U](c++)),
C^2||O(String.fromCharCode(K)),
C^47||(K?_.push(k):u++),
C^49||(K?k=_[_[F]-1]:_.pop()));
\`\`\`

[1]: https://en.wikipedia.org/wiki/Code_golf
[2]: https://en.wikipedia.org/wiki/Brainfuck
[3]: https://www.rasch.co/writing/code-golf-bf/
[4]: https://en.wikipedia.org/wiki/Esoteric_programming_language`
}
