import { css, html, md } from "@rasch/reno"
import { icon } from "./icon.js"

const myName = html`
<span id="name" class="name" tabindex=0 title="click for audio pronunciation">
  Rand Schneck️ ${icon("volume-1")}
</span>`

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
<div class="about card">${content}</div>
<audio src="pronunciation.mp3"></audio>`

export const aboutCSS = () => css`
.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 2rem);
  max-width: 512px;
  margin-bottom: 3rem;
}

.about .name {
  display: inline-flex;
  gap: 0.35rem;
  cursor: pointer;
  text-decoration: underline dotted;
}

.about p {
  padding: 4% 6%;
  background-color: var(--bg);
}`
