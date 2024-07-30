import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const cliModules = {
  title: "cli modules",
  summary: md`JS modules for building command-line interfaces`,
  image: "/clip/ansi-demo.png",
  alt: "",
  x: -1660,
  links: [
    {
      title: "ansi",
      url: "https://www.npmjs.com/package/@rasch/ansi",
      icon: "package",
    },
    {
      title: "prompt",
      url: "https://www.npmjs.com/package/@rasch/prompt",
      icon: "package",
    },
    {
      title: "argv",
      url: "https://www.npmjs.com/package/@rasch/argv",
      icon: "package",
    },
    {
      title: "lil-argv",
      url: "https://www.npmjs.com/package/lil-argv",
      icon: "package",
    },
  ],
  description: md`
Here are a few modules that I'm using to build user interfaces for command line
applications. They are fairly low-level but very flexible.

- [ansi] provides ANSI escape sequences as strings to style the UI and/or draw
  in the terminal.

- [prompt] is a module to get input from the user asynchronously and to
  optionally conceal or mask the input.

- [argv] is just another CLI argument parser, but better because it was invented
  here.

- [lil-argv] is another argument/option parser, but in only four lines of code
  and not suitable for more complex argv parsing needs.

[ansi]: https://github.com/rasch/ansi
[prompt]: https://github.com/rasch/prompt
[argv]: https://github.com/rasch/argv
[lil-argv]: https://github.com/rasch/lil-argv`
}
