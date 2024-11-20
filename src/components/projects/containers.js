import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const containers = {
  title: "containers",
  summary: md`scripts to build and run OCI containters`,
  image: "/clip/he-man.gif",
  alt: "Skeletor's hover robots in pursuit of He-Man and King Randor as they escape from Snake Mountain",
  x: -960,
  links: [
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/containers",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/containers",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/containers",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/containers",
      icon: "gitlab",
    },
  ],
  description: md`
When I first started using Linux in 2008, I was amazed at all of the free and
open source software available. I installed *everything*! And updates took
forever. Over time, I scaled back until I hit the other extreme where I install
nothing and it is *so* much better. When I discovered Docker, my journey to run
everything isolated in containers began. Today my main OS is a minimal Linux
system with just the essentials needed to run \`podman\`, \`Xorg\`,
\`pulseaudio\`, and a terminal emulator. At the heart of this containers project
is a little script called [\`xpod\`][1], which enables a simple permissions
like system for allowing containers to connect to the hosts audio, graphics
card, display, fonts and more. The script is designed to use with \`podman\` but
most features should also work with \`docker\`.

Also included in this project are scripts to build and run over 100 different
applications in containers. This project started out as my dotfiles but now
actually bundles the applications and dotfiles together in containers. Since my
personal customization preferences are used here, please feel free to fork this
project and make it your own! None of my personal information, such as my name
or email address, is bundled in the containers. These are set using environment
variables (for example in the \`git\` container). In the future, I plan to move
my customizations to a new project that utilizes volumes to connect to the
containers. A few more planned features include:

- support for Wayland and Pipewire
- ability to easily change color schemes
- publish containers to a public registry

Why all this effort just to run everything in containers? I like to keep a clean
and stable operating system, but this requires extreme diligence to maintain if
I want to test out applications. Containers have enabled my workflow to include
much more experimentation with less risk of borking my system. It's also nice to
have a \`firefox\` container that can mount my personal configuration, add-ons
and history. Then when I want to test out a website, I can run the browser with
its default configuration. These containers are used as my personal development
environment (PDE) and there's some games too!

[1]: https://git.sr.ht/~rasch/containers/tree/main/item/xpod`
}
