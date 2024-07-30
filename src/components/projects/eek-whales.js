import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const eekWhales = {
  title: "eek-whales",
  summary: md`JS deep equals and more FP modules`,
  image: "/clip/eek-whales.png",
  alt: "pixel art of a happy blue whale",
  x: -1560,
  links: [
    {
      title: "npm",
      url: "https://www.npmjs.com/package/eek-whales",
      icon: "package",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/eek-whales",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/eek-whales",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/eek-whales",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/eek-whales",
      icon: "gitlab",
    },
  ],
  description: md`
Eek-whales is a collection of JavaScript modules for functional programming. It
started out as just a "deep equals" function and several supporting predicate
functions to properly compare types. I've since added some combinators and a
pseudorandom number generator using a [linear congruential generator][1]
algorithm.

This project is a work in progress but is already quite useful. The \`src\`
directory on my computer still has ~200 modules that need testing and bug fixes.
Eek-whales was originally written in JavaScript with no type checking at all. In
an effort to add type safety, strict runtime type checking was implemented
everywhere. This slowed down all of my tests by a significant amount (ranging
from 2 to 25 times slower) and I stopped working on the project for a while.

I've decided to remove all of the runtime type checking and started rewriting
everything in TypeScript. This allows developers (me) to have type checking at
compile time with the option to use the included predicate funtions to check
types for values that are unknown until runtime. I'm confident that this change
will improve the balance between speed and type safety.

Keep an eye on this project for upcoming modules including several Monoids (Sum,
Product, Any, All, Min, Max, Endo), combinators (compose, flip, applyTo), Maybe,
Either, Task, and more!!!

[1]: https://en.wikipedia.org/wiki/Linear_congruential_generator`
}
