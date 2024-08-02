import { md } from "@rasch/reno"

/**
 * @type {import("./index.js").Project}
 */
export const pomodoro = {
  title: "pomodoro",
  summary: md`a pomodoro timer in a browser tab`,
  image: "/clip/pomodoro.png",
  alt: "examples of the pomodoro timer running in a Firefox browser tab",
  x: -1360,
  links: [
    {
      title: "Website",
      url: "https://rasch.co/pt?v=15",
      icon: "globe",
    },
    {
      title: "npm",
      url: "https://www.npmjs.com/package/@rasch/pt",
      icon: "package",
    },
    {
      title: "SourceHut",
      url: "https://git.sr.ht/~rasch/pomodoro",
      icon: "git-pull-request",
    },
    {
      title: "Codeberg",
      url: "https://codeberg.org/rasch/pomodoro",
      icon: "codeberg",
    },
    {
      title: "GitHub",
      url: "https://github.com/rasch/pomodoro",
      icon: "github",
    },
    {
      title: "GitLab",
      url: "https://gitlab.com/rasch/pomodoro",
      icon: "gitlab",
    },
  ],
  description: md`
Distractions always seem to happen at the worst possible time! Especially
working from home. That's why I made this pomodoro timer a few years ago and
have been using it regularly ever since. [The Pomodoro Technique][1] has helped
improve my productivity in several aspects.

- When the timer starts, I start. No more procrastinating on the less exciting
  or repetive tasks. Often, just forcing myself to start working on a dreadful
  task, I'll realize that it's not so bad (and sometimes even enjoyable).

- When the timer is running, I'm running. I love racing the clock to complete my
  task.

- When the timer is running, I don't allow myself to get distracted. When
  personal interruptions arise, they get pushed to break time. Work
  interruptions are pushed to the next work interval (depending on level of
  importance of course).

Since I'm often building web sites, the pomodoro timer has to work even if the
tab is in the background. With this constraint in mind, I decided to use the
browser tab for the UI. This allows for a favicon and a title. The title is used
to display the time remaining and the favicon is dynamically generated in a
canvas element. The favicon displays the total number of work cycles completed
and has a \`forestgreen\` background if it's time to work and a \`tomato\`
background if it is break time. The favicon's foreground color is \`papayawhip\`
BTW. The only major problem I've had so far is with \`setInterval\`. The
intervals run in a low-priority mode when the tab is in the background and the
timer doesn't function correctly. This was fixed by moving the interval to a
[Web Worker][2] and updating the UI when it posts a message every 1000ms.

The timer is configured using the query string of the URL. For examle to set the
notification volume to 15% and a 60 minute break after completing 8 pomodoros:

    https://rasch.co/pt/?v=15&x=3600

When I tried using the timer for a Tabata (a 4-minute cardio interval workout),
the favicon was too small and didn't always show on mobile browsers. I added
a full page UI that I can see even if my phone is on the other side of the room.
Let's go!

[1]: https://en.wikipedia.org/wiki/Pomodoro_Technique
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API`
}
