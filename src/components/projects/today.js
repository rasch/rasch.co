import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const today = {
  title: "today",
  summary: md`a todo list and calendar with support for recurring tasks`,
  image: "/clip/mallrats.jpg",
  alt: "Jay and Silent Bob assault the Easter bunny in the 1995 film &quot;Mallrats&quot;",
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
  description: md`
It's easy to get overwhelmed by a **large** todo list. \`today\` is a tool to
help _get things done!_ It offers a view into your todo list with just the tasks
that need to get done today. The duo of \`today\` combined with my [pomodoro
timer] is a productivity powerhouse (especially when working from home).

\`today\` is written as a POSIX shell script and should be fairly portable
between UNIX-like systems. It has been designed to run using the utilities
provided by \`busybox\` and is tested on Alpine Linux with the \`ash\` shell. It
has also been tested on Arch Linux with \`bash\` and GNU coreutils.

How does \`today\` work? It reads tasks from a plain-text file. The syntax of
the tasks is inspired by Markdown unordered lists and GFM task lists with
additional markup for priority, tags, and context. For example:

\`\`\`plaintext
- [A] high priority task
- [ ] a task with +important tag
- [x] completed task

- recurring task @daily
- @2025-04-19 13:20 dentist appointment

- Martin Luther King Jr. Day !3rd-Monday-of-January
\`\`\`

If interested, a more complete [example todo.md file][example] is available.

\`today\` does **NOT** modify the todo list file. I prefer to maintain my todo
list with my text editor rather than through an interface (too slowww). The only
problem with this approach is that it can be error prone. A typo can mean
something from your calendar might not show up when running the \`today\`
command. It's fine though, since I don't do typos :)

\`today\` isn't just about today! Here are some shell aliases to peek at
yesterday or tomorrow.

\`\`\`sh
alias yesterday='today -1'
alias tomorrow='today +1'
\`\`\`

The main challenge for this project didn't surface until I decided to implement
holiday support. Thanks Easter! I wrote a [shell script that uses the Anonymous
Gregorian Algorithm][easter] to calculate Easter and other Easter related
holidays, such as: Ash Wednesday, Mardi Gras, and Good Friday. This project is
also full of complex [regular] [expressions] for parsing date contexts and these
are much harder to maintain than they were to write. Eventually, I would like to
write a real parser for this project to enable more complex contexts, for
example: \`@friday-and-13th\` and
\`@if-monday-and-12-25-then-tuesday-else-monday\`.

[pomodoro timer]: https://rasch.co/pt?v=15
[example]: https://git.sr.ht/~rasch/today/blob/main/example/todo.md
[easter]: https://git.sr.ht/~rasch/today/tree/main/item/src/easter.sh
[regular]: https://git.sr.ht/~rasch/today/tree/main/item/src/generate_date_tokens.sh
[expressions]: https://git.sr.ht/~rasch/today/tree/main/item/src/strip_keywords.sh`
}
