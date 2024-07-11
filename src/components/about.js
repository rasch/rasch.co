import { css, html, md } from "@rasch/reno"
import { icon } from "./icon.js"

const myName = html`
<button type="button" tabindex="-1" id="name" class="name">
  Rand Schneck️ ${icon("volume-1")}
</button>`

const content = md`
Hi. My name is ${myName} (he/him). I'm a web developer living in Traverse City,
Michigan. It's hard to write an about me thing without the word "I" all over the
place. *I this... I that...* I enjoy traveling, nature, gardens and
architecture. I know! Boring. Those are things almost everybody likes. I hate
ticks! Again, who doesn't hate ticks? ~~They're parasitic spiders that burrow
their entire head into~~ They spread disease.

Despite my [Landscape Architecture education][1], I write more JavaScript than
prose and poetry combined. I colored "The Gray's Anatomy Coloring Book" and read
"The Way Things Work" front to back as a child, so I could probably perform
surgery in an emergency. I'm also a Linux geek with no Windows. jk. I have
thirteen windows so I can see the gardens that I enjoy!

[1]: https://www.canr.msu.edu/spdc/programs/Landscape-Architecture/la_undergraduate_degree
`

export const about = () => html`
<div class="about card">
  <div class="content">${content}</div>
  <audio src="pronunciation.mp3"></audio>
</div>`

export const aboutCSS = () => css`
.about {
  width: calc(100% - 2rem);
  max-width: 512px;
  margin-bottom: 3rem;
}

.about .content {
  background-color: var(--bg);
}

.about .name {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0;
  border: none;
  cursor: pointer;
  text-decoration: underline dotted;
  font-variant: small-caps;
  background: none;
  color: var(--fg);
  user-select: text;
}

.no-js .about .name {
  display: inline;
  cursor: text;
  text-decoration: none;
}

.no-js .about .name .icon {
  display: none;
}`
