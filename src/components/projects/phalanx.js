import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const phalanx = {
  title: "phalanx",
  summary: md`an open-source, 28-key, ortholinear, staggered & split keyboard`,
  image: "i/600/phalanx.jpg",
  alt: "the first Phalanx keyboard plugged in and its red LED power indicator is illuminated",
  layout: "featured",
  x: 0,
  links: [
    {
      title: "Website",
      url: "https://www.rasch.co/phalanx/",
      icon: "globe",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/phalanx",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/phalanx",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/phalanx",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/phalanx",
      icon: "gitlab",
    },
  ],
  description: md`
One day, while writing some modules for a JavaScript project, I started feeling
more T. rex than human. Partly because I was king of the computer, but mostly
because of the shoulder and arm contortions required to awkwardly place my
fingers on the home row of a standard keyboard. I needed to split my board to
shed this thick dinosaur skin (and feathers?) and spread my wings like a
Pterodactyl. Okay, I'll stop with the dino metaphors (and probably the similia
too).

Most of the split keyboards on the market are priced a bit high and don't suit
my minimalist style. But after stumbling upon [a Ben Vallack video][1],
featuring his own custom keyboard, *I had to design and build one for myself!* I
spent the weekend learning the basics of [STM32 PCB design][2] and used
[KiCad][3] to design the PCB. While waiting for the electronics to be delivered,
I obsessed with creating the "perfect" layout using the [QMK Firmware][4]. After
a few [soldering tutorials][5] and the delivery of the materials, I was ready to
assemble my first board. It turned out awesome (meaning everything works despite
my less than stellar soldering abilities)! To distinguish between my keymap
design flaws and my skill issues, I first had to learn to type all over again.
It's an iterative process.

The Phalanx is an open-source DIY keyboard named after the [digital bones][6]
since it has the same number of keys as phalanges in human hands. That means it
is only **27%** of the size of a standard keyboard (by utilizing layers). All of
the files needed to get (or build) your own Phalanx are available on the [GitHub
releases page][7]. Please file an issue at any of the phalanx repositories or
send me an email with any questions or problems! Also be sure to [check out the
byte][8], an eight key, business card sized keyboard or macropad.

[1]: https://yewtu.be/watch?v=5RN_4PQ0j1A
[2]: https://www.youtube.com/watch?v=aVUqaB0IMh4
[3]: https://www.kicad.org/
[4]: https://qmk.fm/
[5]: https://www.youtube.com/watch?v=nyele3CIs-U
[6]: https://en.wikipedia.org/wiki/Phalanx_bone
[7]: https://github.com/rasch/phalanx/releases
[8]: https://git.sr.ht/~rasch/byte`,
}
